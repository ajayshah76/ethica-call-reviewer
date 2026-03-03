/* ========================================
   APP.JS — Call Reviewer Application
   ======================================== */

(function () {
  'use strict';

  // --- State ---
  let currentCallId = null;
  let audioEl = null;
  let isPlaying = false;
  let isDragging = false;
  let playbackSpeeds = [1, 1.25, 1.5, 2];
  let currentSpeedIndex = 0;

  // --- DOM References ---
  const callList = document.getElementById('call-list');
  const emptyState = document.getElementById('empty-state');
  const callDetail = document.getElementById('call-detail');
  const detailTitle = document.getElementById('detail-title');
  const detailSentiment = document.getElementById('detail-sentiment');
  const detailSentimentLabel = document.getElementById('detail-sentiment-label');
  const detailMeta = document.getElementById('detail-meta');
  const detailSummary = document.getElementById('detail-summary');
  const summaryHighlights = document.getElementById('summary-highlights');
  const highlightsCount = document.getElementById('highlights-count');
  const keyPointsList = document.getElementById('key-points-list');
  const transcriptContainer = document.getElementById('transcript-container');
  const groupedHighlights = document.getElementById('grouped-highlights');

  // Audio
  audioEl = document.getElementById('audio-element');
  const playBtn = document.getElementById('play-btn');
  const playIcon = document.getElementById('play-icon');
  const currentTimeEl = document.getElementById('current-time');
  const totalTimeEl = document.getElementById('total-time');
  const playerFill = document.getElementById('player-fill');
  const playerProgress = document.getElementById('player-progress');
  const speedBtn = document.getElementById('speed-btn');

  // Tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  // --- Theme Toggle ---
  function initTheme() {
    const root = document.documentElement;
    let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    root.setAttribute('data-theme', theme);

    function updateToggleIcons() {
      const sunSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
      const moonSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
      document.querySelectorAll('[data-theme-toggle], [data-theme-toggle-mobile]').forEach(btn => {
        btn.innerHTML = theme === 'dark' ? sunSvg : moonSvg;
        btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
      });
    }

    function toggle() {
      theme = theme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', theme);
      updateToggleIcons();
    }

    document.querySelectorAll('[data-theme-toggle], [data-theme-toggle-mobile]').forEach(btn => {
      btn.addEventListener('click', toggle);
    });

    updateToggleIcons();
  }

  // --- Render Sidebar ---
  function renderCallList() {
    callList.innerHTML = '';
    CALLS_DATA.forEach(call => {
      const li = document.createElement('li');
      li.innerHTML = `
        <div class="call-card ${call.id === currentCallId ? 'active' : ''}" data-call-id="${call.id}" role="button" tabindex="0" aria-label="View ${call.title}">
          <span class="call-card-title">${escapeHtml(call.title)}</span>
          <span class="call-card-meta">
            <span>${call.duration}</span>
            <span class="sentiment-badge sentiment-${call.sentiment}">
              <span class="sentiment-dot"></span>
              ${escapeHtml(call.sentimentLabel)}
            </span>
          </span>
        </div>
      `;
      const card = li.querySelector('.call-card');
      card.addEventListener('click', () => selectCall(call.id));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectCall(call.id);
        }
      });
      callList.appendChild(li);
    });
  }

  // --- Select Call ---
  function selectCall(callId) {
    if (currentCallId === callId) return;

    // Stop existing audio
    if (audioEl) {
      audioEl.pause();
      audioEl.currentTime = 0;
      isPlaying = false;
    }

    currentCallId = callId;
    const call = CALLS_DATA.find(c => c.id === callId);
    if (!call) return;

    // Update sidebar active state
    document.querySelectorAll('.call-card').forEach(card => {
      card.classList.toggle('active', card.dataset.callId === callId);
    });

    // Show detail, hide empty
    emptyState.style.display = 'none';
    callDetail.classList.add('visible');

    // Populate header
    detailTitle.textContent = call.title;
    detailSentiment.className = `sentiment-badge sentiment-${call.sentiment}`;
    detailSentimentLabel.textContent = call.sentimentLabel;

    detailMeta.innerHTML = `
      <span class="call-meta-item">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
        ${escapeHtml(call.duration)}
      </span>
      <span class="call-meta-item">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        ${call.participants.map(p => escapeHtml(p)).join(', ')}
      </span>
    `;

    // Audio
    audioEl.src = call.audioFile;
    audioEl.playbackRate = playbackSpeeds[currentSpeedIndex];
    audioEl.load();
    totalTimeEl.textContent = call.duration;
    currentTimeEl.textContent = '0:00';
    playerFill.style.width = '0%';
    updatePlayIcon();

    // Summary tab
    detailSummary.textContent = call.summary;
    renderSummaryHighlights(call.highlights);
    renderKeyPoints(call.keyPoints);

    // Transcript tab
    renderTranscript(call.transcript, call.participants);

    // Highlights tab
    renderGroupedHighlights(call.highlights);

    // Reset to summary tab
    switchTab('summary');

    // Scroll to top
    const scrollContainer = callDetail.querySelector('.main-scroll');
    if (scrollContainer) scrollContainer.scrollTop = 0;
  }

  // --- Render Summary Highlights ---
  function renderSummaryHighlights(highlights) {
    highlightsCount.textContent = `(${highlights.length})`;
    summaryHighlights.innerHTML = '';
    highlights.forEach(h => {
      const div = document.createElement('div');
      div.className = `highlight-card highlight-${h.type}`;
      div.innerHTML = `
        <div class="highlight-type-label type-${h.type}">${getTypeLabel(h.type)}</div>
        <div>${escapeHtml(h.text)}</div>
      `;
      summaryHighlights.appendChild(div);
    });
  }

  // --- Render Key Points ---
  function renderKeyPoints(points) {
    keyPointsList.innerHTML = '';
    points.forEach(p => {
      const li = document.createElement('li');
      li.className = 'key-point';
      li.innerHTML = `<span class="key-point-dot"></span><span>${escapeHtml(p)}</span>`;
      keyPointsList.appendChild(li);
    });
  }

  // --- Render Transcript ---
  function renderTranscript(transcript, participants) {
    transcriptContainer.innerHTML = '';

    // Build speaker color map
    const speakerMap = {};
    let speakerIndex = 0;

    const lines = transcript.split('\n').filter(line => line.trim());

    lines.forEach(line => {
      const match = line.match(/^\[([^\]]+)\]:\s*(.*)/);
      if (match) {
        const speaker = match[1];
        const text = match[2];

        if (!(speaker in speakerMap)) {
          speakerMap[speaker] = speakerIndex % 5;
          speakerIndex++;
        }

        const turn = document.createElement('div');
        turn.className = 'transcript-turn';
        turn.innerHTML = `
          <span class="speaker-tag speaker-${speakerMap[speaker]}">${escapeHtml(speaker)}</span>
          <p class="transcript-text">${escapeHtml(text)}</p>
        `;
        transcriptContainer.appendChild(turn);
      } else if (line.trim()) {
        // Continuation line
        const p = document.createElement('p');
        p.className = 'transcript-text';
        p.textContent = line.trim();
        transcriptContainer.appendChild(p);
      }
    });
  }

  // --- Render Grouped Highlights ---
  function renderGroupedHighlights(highlights) {
    groupedHighlights.innerHTML = '';

    const groups = {
      positive: { label: 'Positive Feedback', color: 'var(--color-success)', items: [] },
      issue: { label: 'Issues Found', color: 'var(--color-warning)', items: [] },
      suggestion: { label: 'Suggestions', color: 'var(--color-blue)', items: [] },
      insight: { label: 'Insights', color: 'var(--color-purple)', items: [] },
      quote: { label: 'Quotes', color: 'var(--color-primary)', items: [] },
    };

    highlights.forEach(h => {
      if (groups[h.type]) groups[h.type].items.push(h);
    });

    Object.entries(groups).forEach(([type, group]) => {
      if (group.items.length === 0) return;

      const section = document.createElement('div');
      section.className = 'highlight-group';
      section.innerHTML = `
        <h3 class="highlight-group-title">
          <span class="highlight-group-icon" style="background: ${group.color}"></span>
          ${group.label}
          <span class="count">(${group.items.length})</span>
        </h3>
      `;

      group.items.forEach(item => {
        const card = document.createElement('div');
        card.className = `highlight-group-card highlight-${type}`;
        card.textContent = item.text;
        section.appendChild(card);
      });

      groupedHighlights.appendChild(section);
    });
  }

  // --- Tab Switching ---
  function switchTab(tabName) {
    tabBtns.forEach(btn => {
      const isActive = btn.dataset.tab === tabName;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive);
    });
    tabPanels.forEach(panel => {
      panel.classList.toggle('active', panel.id === `panel-${tabName}`);
    });
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // --- Audio Player ---
  function updatePlayIcon() {
    if (isPlaying) {
      playIcon.innerHTML = '<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>';
    } else {
      playIcon.innerHTML = '<polygon points="6,3 20,12 6,21"/>';
    }
    playBtn.setAttribute('aria-label', isPlaying ? 'Pause' : 'Play');
  }

  playBtn.addEventListener('click', () => {
    if (!audioEl.src) return;
    if (isPlaying) {
      audioEl.pause();
    } else {
      audioEl.play().catch(() => {});
    }
  });

  audioEl.addEventListener('play', () => {
    isPlaying = true;
    updatePlayIcon();
  });
  audioEl.addEventListener('pause', () => {
    isPlaying = false;
    updatePlayIcon();
  });
  audioEl.addEventListener('ended', () => {
    isPlaying = false;
    updatePlayIcon();
  });

  audioEl.addEventListener('timeupdate', () => {
    if (isDragging) return;
    if (audioEl.duration && isFinite(audioEl.duration)) {
      const pct = (audioEl.currentTime / audioEl.duration) * 100;
      playerFill.style.width = pct + '%';
      currentTimeEl.textContent = formatTime(audioEl.currentTime);
    }
  });

  audioEl.addEventListener('loadedmetadata', () => {
    if (audioEl.duration && isFinite(audioEl.duration)) {
      totalTimeEl.textContent = formatTime(audioEl.duration);
    }
  });

  // Progress bar click/drag
  function seekFromEvent(e) {
    const rect = playerProgress.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const pct = x / rect.width;
    if (audioEl.duration && isFinite(audioEl.duration)) {
      audioEl.currentTime = pct * audioEl.duration;
      playerFill.style.width = (pct * 100) + '%';
      currentTimeEl.textContent = formatTime(audioEl.currentTime);
    }
  }

  playerProgress.addEventListener('mousedown', (e) => {
    isDragging = true;
    playerProgress.classList.add('dragging');
    seekFromEvent(e);
    const onMove = (e2) => seekFromEvent(e2);
    const onUp = () => {
      isDragging = false;
      playerProgress.classList.remove('dragging');
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  });

  // Touch support for progress bar
  playerProgress.addEventListener('touchstart', (e) => {
    isDragging = true;
    playerProgress.classList.add('dragging');
    seekFromTouch(e);
    const onMove = (e2) => { e2.preventDefault(); seekFromTouch(e2); };
    const onEnd = () => {
      isDragging = false;
      playerProgress.classList.remove('dragging');
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('touchend', onEnd);
    };
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('touchend', onEnd);
  }, { passive: true });

  function seekFromTouch(e) {
    const touch = e.touches[0] || e.changedTouches[0];
    const rect = playerProgress.getBoundingClientRect();
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const pct = x / rect.width;
    if (audioEl.duration && isFinite(audioEl.duration)) {
      audioEl.currentTime = pct * audioEl.duration;
      playerFill.style.width = (pct * 100) + '%';
      currentTimeEl.textContent = formatTime(audioEl.currentTime);
    }
  }

  // Speed control
  speedBtn.addEventListener('click', () => {
    currentSpeedIndex = (currentSpeedIndex + 1) % playbackSpeeds.length;
    const speed = playbackSpeeds[currentSpeedIndex];
    audioEl.playbackRate = speed;
    speedBtn.textContent = speed === 1 ? '1x' : speed + 'x';
  });

  // --- Utilities ---
  function formatTime(seconds) {
    if (!seconds || !isFinite(seconds)) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function getTypeLabel(type) {
    const labels = {
      positive: 'Positive',
      issue: 'Issue',
      suggestion: 'Suggestion',
      insight: 'Insight',
      quote: 'Quote',
    };
    return labels[type] || type;
  }

  // --- Keyboard Navigation ---
  document.addEventListener('keydown', (e) => {
    // Space to play/pause when not in input
    if (e.code === 'Space' && e.target === document.body) {
      e.preventDefault();
      playBtn.click();
    }
  });

  // --- Initialize ---
  initTheme();
  renderCallList();

  // Auto-select first call on load
  if (CALLS_DATA.length > 0) {
    selectCall(CALLS_DATA[0].id);
  }

})();
