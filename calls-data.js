const CALLS_DATA = [
  {
    id: "call-patrick",
    title: "Call with Patrick",
    audioFile: "./Call-Recording.m4a",
    duration: "14:16",
    durationSec: 856,
    participants: ["John (Ethica)", "Patrick (Agent)", "Jeff (Ethica Product)"],
    sentiment: "positive",
    sentimentLabel: "Mostly Positive",
    summary: "Patrick tested the voice-driven RPA contract creation. He was impressed by the speech recognition accuracy, especially with complex names (Wilfred Watson Prince III) and address corrections. Main issues: the system hung up on him twice, the contract wouldn't generate via voice command (got stuck in a loop), and the generated PDF was not editable — he couldn't check agency representation boxes or fix minor issues. Jeff clarified that editing limitations were due to the beta using a shared CAR account, and that missing checkbox fields for agency representation were being fixed that week.",
    highlights: [
      { type: "positive", text: "Voice recognition handled complex names like 'Wilfred Watson Prince III' and corrected Roman numerals (III to I-I-I) perfectly" },
      { type: "positive", text: "Address corrections worked smoothly — changed 'Sussex Avenue' to 'Sussex Way' via voice" },
      { type: "positive", text: "Patrick liked the guided Q&A approach: 'It was walking me through it, asking me questions. I thought that's kinda cool.'" },
      { type: "issue", text: "System hung up on him twice during the session" },
      { type: "issue", text: "Contract generation via voice command failed — got stuck in a loop saying 'it's in drafts, not progressing'" },
      { type: "issue", text: "Generated PDF was not editable — couldn't check boxes or fix text after generation" },
      { type: "insight", text: "Patrick comes from IT and understands it's a work in progress, but editing capability before sending to listing agent is critical" },
      { type: "quote", text: "'You make it bug-free, it's probably cool.' — Patrick" }
    ],
    keyPoints: [
      "Speech recognition accuracy was excellent, even with unusual names and addresses",
      "Voice-only contract generation failed — had to manually click 'generate' on screen",
      "Call dropped twice, but the system picked up the transaction smoothly on reconnect",
      "PDF not editable after generation — agency checkboxes and minor corrections couldn't be made",
      "Beta account limitations (CAR shared account) explain some missing agent/brokerage info",
      "Missing checkbox fields for agency representation being fixed this week",
      "Patrick willing to test again after improvements — wants email notification when updates ship"
    ],
    transcript: `[John]: Oh, there we go. Yeah, I just wanted to get some feedback about the platform. Good, bad, you know, what you saw, you know, what you thought was good, what you thought wasn't good, any, any hiccups.

[Patrick]: Yeah. So on a good note, I would say it was picking up the words that I was saying really well, so I wondered how it would handle different weird street names which can be pretty specific. Even the, my buyer, I put it in my dad who's got a weird name, Patrick, uh, Wilfred Watson Prince III.

[John]: Yeah, I saw that.

[Patrick]: And, uh, and it wrote out the third, and then I said, "Hey, correct that name to be Wilfred Watson Prince I-I-I," and it just popped it right in, so that was pretty slick.

[John]: Yeah.

[Patrick]: Glitches that I experienced, well, first of all, it never generated a document through the voice command, and I did end up going on the computer and telling it to generate it, and it did.

[John]: Did it not do it? Did it not send you the link when you first called?

[Patrick]: Yes, and I was watching it populate it as it went, but in the end, when I said, "Create the contract" it never created the contract for me by voice command.

[John]: Oh, gotcha. Okay.

[Patrick]: And it, I tried it maybe four or five times, and then eventually I just went on the computer screen and told it to generate, and then it generated it and sent me a link to download it.

[John]: Okay. Was that your first time or when you came back?

[Patrick]: It hung up on me twice, so I guess I was on technically my third call by the time I told it to generate.

[John]: Yeah.

[Patrick]: It cut me off the first time maybe just a couple minutes in. I called back. It picked up the transaction pretty smoothly I thought. And then I think it was when I was trying to generate the contract maybe when it hung up on me the second time, and I called back and told it to generate it, and it kept getting stuck in a loop. It said, "It's in drafts. It appears there's no errors." But then it just stalled out. Like it never created it.

[John]: Okay.

[Patrick]: And I told it to try again a couple of times, and every time it just kept saying, "It's in the queue, but it's not progressing." And then it recommended finally that I just click it on the screen.

[John]: Okay.

[Patrick]: And lastly, John, maybe I didn't play with it a lot. I needed to move on to the next thing at this point. But I did try to go in and edit the document, and it did not appear editable. Which kind of makes sense if it's a PDF, but like, some boxes that were missing, like where you show the buyer's representative and the seller's representative and you gotta say, "Oh, Summit Real Estate represents the buyer only," and whoever Keller Williams represents the seller only. The boxes weren't checked, and so I thought, "Well, I could clean that up." But I couldn't quickly figure out how... It didn't seem to allow me to check those boxes or correct a misspelling or anything once it was out as a PDF.

[John]: Okay. Yeah, 'cause I see it here, and it said, "Okay, I just triggered it again. It's still sitting in the draft. The RPA has not generated. There's no failure, but it isn't progressing."

[Patrick]: Yeah.

[John]: Oh, and that's when it said, "Open the link on your phone, scroll to the bottom and tap generate."

[Patrick]: Yeah. Finally it told me that. A couple of times I said, "Well, are you still working on it?" And she responded and said, "Oh, it's still in drafts. It appears there's no errors, but it's not generated yet." It told me that a couple of times. This was probably over the course of a couple minutes. And then finally it suggested that I click it from the computer.

[John]: Okay. Let me see here.

[Patrick]: I think making sure that that document is editable for sure or easily is probably the biggest thing. Like, would I use it? Yeah. Maybe. But it's gotta be easier than me going into WINForms and just typing it in. So I kinda liked that it was walking me through it, asking me questions. I thought, "Oh, that's kinda cool." But there's gonna be mistakes, and then in the end I need to look over it and make sure it's perfect. And I couldn't figure out how to correct it.

[John]: Yeah. So did you click on the link in the very beginning when it sent you the RPA and just follow along, or you just went with it and let it walk you through it?

[Patrick]: I let it walk me through. I wanted to see how that interaction was. I don't think I typed anything on the computer. I think I did it all by voice because, well, voice is in your name, so I thought maybe that was the feature I should be testing the most.

[John]: No, yeah, you don't have to type anything. The thing that happens in the beginning is that you have the option to either click on the link that they send you, so it's the RPA, so you can follow along, so you can see the boxes and everything. So if you do see a misspelling in your dad's name right then and there, then you can say, "No, it's actually this," because you're looking at it as she's doing it live.

[Patrick]: Yeah. I did not see the actual RPA document until it had generated it. I was in maybe your field software, you know? I could see the fields and I could see it filling them in, and I'm sure I could have edited there, but I was really pressing hard on the voice part. Like when it misspelled my dad's name, I thought, "Well, that's kinda cool, 'cause then let's see how it corrects it." And it did. But I never saw it on the contract until it was generated, and then once it was generated I couldn't... It said edit the document, but when I did that, it didn't appear that I could edit it.

[John]: Yeah, you shouldn't have to click anything. It should just be done by voice. So I'll check that out and I'll go through your transcript again. So what was the most frustrating part?

[Patrick]: I thought it did a pretty great job overall of picking up what I was saying, so that was pretty great. And even when I saw — like I made another mistake. I said Sussex Avenue, and then I realized, oh, it's Sussex Way. And so I said, "Oh, correct the address." "What would you like it to be?" And I said it, and it picked it right up, so that was all pretty great. I think at any stage though, before I go to print, I should be able to work on the document, and I didn't seem to be able to do that. The only real glitch I saw was when it wouldn't generate it by voice command.

[Patrick]: I'm originally from the IT world, so I'm giving it a little bit of grace that it's a work in progress, right? Otherwise, you wouldn't be demoing it to us.

[John]: No, yeah. Let me find that out real quick.

[Patrick]: But as a practitioner, I'll say — even if I get it as a PDF, I've gotta be able to go in and finish tweaking it.

[John]: Yeah. Hey, Jeff. Hey, I'm on with Patrick right now. He just had a question, and I wanted to get your take on it. So he called twice, and I think the system hung up on him. So then when he went back the third time, it brought up his offer. The question is, if we go and do that and there is something that happens, like in Patrick's case, does it resend the link or no for the RPA?

[Jeff]: For a current one, or specifically for the one he's looking for, so if he had more than one offer. So you can just say, have it show me the offer for 123 Main Street and this address name.

[John]: Okay. And then lastly is when they do finish... Well, Patrick, maybe you can explain the editing part, 'cause you should be able to do it, I'm assuming.

[Patrick]: Yeah. So I think I had finished creating the offer. I was doing it all by voice, and then I said, "Okay, generate this contract for me," and it sent me a link. But it sent me a link, and that opened it up on my screen as a PDF, and I went, "Oh, okay, there's a couple of checkboxes that I would like checked that weren't." And that's no problem. That's just a quick little bit of cleanup, right? But I couldn't figure out how to edit that document once it had sent it to me. And I think there was an Edit PDF button, and it did open a new window, but still I couldn't mark the document. Even though it said edit the document, once I clicked it, I still couldn't edit it.

[Jeff]: Got it. It — in the beta test, I don't believe you were able to see the document in the PDF. What we're doing is we're using the one account from CAR that they provided us with, and you're actually testing through our account. So when it's eventually going to be linked to your ZipForm account, you'll be able to do all of those things and edit from there. But at this point, the PDF is available.

[Patrick]: Yeah. And I saw a little bit of where I could tell I wasn't in my own account. Like, I think the buyer's agent or something was listed as California Association of Realtors. So that, I wrote that off as a beta version. But still, yeah. Some checkboxes were missing, so I just needed to be able to go in and finish cleaning that up before I mailed it to the listing agent and I couldn't.

[Jeff]: In this case, there's two things going on. One, we're obviously not using your account. And also some of those checkboxes are actually missing fields that we are correcting this week to make it where the agency representation and that kind of thing — those checkboxes were not in the current version that you're testing now. But they are coming.

[Patrick]: Oh, that explains it. That's exactly what I was trying to do, was put the check marks just next to agency, and it wouldn't let me do that. But I think I even tried clicking on the buyer's name. Like, if I had made an error, could I correct the buyer's name if I had a misspelling? And I couldn't appear to edit anything.

[Jeff]: You can in the offer form. So when she sends you the link and you click on that link, in that form you can type freely anything you'd like to make a correction. You will be on the form within ZipForms. But right now we're kind of in an in between stage, so I don't think you can edit the document in the PDF stage.

[Patrick]: Okay. That's coming soon, but not there yet.

[John]: Yeah, 'cause one of the things that he did, Jeff, was he didn't click on the link. I told him he doesn't have to. But he put in his dad's name, and it corrected it. But my thing is that if they do click on the link, even though they shouldn't have to, they can follow that step by step. So if there is a correction that's needed, they can say, "Hey, Ethica, that's not the right name," and it'll allow them to correct it right then and there.

[Patrick]: And it did. Yeah. While I was still in the generating stage, I was able to correct it. But once it generated the document, I couldn't edit at all.

[John]: Yeah. So, Patrick, we don't wanna keep you on, we appreciate it, but just overall feedback in a nutshell.

[Patrick]: I think it's a neat idea. You make it bug-free, it's probably cool.

[John]: Awesome. All right. Well, hey, we appreciate it. And if you do wanna play around with it again, you can feel free to go back in and start messing around with it again.

[Patrick]: Yeah. I don't know how long our demo is available, but maybe if you guys send out an email to our group when you guys have made an improvement, I'd be happy to go back in and test it again.

[John]: Yeah. Perfect. We appreciate the time, Patrick, and definitely thank you again for doing all this.

[Patrick]: Of course. Thank you, Jeff.

[John]: Bye-bye.

[Patrick]: Bye.`
  },
  {
    id: "call-damon",
    title: "Call with Damon Knox",
    audioFile: "./Call-with-Damon-Knox.m4a",
    duration: "11:00",
    durationSec: 660,
    participants: ["Jeff (Ethica)", "Damon Knox (Agent)"],
    sentiment: "very-positive",
    sentimentLabel: "Very Positive",
    summary: "Damon had a very positive experience on his second attempt, finding the system 'super intuitive' with questions presented line by line matching the contract format. He suggested two key improvements: pulling in listing agent/brokerage info automatically (via MLS Connect), and better handling of complex ethnic names. Damon's wife's Greek surname 'Vamvakias' was transcribed as 'Vambekias' — close but not exact. He clicked the link and followed along in real time, appreciating the ability to audit fields before generating. Damon manages offices using both SFAR and CAR contracts and said he could fill one out in about 5 minutes, so speed is key for experienced agents.",
    highlights: [
      { type: "positive", text: "Second attempt was 'super intuitive' — questions presented line by line matching the actual contract format" },
      { type: "positive", text: "Clicked the link and watched fields populate in real time — appreciated the ability to audit on the fly before generating" },
      { type: "positive", text: "'You guys are off to a great start. I can see where this is gonna be useful for a lot of people.'" },
      { type: "suggestion", text: "Pull in listing agent name, brokerage, and license numbers automatically — agents won't have this info while driving" },
      { type: "issue", text: "Complex ethnic names are challenging — wife's Greek name 'Vamvakias' was rendered as 'Vambekias'" },
      { type: "insight", text: "Experienced agents can fill a CAR contract in ~5 minutes — Ethica needs to beat or match that time" },
      { type: "insight", text: "Feature to use past history and intuitive presets to speed up the process would be valuable" },
      { type: "quote", text: "'Everything was fantastic... the intuitiveness for somebody who's been in the business.' — Damon" }
    ],
    keyPoints: [
      "First attempt had formatting issues, but second attempt was perfectly structured to match the contract",
      "Wants automatic pulling of listing agent info, brokerage, and license numbers (MLS Connect planned)",
      "Complex/ethnic names are a challenge — wife's Greek name was close but misspelled",
      "Accents and dialect variations will need AI training for better recognition",
      "Deep link security feature (unique, expiring links) was appreciated",
      "Ethica currently takes ~12 minutes on the short route; experienced agents do it in ~5 minutes",
      "Product team working on smart presets based on past history — no templates, more intuitive",
      "Default timeframe prompt was well-received — asking if standard or custom timeframes",
      "Damon manages offices using both SFAR and CAR contracts — good perspective on both"
    ],
    transcript: `[Jeff]: Go ahead.

[Damon]: Yeah. So what I was gonna say is, my original feedback and what I was having a problem with the first time I did it was it wasn't formatted like the contract is, but the second time I used it, everything was line by line, question by question as it presents itself in the contract. Super intuitive if you know the document, and super helpful. It would be really nice if there was a feature that pulled in the listing agent, as well as their brokerage licensing numbers into the form.

[Jeff]: Yeah, that's definitely in the works, just so you know.

[Damon]: Okay.

[Jeff]: We're gonna either use MLS Connect to do that. We're also gonna try to go after the APN, so you won't have to do that. We'll actually pull in as well, either from a title company or from tax records. Yes, we're definitely gonna work on automating those things so there's — you could do this while you're driving, 'cause nobody has that information off the top of their head.

[Damon]: 100%. And if you did, it would be wonderful. So that's the first big thing. The second is complex names, especially when it comes to very complex ethnic names, which we typically have a lot of in the Bay Area. Indian names can be very, very hard. My wife's Greek name, it got pretty wrong. Got close, but it got it wrong.

[Jeff]: Oh, no.

[Damon]: Where there's a lot of consonants near each other without the use of a very soft vowel, I think it's gonna have problems with a lot of that dictive spelling.

[Jeff]: Yeah, for sure. Now, did you try spelling with it also?

[Damon]: I didn't try spelling with it specific to the fact that most people aren't going to have the spellings of their clients' very hard to pronounce and/or spell names off the top of their head if they're driving and using the tool.

[Jeff]: Absolutely. Okay.

[Damon]: So from that perspective, those were the only two things that I saw that were like gaping holes in the initial use case. But in terms of the intuitiveness for somebody who's been in the business and the way that it functions, formats, and creates the document, everything was fantastic.

[Jeff]: Awesome. That's fantastic. I'm curious about your instinct when you got the link. Did you click the link? Did you engage with that?

[Damon]: Oh, yeah. I clicked the link, and I was scrolling as it was filling. So I was watching it in real time as things were happening. And from that perspective, it's nice because you can go back and audit on the fly prior to generating the doc and having the doc sent to you, which I think is great. So having the ability to look at that in the app, again, a little hard when you're driving, but a nice feature to have. My initial instinct was, is this one of those things where I open the app and then it shuts down the phone call? But obviously that didn't occur.

[Jeff]: Yeah. Just to note, the deep link that we're sending you there does work as security as well. The link is unique to you, and it does expire as well, so it doesn't just lay live. So it's — we're using that as kind of like how you get a one-time passcode without having to enter a one-time passcode, which is even more convenient.

[Damon]: Even better. It, you guys are off to a great start. I can see where this is gonna be useful for a lot of people.

[Jeff]: Awesome. That's great to hear. I'm curious — we're struggling with how fast to guide somebody through the entire RPA. So we could be — a good example is we have 90 questions we could ask you, which sometimes doesn't really apply. And as the system gets smarter further down the road, it'll be intuitive to know, if you have a simple all cash offer, it's gonna know how fast it can go through. But in the beginning, we're wondering, how long would it take you to just fill out a normal residential conventional loan offer?

[Damon]: And I'll be 100% transparent on this — I work at a side company. So for me, I'm doing it on my phone, and they have shortcuts built into the system that allow us to kind of truncate the process, similar to the prompts you're looking to use. So for me, it usually takes me about... And I'm also in San Francisco, so I'm on a different contract than the California contract, although I manage offices that use both the SFAR as well as the CAR contracts, and I've gotta be very familiar with both. If I'm on a CAR contract, it's probably about five minutes because I know all the bullet points. I'm very, very well-versed in the document. Where I can't say that about most of the agents.

[Jeff]: Yeah, fair enough. That's the thing that we're struggling with, 'cause we obviously wanna take into account that there's gonna be someone that's a new agent, and what a great tool to just have guardrails around them and make sure that they're writing a clean and compliant offer. But then you have yourself and with the expertise that we wanna be able to accommodate and actually make it convenient so you don't have to go to a desk and fill out something using a laptop where you could just do it as you're talking. And — so five minutes is really fast. We have our work cut out for us. 'Cause we're, I think we're 12 minutes now if we take the short route. But it'll definitely get faster too.

[Damon]: I think it will. And the prompts like, "Are there contingencies, yes or no?" Then put it into a different cycle of asking questions, right? So there's efficiencies. "Is this an all-cash offer?" "Yes." "Do you want the contingency removal form attached?" "Yes." Those should be prompts, especially on cash offers. And then there are just a few other efficiencies that could make that process move a little bit faster. I did like that it asked if you want all of the regular timeframes to be present or do you wanna change them. I thought that was very good.

[Jeff]: Yeah. I know the product team is definitely working on the ability to not necessarily have to set up templates, 'cause we think that's a little dated. But more so that it's intuitive and knows your past history, and can actually use that past history to speed things up 'cause it recognizes something that fits that pattern. So there's gonna be some really cool presets that you'll be able to toggle on or toggle off just by saying it. So it'll get faster and faster for sure that way.

[Damon]: That's awesome.

[Jeff]: So that's awesome. Sounds like it was a great experience though. There's — if you do compare the fields to the RPA right now, we're working on the mapping, so there's a lot that are not necessarily mapping directly to the PDF yet. But that's being worked on this week.

[Damon]: Yeah. And I haven't even pulled up the PDF yet. But in terms of what I was seeing in the app versus what I'm gonna compare it to in the PDF later, when I do have time to sit down and go through it, I'll provide you guys with additional feedback based on what actually showed up.

[Jeff]: Yeah. Don't waste too much time on the mapping, only because we're aware of the fields that are not at this point. I just don't want you to waste valuable time that you have. It's more about collecting what your experience is in this first beta, and obviously it'll get better as we go.

[Damon]: Appreciate it. And if you need anything else or if you iterate another version you need some more testing on, feel free to give me a shout or just shoot me an email or text and ask me to roll into it. It took very little time to do so.

[Jeff]: Awesome. Thank you very much. We'll reach out again. We appreciate your feedback though, Dan, and thanks for your time as well.

[Damon]: Of course. All right. Have a great day.

[Jeff]: You too. Bye-bye.

[Damon]: Bye-bye.`
  },
  {
    id: "call-nancy",
    title: "Call with Nancy",
    audioFile: "./HubSpot-Call-352244199152.m4a",
    duration: "11:34",
    durationSec: 694,
    participants: ["John (Ethica)", "Nancy (Agent)"],
    sentiment: "very-positive",
    sentimentLabel: "Very Positive",
    summary: "Nancy had a very enthusiastic experience, calling it 'very slick,' 'wonderful,' and 'an amazing tool.' She appreciated the guided question-by-question approach and tested creative scenarios like including patio furniture in the offer terms. She noted a minor 'three person' vs 'three percent' transcription hiccup that self-corrected. She raised that the system should ask 'How is that spelled?' for names since it misheard 'Heaven' as 'Kevin.' Nancy also recommended the tool to her stepdaughter Kinsley, who runs a property management company and is a busy mom — the perfect target user.",
    highlights: [
      { type: "positive", text: "'It was very slick... wonderful... I really think it's an amazing tool.'" },
      { type: "positive", text: "Opened the link and watched fields populate in real time while on the call" },
      { type: "positive", text: "Tested creative scenarios like patio furniture inclusion — system picked it up" },
      { type: "positive", text: "Question-by-question prompting was preferred: 'Way better for them to ask the questions, 'cause that way you don't miss anything'" },
      { type: "issue", text: "'Three percent' was initially heard as 'three person' — but self-corrected when repeated" },
      { type: "suggestion", text: "System should proactively ask 'How is that spelled?' for names — misheard 'Heaven' as 'Kevin'" },
      { type: "insight", text: "Nancy was surprised by the depth of the contract coverage — pleased it went deep into all fields" },
      { type: "insight", text: "Recommended to stepdaughter Kinsley (property management, busy mom) — described it as 'silly simple' and 'actually kind of fun'" }
    ],
    keyPoints: [
      "Overall impression was extremely positive — 'wonderful,' 'slick,' 'amazing tool'",
      "Deposit input: 'three percent' heard as 'three person' initially but self-corrected",
      "Proactive spelling confirmation needed for names — 'Heaven' misheard as 'Kevin'",
      "Compensation and concession fields were handled well",
      "Ability to leave certain fields blank and go back to add later was appreciated",
      "Experience was 'so easy' — initial reluctance disappeared quickly",
      "Nancy will refer stepdaughter Kinsley who does property management",
      "Pace was noted as 'a little slow' but acceptable given it needs to understand input"
    ],
    transcript: `[Nancy]: Hi there.

[John]: Hey, how are you?

[Nancy]: Good. Good. It was very slick.

[John]: Oh, you liked it?

[Nancy]: Yeah, it was great. I loved it. It was wonderful.

[John]: Yeah. Yeah.

[Nancy]: It was wonderful. And I saw a couple times that you — it didn't seem as she picked it up a couple times, like the two two two address, and then she clarified it, and then you went back and clarified it again. So yeah, that's the stuff we get to see.

[John]: Yeah.

[Nancy]: Yeah. It was — I was just very, very impressed. It — the form, 'cause I was watching — So I opened the text while I was doing this. So I was watching what was being done, and I was a little bit thrown because the deposit showed a dollar amount rather than a percentage. But then I saw in the form, when it actually put it in the form, it did do the dollar amount. But I voiced it in as a percentage.

[John]: Oh, I got you. Okay. Yeah, I'll go back to the transcript and take a look at that. But then it seemed like it re-corrected itself?

[Nancy]: Yeah. I mean, I repeated it and it kind of said, "Well, you know, I already got that," which I thought was kind of funny. But then when I saw that they did the — again, when it was completed on the actual RPA, it was — it never said percentage. It went from the dollar, and it said three. It looked like three dollars. But then when it actually landed in the contract, it was the percentage of the sales price.

[John]: Okay. Gotcha. Let me see here for a sec. So it took it as — I think the reason is because when it said, "How much is the initial deposit?" You can give me a percentage or a dollar amount. You said three percent, but it took it as three person, and then it said, "Did you mean three percent for the initial deposit or a specific dollar amount?" You said, "Three percent," and that's when it went back to the next question. So it just tried to pick up and, you know, by no means did you say anything wrong. I just think it thought you said three person and not three percent, and then it picked up on three percent when you actually said it again.

[Nancy]: Okay. Cool.

[John]: Yeah. You had some specific questions, and I thought rather than do it in an email, I thought I would just have a conversation with you.

[Nancy]: Oh yeah, I love that better. So when you got the link, you obviously clicked the link right away?

[John]: Um, not right away. What happened was I kinda didn't hang up on it. I was just doing other work. And then it hung up. And so I'm like, "Oh, well." I kind of assumed I was gonna have to go into my zipForms to look at it, but it gave me a link.

[Nancy]: Yes. Correct. Which was amazing. Yeah.

[John]: Yeah. And then — was the pace good? The step-by-step process pretty easy to follow along?

[Nancy]: Yeah. It was. For sure. It wasn't — I felt like it was a little slow, but you know, what do you want? I mean, it's doing the best it can and wants to understand, and I like that I was able to interact with it when I wanted to give it more details. Like when I was saying about the patio furniture.

[John]: The furniture and all that? Yeah.

[Nancy]: So yeah, that was really, really interesting. I really think it's an amazing tool.

[John]: Yeah, no, I was reading your transcript. I'm like, "Oh, she's awesome. She was throwing some stuff in there about the patio furniture to see if it would pick it up."

[Nancy]: Yeah. No, it was great. Did you happen to speak with my stepdaughter, Kinsley, about doing it?

[John]: Yes. She was supposed to do it. I spoke to her. Bear with me here.

[Nancy]: Yeah, I would follow up on that, 'cause she would be a really good — 'cause she's so busy because they do property management. This kind of tool would be — and she's a mom of my grandkids, which are eight and 10. You know, this would be a huge tool for her. And I thought she would push back because she's, a lot of times, not wanting to take the time to learn new tools. But this, I — that was a little bit of my concern. I'm like, "Oh, I don't really know if I wanna spend my time doing this right now because I got other things I gotta do." And it was so easy. You know, it was like, this is great. I mean, it was — yeah. I mean, I think it — love, I love the idea that they're prompting you. Like, I see you have the option to just put in the parameters, but it's way better for them to ask the questions, 'cause that way you don't miss anything.

[John]: Correct. And that's great feedback. Yeah, I talked to Kinsley a few days ago, and she said the exact same thing you did — she got the email I sent out. She's out of town and just hasn't had a chance. She's been so swamped. She has two properties in escrow, and she also mentioned that she had the property management company too. So I just told her when she gets onto it. But yeah, if you can just send her a text or if you speak with her, just say, "This is awesome, and I tried it out, and it's really fantastic," that'd be great.

[Nancy]: Yeah. I would be happy to do that.

[John]: And then also, just real quick because you did bring it up — were there any fields that you expected it to ask that it didn't by chance?

[Nancy]: I was surprised actually that it did. I mean, I was surprised that it did go deep into the contract. I mean, to be honest with you, I haven't done an RPA in a while. So for it to be as thorough as it was, I was really pleased. So no, I can't think of anything. Let me just give it a minute to think about here. You did the compensation, which was great. And it gave you the chance to leave certain things blank, so you could always go back and add that. I'm trying to think if there's anything else that comes up on a purchase agreement. The concession, that was great. Yeah. And it looked like it picked up my exact language, I think.

[John]: Yeah. There was only, I think, really just the one where it was the three person it picked up on, but it was three percent. And then I think at the beginning when you did the address for it, which was the two two two two, and it said, "I heard two two two two," and then, "Can you tell me the full property address?"

[Nancy]: No. Actually, I made them up, and I actually didn't say Kevin, but I didn't really care because it was just — I made it up anyway, so who cares? But it didn't actually pick up the — like it should ask, "What's the spelling?" Because I think I said the name was something — Lucy Loose or something like that, and DeWitt was another name. And they should say, "How is that spelled?" If they could correct — is this the correct spelling or something because it's not really... Like, when it said Kevin, I actually said Heaven. So that's where you're gonna find — because that's such a nuance how people speak.

[John]: Yeah. And it, I think — that's gonna get cleared up because again, this is just testing it. So that's something that could be added, worked in. And yeah, you are correct because if people don't wanna bring up the RPA or don't click on it in the very beginning and they're not following along, they're not gonna notice the spelling error from you saying heaven to Kevin.

[Nancy]: Right.

[John]: But what the AI system did — it maybe thought heaven's not a name, so what's the closest one, Kevin?

[Nancy]: Maybe. Why wouldn't there be a street called Heaven?

[John]: Right. So I'm not sure why it said Kevin instead of Heaven. But yeah, I totally agree with that. But I'm glad you had a great experience. And the other cool part is you don't have to just test it once. So if you wanna go back in and just say, "Hey, can you bring up my offer?" And then they'll ask you which one, or if you only have one, it'll just bring up that one and say, "I noticed that the address is wrong. You put Kevin, and it should be Heaven, H-E-A-V-E-N," and it'll correct it.

[Nancy]: Nice. Well, I'm gonna call Kinsley and let her know how silly simple it is and that it's actually kind of fun, and she doesn't have to really do anything except answer questions.

[John]: Yes. That's — we wanna make it simple. We don't build technology to make it more difficult. So we — you guys have too much to do, so if this is the easiest part that we can get simplified, then we scored success.

[Nancy]: Absolutely.

[John]: All right. Well, I appreciate it, and yeah, feel free to call Kinsley. I'll see her transcript when it comes through, and really appreciate you taking the time to do this.

[Nancy]: Of course. Thank you. Have a great rest of your day.

[John]: You too, Nancy. Thank you.

[Nancy]: Thanks. Bye.`
  },
  {
    id: "call-michael",
    title: "Call with Michael",
    audioFile: "./HubSpot-Call-349611799280.m4a",
    duration: "2:30",
    durationSec: 150,
    participants: ["John (Ethica)", "Michael (Agent)"],
    sentiment: "very-positive",
    sentimentLabel: "Very Positive",
    summary: "Short but very positive feedback call. Michael found the experience 'very smooth and very timely.' He particularly liked being able to interrupt the AI mid-question with his answer, saying it 'picked it right up' — feeling like a genuine conversation rather than talking to a robot. Being a very experienced agent, he found it easy but noted uncertainty about whether newer agents would have the same experience.",
    highlights: [
      { type: "positive", text: "'Very smooth and very timely' — no hiccups at all" },
      { type: "positive", text: "Loved the ability to interrupt mid-question: 'I could just sort of interrupt them with that information, and they picked it right up'" },
      { type: "positive", text: "Felt like a genuine conversation — didn't feel the need to speak robotically" },
      { type: "insight", text: "Experienced agent — uncertain if new agents would find it equally easy" },
      { type: "quote", text: "'Not at all [any issues]. It was very smooth. Very smooth and very timely.' — Michael" }
    ],
    keyPoints: [
      "No issues or hiccups reported — entirely positive experience",
      "Conversational feel was natural — not robotic interaction",
      "Ability to interrupt and provide answers mid-question was a standout feature",
      "Experienced agent perspective — easy for him, uncertain about newcomers",
      "Brief call — Michael was clearly satisfied with no complaints"
    ],
    transcript: `[John]: Hi, John.

[Michael]: Hey, Michael. How you doing, sir?

[John]: I'm well, thank you. How about yourself?

[Michael]: Oh, doing good. Hey, thank you for doing that test I saw you just completed.

[John]: I did. I felt your pressure, so I did it right away.

[Michael]: [laughs] I put no pressure. Come on. I just wanted to get some feedback from you and see how everything went, see how you like the flow, if there was anything with any questions or anything that you thought might be able to be put in or that you had a hiccup with.

[John]: Not at all. It was very smooth. Very smooth and very timely.

[Michael]: Oh, nice. So you found the experience to be somewhat easy and simple?

[John]: Oh, yes. For sure. Yeah.

[Michael]: Anything about the going through the RPA form or anything that came up?

[John]: No. Of course, because I've been around for so long, I'm very familiar with the RPA. So I don't know from the standpoint of, let's say, a new agent, whether or not that would be as easy for them, but for me it was great.

[Michael]: Okay. So you found the experience to be pretty enjoyable, pretty simple for anybody experienced or even somebody new?

[John]: Yep. Yes, sir.

[Michael]: Any feedback on anything as far as anything that you found that we could have added or anything that didn't go as well as you planned?

[John]: No, not at all. The one part that I especially liked was the fact that they would ask a question, and if it was something that I had the answer to immediately, I could just sort of interrupt them with that information, and they picked it right up.

[Michael]: Yeah. It's really just a genuine conversation. And you didn't feel as if you had to speak robotic like some people do? 'Cause I see a lot of the sounds, and they somewhat talk like this, like they think they have to talk to a robot.

[John]: No. No.

[Michael]: Okay. Perfect. Well, feel free to go ahead and play around with it. If you wanna bring up your offers again, if you have any edits that you wanna make, you can do that again.

[John]: I appreciate that. Sure.

[Michael]: Yeah. We definitely appreciate everything you do for us, and thanks for testing that out. And if you need anything, let me know, and feel free to test it again.

[John]: John, I will. Thank you so much.

[Michael]: Thanks, Michael.

[John]: Enjoy your — have a great weekend.

[Michael]: You too, sir.

[John]: Thank you.

[Michael]: Bye-bye.

[John]: Bye.`
  },
  {
    id: "call-spencer",
    title: "Call with Spencer",
    audioFile: "./HubSpot-Call-349611961027-1.m4a",
    duration: "12:40",
    durationSec: 760,
    participants: ["John (Ethica)", "Spencer (Agent / Compliance Expert)"],
    sentiment: "constructive",
    sentimentLabel: "Constructive Critical",
    summary: "Spencer, a compliance expert who works at Side (a real estate company), provided the most detailed and technical feedback. He praised the 'impressive engine' and excellent name recognition (picked up 'Bun Trappington'), but had a lengthy list of missing fields and mapping issues: close of escrow date, loan amount, interest rate, points, increased deposit, seller credits (3G2), buyer's broker compensation, home warranty, allocation of costs, and various checkbox fields. He also flagged a compliance issue: the term 'EMD' (Earnest Money Deposit) should not appear since it's not in the California contract. The AI misinterpreted '3G1' as 'three grams one.' Spencer offered to connect Ethica with Side's tech team.",
    highlights: [
      { type: "positive", text: "'An impressive engine... this is a really difficult thing to map' — Spencer, compliance expert" },
      { type: "positive", text: "Name recognition excellent — picked up made-up names like 'Bun Trappington' correctly" },
      { type: "issue", text: "Close of escrow '94 days' was not entered — AI said it wouldn't know until escrow opens" },
      { type: "issue", text: "Multiple missing fields: loan amount, rate, points, increased deposit, seller credits, broker compensation, home warranty" },
      { type: "issue", text: "Compliance flag: 'EMD' terminology should be removed — not in the California contract" },
      { type: "issue", text: "Included items (autopsy table, pinball machine, Skee-Ball) didn't show up in the generated contract" },
      { type: "issue", text: "AI interpreted '3G1' (paragraph reference) as 'three grams one'" },
      { type: "suggestion", text: "Allocation of costs section should prompt: 'Natural hazard disclosure — buyer, seller, or both?'" },
      { type: "insight", text: "Spencer works at Side, a real estate tech company, and offered to connect Ethica with their tech team" }
    ],
    keyPoints: [
      "Compliance issue: Remove 'EMD' term from the app — it's not in the California contract and creates legal risk",
      "Close of escrow date handling needs fixing — '94 days' should be accepted as a relative date",
      "Missing fields: loan amount, rate, points, increased deposit, seller credits (3G2), broker compensation, home warranty",
      "Included items (creative entries like autopsy table, pinball machine) were not mapped to the contract",
      "Excluded items (fountain outside entryway) were captured but checkbox not checked",
      "Allocation of costs section is completely blank — needs prompting for natural hazard, escrow fees, etc.",
      "Escrow fee error: Spencer said 'each to pay their own' but it showed 'buyer'",
      "AI confused paragraph references (3G1) with measurements (three grams one)",
      "Spencer works at Side and offered to connect Ethica with their tech team for potential collaboration",
      "Mentioned Surehand as a competitor doing AI audio, but more for marketing than contracts"
    ],
    transcript: `[Spencer]: Hello, John.

[John]: Hey, Spencer. How you doing, sir?

[Spencer]: I'm okay. How are you?

[John]: Oh, doing great. Just really appreciate you took the time to try out the Voice Pilot. How did everything work?

[Spencer]: There were some hitches. I took some notes if you'd like to hear them.

[John]: Oh, one hundred percent.

[Spencer]: Okay. So let me pull it up. And by the way, really cool, really cool engine here, I have to say. This is gonna be really cool as the kinks get worked out. All right. So there were a couple of things. Didn't pull public records. It didn't have, it didn't show — there were no checkboxes showing that I represented the buyer only. And I'm assuming you're just using a general name for California Realtors, so my name wouldn't show up there anyway. So that's fine.

It took the purchase price. The close of escrow date was supposed to be ninety-four days, did not put it in there. And when I mentioned it, the engine reported back saying, "Oh, we won't know how many days ninety-four days is until it enters escrow." I was like, "Mm, okay. Not what I wanted." So I said, "Write in ninety-four days."

[John]: Okay.

[Spencer]: But that one — I had a little bit of trouble with that. Initial deposit was fine. By the way, one thing on the app, on the text, it says initial deposit, then in parentheses EMD. I — if Carl legal looked this over, and if they did, I'm surprised they didn't say anything. You should not have EMD there. Though it's a term of art, there's no EMD in the California contract, and it's a different concept. So escrow uses it. Escrow says EMD, but they're not writing the contract. It's just something you might wanna consider removing. I'm a compliance guy. That's what I do. We always tell people do not use EMD. It's just the deposit or the initial deposit.

[John]: Okay.

[Spencer]: Going through here. It didn't show the loan amount. I gave it a percentage. Didn't show the loan amount. It did not fill in the rate. And for points, it just said "buyer to pay all points." I'm like, nope, one point. Like, it didn't ask how many points. If you don't have points in there, it's not a valid loan contingency.

[John]: Yeah.

[Spencer]: So you just need to make sure that it does ask for points. We had it as conventional financing, which was great. I did an additional deposit — an increased deposit — which didn't show up. And it didn't—

[John]: I'm looking at your transcript as you're talking through this.

[Spencer]: Okay. Hope I didn't curse too much. No. I mean, you did an awesome job, and I really appreciate this feedback. Keep going.

[Spencer]: Seller credits, paragraph three G. Those didn't show up at all. I threw it off, by the way. I said it should've shown up in three G one when I was reviewing it with Ethica herself. But I realized it should've said three G two, so I do thank her for being polite and not correcting me. On the other hand, probably should've corrected me, but that's okay. So it didn't show the seller credit that should've been in three G two, and it didn't show the payment to compensate the buyer's broker.

[John]: Okay. And then real quick — when it prompted you in the beginning, did you automatically open the link, or did you just do the walkthrough?

[Spencer]: I think I opened the link. I opened the link when I was talking to her because I want her to watch it. She had trouble getting the address, which is fine. I think that we were talking over each other.

[John]: Yeah. I think she corrected that too from what I'm looking at.

[Spencer]: I corrected it. I corrected it. Yeah. So then I also said that I was not including the verification whatever, and so the checkboxes didn't go in there for the verifications on paragraph three H. Didn't do anything with the assignment, didn't do anything with appraisal. Paragraph three L two — I did lower the appraisal contingency. I just wanted to see if it would check it in by like ten thousand or something. And it didn't get entered.

Possession, seller-occupied units. Because it was tenant-occupied, you might wanna ask them do they want the TOPA attached — paragraph three N three.

Seller-delivered documents. All that was fine. The items included that I wanted included — and again, I threw in some stuff just to see if it would pick it up — I wanted an autopsy table, which I think would be really cool, a pinball machine, and a Skee-Ball machine. None of those showed up.

And it did get the excluded item of the fountain outside the entryway, which is great, but it didn't check the box.

The biggest thing for the allocation of costs — right now they're all blank. And I understand that people just wanna go through this quickly, but it would be natural hazard disclosure, buyer, seller, or both? I think that would be important stuff to have in there.

The escrow fee got messed up. I asked about the escrow fee, and she said both, and I said, "No, it should be each to pay their own," and it's showing the buyer.

And by the way, I was really happy that she got the name of the buyer. I gave ridiculous names, and she picked them up. That was really great.

[John]: Yeah, we've been working on that.

[Spencer]: I didn't even know how to spell Bun Trappington or whatever the name was. So I was very happy. The home warranty also didn't pick up who was paying and how much. I like the other terms. I don't know why it's repeated twice.

Oh, the other thing too — it should have shown up in paragraph three-G-one, and she goes, "That's right. It should have shown up in paragraph three-grams-one." So you might wanna deal with the—

[John]: Yeah.

[Spencer]: I have a love-hate relationship with AI because I used to do voiceover until very recently. AI basically took my job. When it says stuff like grams or — like it talks about St. John's Avenue, and it called it Street John's Avenue. I'm like, "Yeah, there you go. Street John's Avenue." Ethica did not do that. I'm just talking about AI in general.

Those are really my notes. So now you just saved me time. I don't have to write this up.

[John]: No, we truly appreciate that. I'm sure AJ might reach out to you for clarification on things.

[Spencer]: Sure. I just wanna say it's an impressive engine. It's pretty cool, and this is a really difficult thing to map. I don't know if you're familiar with my company at all, Side. I think there's also an AI voice thing that we're working on as well. I have no idea if there's any crossover, any reason why you guys might wanna be in touch with our tech team. But if you do, just let me know, and I'm more than happy to make an introduction. I think Surehand's doing a very similar thing too, just in terms of the audio. But I think for them it's more about marketing and stuff, not about the contracts.

[John]: Yeah. See, we wanna get the contracts. Because that's one of the things we wanna make easier.

[Spencer]: Yeah. The kind — it's just really cool. And I wonder, like, the next time if I knew what I wanted to do, if I just dictated the terms that I wanted, how that would come out, and I'm more than happy to do that again.

[John]: Well, you could try it as many times as you want. You can actually go back in and bring up that same offer. You get a counteroffer. You could do anything. We don't want you to do it once. Feel free to go crazy with it.

[Spencer]: Okay. All right. Well, I appreciate your time and thanks for the calls. All right.

[John]: Thanks, Spencer.

[Spencer]: You got it. Bye-bye.

[John]: Bye-bye.`
  },
  {
    id: "call-mike",
    title: "Call with Mike Vachani",
    audioFile: "./Call-with-Mike-Vachani.m4a",
    duration: "14:13",
    durationSec: 853,
    participants: ["John (Ethica)", "Mike Vachani (Agent)"],
    sentiment: "positive",
    sentimentLabel: "Positive with Suggestions",
    summary: "Mike tested the system while driving using one of his own listings. He found the AI connection clear and responsive despite his fast speech. His main criticism was awkward silences/gaps where he didn't know what to do next — more prompting is needed. He also couldn't find the generated document afterward and didn't realize the PDF link had been texted. Mike suggested a 'hybrid' mode: let the agent dump all known information first, then have the AI prompt for missing fields. He compared this to the larger industry trend (Zillow, Redfin, Compass) and emphasized that CAR needs this technology or risks falling behind. He noted that contracts are so standardized now that the time savings for experienced agents may be modest, but the guided experience is valuable for less experienced agents.",
    highlights: [
      { type: "positive", text: "AI connection was clear and understood his fast speech well" },
      { type: "positive", text: "'I'm excited about this... if we don't have this, we're going to fall behind' on industry competition" },
      { type: "issue", text: "Awkward gaps of silence between prompts — didn't know when to speak or what was happening" },
      { type: "issue", text: "Couldn't find the generated document — didn't realize the PDF was sent via text link" },
      { type: "issue", text: "Loan details and other discussed items didn't make it into the generated document" },
      { type: "suggestion", text: "Hybrid approach: 'Tell me everything you know about the deal, and then I'll prompt you for what's missing'" },
      { type: "suggestion", text: "Offer two modes: experienced agents can dump info freely, newer agents get guided Q&A" },
      { type: "insight", text: "MLS integration would be powerful — 'if it knew my listing, it would have pre-filled all the data automatically'" },
      { type: "insight", text: "Experienced agents can fill out a contract in 7-8 minutes on computer — voice needs to match or beat that" }
    ],
    keyPoints: [
      "Silence gaps between prompts were confusing — more prompting/feedback needed during processing",
      "Post-call document delivery wasn't clear — Mike didn't find the PDF text link",
      "Hybrid mode suggestion: let agent dump everything, then AI fills gaps with targeted prompts",
      "MLS integration would enable pre-filling property data automatically",
      "Two audience modes: experienced agents want speed, newer agents need hand-holding",
      "Competitive pressure: Zillow, Redfin, Compass, and other platforms are moving to AI — CAR must keep pace",
      "Contracts are standardized enough that basic offers have limited fields to fill",
      "APN, county, zip code were missing — need automated data pulls from MLS/tax records",
      "AI guardrails idea: prompt if user skips agency checkboxes, ask about dual agency"
    ],
    transcript: `[John]: Awesome. I'm glad that — and thank you so much for your time, Mike. I really appreciate it.

[Mike]: Oh, no, no, no problem.

[John]: What was your first take as far as your experience with it? Just curious, like you were sent a link and interacting with it — what was your first impression?

[Mike]: Well, I think from the — what I did is I just used one of my own listings just to kind of talk it through as I was driving. And so I tried to do it while I was driving. I would say that the connection with the AI was good. It was actually very clear, and they understood me, which is hard because I speak fast. Which is good. And it was very clean. There were a lot of gaps of like silence during the thing where I didn't know what to do next. So it would tell me to say things and then it would just go blank — would not — I think it needs a little more prompting when that happens.

[John]: Sure. Yep. We're definitely working on that, so that's awesome.

[Mike]: Yeah, because it was — when I was saying it, it said, "Okay, give me some information." And I was just waiting for something and then I'm like, "Should I just start talking? What should I do?" And then I did start talking and then I realized it's listening and it's doing everything. So the gaps were the biggest issue that I had, the silence, not knowing what's coming next.

The follow-up afterwards, like once it's done, what happens next? Like I still haven't seen the document that it made for me. Like I went — I thought it would be in my zip forms or something, but I don't know where it goes.

[John]: Oh, okay. So to explain that, we do use, just for the beta test, we're using our account that CAR has provided to us. So the way it'll be designed, obviously it'll be signing into your ZipForm account and creating the offer there so you can access it as well. But you never received a text link with the RPA?

[Mike]: You know, I did receive a text link, but I don't think I actually utilized the link, and I wasn't sure — I wasn't sure exactly the approach. But that's because I didn't look enough into it. I just got so busy.

[John]: Sure.

[Mike]: I'm gonna try to see where the link is now. 'Cause it sent me a PDF, right?

[John]: Yes. You'll notice it'll actually open up and it'll be the RPA that you created. We do know — don't painstakingly go through each field right now 'cause there's some fields that aren't mapping correctly. But it is supposed to give you kind of a feel of what would be delivered. But we're working on the mapping.

[Mike]: Yeah. And I think that's what I was — where would it have come from? I know it was sent to me.

[John]: It'd be an 855 number. So 855-918—

[Mike]: Oh, I know I got it because I remember seeing those numbers come through, but I was driving. Oh, here it is, 855. Here we go. Here's your buyer's link. Here's your buyer's link, and then here's the PDF link. It says two different links.

[John]: So you'd want the PDF link.

[Mike]: Okay. Let me do that right now, see what opens up here. While we're on the phone, I might as well. Because I know I'm gonna be flying to Sacramento. I'm trying to get everything done.

[John]: Yeah, it should say your RPA PDF for and then whatever the address that you used.

[Mike]: Yeah, I'm just trying to get it open. Just trying to figure out where it's going when it's downloading. It could be my phone too. I think I tried opening it last night, I couldn't get it to open — it could be my phone, and then I was gonna go to my computer and do it, but I don't have it on my computer. It's a link, you know?

[John]: Yeah. So eventually it will be hooked up to your account, so you'll be able to view it there as well.

[Mike]: Right. No, I get that. But — okay, now I think it's open now. Okay, there you go. I'm looking at it right now. So I did — and I made up names. I think the agents — oh, I think it made up agents here. I don't know where the agent came from. It says California Association of Realtors or AJ Shaw.

[John]: That's the default of the account that we're using. So it'll say CAR Association as the brokerage, and it'll say AJ Shaw as the agent.

[Mike]: Perfect. And then, yeah, so there's the — Arcadia. So it didn't fill in the county and the zip code. So how is it going to figure out APNs when you give the address?

[John]: So we're working with a couple of different options to do that. We're gonna either use MLS Connect, or we're gonna actually pull in from a title company or from tax records. We're not sure how we're gonna do that, but we'd like to have that all automated for you. The theory is you taking advantage of just a commute time. You can literally verbally fill out this, and all of that type of information will be pulled for you and populated.

[Mike]: Yeah, and I think that's good. I think the prompts are gonna be really important. And there were good prompts when I said, "What haven't I done yet?" It got some of the stuff. It missed some of the stuff. It hit some of the stuff. There's gonna be gaps in the beginning, of course. It didn't put in the loan stuff really. It didn't put in a lot of the stuff that we talked about on there.

[John]: Yeah, exactly. So we're working on the mapping of that. So this week will probably be all of that will be nailed down. The overall impression of it though, does it seem like a tool that can save you time and serve a purpose for you?

[Mike]: I do think it is a good tool that will save time and serve a purpose, especially on the go. I think you need a lot more prompting to help guide the process. Don't let them just talk straightforward. Like you can say, "Give me all the information you want, and then I'm gonna prompt you." But say, "Hey, tell me everything you know about the deal, and then I'll prompt you for what's missing."

[John]: Oh, okay. Yeah, I love that.

[Mike]: So without us asking. If we have to ask for it, then they're gonna get frustrated and move on.

[John]: For sure. That's interesting — I was talking to another agent just a minute ago, and she was like, "Why can't it go faster? I could probably do this in maybe seven minutes if I — that's including my login time for zipForm."

[Mike]: And you can. And that would be good too. Say everything you can about the property, and then come back and say, "Okay, we got information, now I'm gonna prompt you for the rest of the stuff."

[John]: Yep. That's a great idea. So it's interesting, we're trying to figure out do we take 90 questions and give this a whole half hour, or do we make it five minutes?

[Mike]: No. Don't do that. It's gonna differ for — I hate to say it, probably more than half the realtors out there need the prompting. They won't know what to do. They don't know the forms properly. They don't know all the stuff there. And then 20% will know the forms very well. So it can just fill in things for you. The contracts are very dumbed down now. It's really straightforward and easy, which is good for the ease, but bad because people don't understand the contracts.

So when you're doing the AI part of it, and you're talking to it, if they don't understand the contracts, then this defeats the whole purpose. So you have to be able to say, "Okay, tell me all about the property," and then do some basic prompts if you're not getting it. And the AI is gonna have to understand what's missing and then fill in the gaps and ask questions. But you want it to be fast, otherwise, for me, I can — if I'm in front of a computer, I get the whole contract filled out in like seven minutes, eight minutes, because I know it pretty well.

But if I'm driving, and you do this, and I'm back home, I come back and it's all filled out, that's great. But the contracts themselves honestly are not — there's not much information to fill out because they're so standardized that it's not gonna give a huge savings of time. But because today's world is all about talking directly to the AI and getting your answers, this is definitely the right start, because I think if we don't have this, we're going to miss the point of what everybody else is doing. Zillow, Redfin, Compass, and what they're doing now — if we don't do this, as a state real estate board, we're going to fall behind.

[John]: I agree. AI is, if it's a train, it's left the station already, and it's getting faster and faster every day.

[Mike]: Oh, significantly from the last — the newest version of ChatGPT just came out was a significant increase from three months ago. And now it understands you, and it can even be a little, not emotional, but a little more inclusive and judgmental on how to fix things.

[John]: I've noticed that as well. That's awesome. Well, Mike, thank you so much for your time. If your next offer, if you wanna time it, that'd be awesome. That'd be really helpful. Only if it's convenient though.

[Mike]: Okay. Cool. Sounds good.

[John]: Thank you, Mike. Bye bye.

[Mike]: All right. Bye.`
  },
  {
    id: "call-erin-2",
    title: "Call with Erin Stumpf (Part 2)",
    audioFile: "./Call-with-Erin-Stumpf-Part-2.m4a",
    duration: "2:53",
    durationSec: 173,
    participants: ["John (Ethica)", "Erin Stumpf (Agent)"],
    sentiment: "neutral",
    sentimentLabel: "Neutral / Practical",
    summary: "Brief follow-up segment where Erin described her specific use case: a super busy Saturday juggling four clients with an offer deadline, needing to bust out a contract while driving. She acknowledged it's a 'cool tool' with definite use, but questioned whether it's useful enough for her day-to-day since that level of urgency is infrequent. John asked if she could time herself next time she writes an offer for benchmarking purposes. Erin was pragmatic — she uses zipForm Mobile for quick tasks already.",
    highlights: [
      { type: "positive", text: "'It is a cool tool... it's definitely got a use'" },
      { type: "insight", text: "Primary use case for Erin: 'Super busy Saturday, four different clients, offer deadline, driving between showings'" },
      { type: "insight", text: "That urgency level is 'pretty infrequent' — wouldn't use it regularly" },
      { type: "insight", text: "Already uses zipForm Mobile for quick on-the-fly tasks" },
      { type: "quote", text: "'I'm questioning whether it's useful for me.' — Erin, on personal adoption" }
    ],
    keyPoints: [
      "Niche use case identified: on-the-go contract writing while driving between client meetings",
      "Not a daily-use tool for experienced agents like Erin — urgency scenarios are infrequent",
      "Already uses zipForm Mobile for quick tasks — Ethica needs to compete with that convenience",
      "Agreed to time herself on next offer for benchmarking purposes",
      "Tool has clear potential but needs to prove time savings for power users"
    ],
    transcript: `[John]: No worries at all.

[Erin]: Anyway.

[John]: So we jump between humans as well, I guess.

[Erin]: Yeah. Well, yeah, I accidentally just answered the other call instead of declining it. So my bad. Anyway — so that — I could see that being a useful application for someone like me, where I just — I'm not gonna be in front of the computer or not really gonna have time to be — 'Cause I use zipForm Mobile sometimes when I need to do something really quick on the fly, and it's actually really easy to use.

[John]: Okay.

[Erin]: So, like, driving and I'm just not gonna be able to actually dedicate a few minutes on my phone to type it up. If I had to — just really in a pinch, I could see that being useful for me in that application, where I'm just like busting from one client to the next on a busy day and I've got — you know, there's an offer deadline that I have to meet, and I've just gotta get this out. You know, I could see that being useful.

[John]: Okay.

[Erin]: But that's — I would say that level of urgency is probably pretty infrequent. So — anyway, but it is a cool tool, right? I think it's got a use. I just — I'm questioning whether it's useful for me.

[John]: Yeah, for sure. And that's what we need to know. What I would love from you, if you don't mind, the next time you have to write an offer or if you wanna just experiment, I would love to know the amount of time it actually takes you to sign into the zipForms from the time you sign in and create an offer. If you don't mind, just like a stopwatch. I'm just curious of what is the fastest, because we don't have that experience or that expertise, and you do, and it would be great to see — all right, this is a person can do this in four minutes, so we have to make that even faster, right?

[Erin]: Yeah. Yeah, I'll do that.

[John]: You can just send me a quick text. It won't even take that much time. And don't want to call and discuss it. It's probably not necessary. So I wanna be respectful of your business and time.

[Erin]: Yeah. Yeah. Totally. I will do that the next time I write up an offer.

[John]: That'd be fantastic. I appreciate it. And I really thank you so much for your time and your feedback 'cause this is very helpful. I think this has a lot of potential, and we're obviously in a very beta stage here, so we're capturing all this type of feedback, and hopefully the outcome will be something that's helpful for you and other agents.

[Erin]: Great. Got it. Awesome. Thank you so much.

[John]: Thank you, Erin. Safe travels to your destination, and have a great day.

[Erin]: You too. All right. Thank you.

[John]: Thank you, Erin. Bye-bye.`
  },
  {
    id: "call-erin-1",
    title: "Call with Erin Stumpf (Part 1)",
    audioFile: "./Call-with-Erin-Stumpf-Part-1.m4a",
    duration: "8:52",
    durationSec: 532,
    participants: ["John (Ethica)", "Erin Stumpf (Agent)"],
    sentiment: "mixed",
    sentimentLabel: "Mixed / Critical",
    summary: "Erin provided the most critical feedback. The call dropped during contract generation, and when she called back, the generated contract was 'all kinds of wrong' — only the buyer's name and purchase price were correct. Many fields were missing or incorrect. Her key concern was speed: it took at least double the time it would take to just type it up in zipForm. She acknowledged the tool could be helpful for new agents but said she 'would never use this' in its current form unless it's made significantly faster. She suggested the system needs better differentiation between experienced agents who want speed and new agents who need hand-holding.",
    highlights: [
      { type: "issue", text: "Call dropped during contract generation — when reconnected, output was mostly incorrect" },
      { type: "issue", text: "'It wasn't even close to what I prompted it with' — only buyer name and price were correct" },
      { type: "issue", text: "'This took me at least double the time it would take me to log in and just type up the purchase contract myself'" },
      { type: "suggestion", text: "MLS Connect integration: 'If it asked me for the listing number, that would pull it all in from MLS and that would be really great'" },
      { type: "insight", text: "For new agents, the guided approach is 'probably actually really helpful'" },
      { type: "insight", text: "For experienced agents: 'I just wanna get in there and know exactly where I have to go'" },
      { type: "quote", text: "'I personally would never use this if the time weren't shortened somehow.' — Erin" },
      { type: "insight", text: "Only specific use case: 'Super busy Saturday, four clients, offer deadline, driving between showings'" }
    ],
    keyPoints: [
      "Generated contract was mostly wrong after call dropped and reconnected — severe accuracy issue",
      "Takes at least double the time of manual entry — speed must improve drastically for adoption",
      "MLS Connect integration critical — listing number should pull all agent/property data",
      "APN, listing agent name, license number — nobody knows these off the top of their head",
      "Beta account confusion: didn't understand why CAR and AJ Shaw appeared as agent info",
      "Two user segments: new agents need guided Q&A, experienced agents need speed and minimal prompts",
      "Toggle between detailed guided mode and fast expert mode is essential",
      "Pre-population from past history could reduce 90 questions to a much shorter process",
      "Even with issues, Erin sees clear potential once accuracy and speed are resolved"
    ],
    transcript: `[John]: Yeah, I was just wondering — your first instinct when you were sent the link, how did you react to the link being sent to you?

[Erin]: I mean, you know, it was fine. What was interesting — I saw, you know, I was at the member director forum at CAR where they showed like a 60-second video about the product. And so I had a very basic expectation of what it was gonna be. So I'll just start from the beginning if it's okay.

As I recall, you call the number, it then sends you a link while you're on the phone. And I clicked it, but most of my — I was taking the verbal prompts, and I was actually writing down what I was telling it while I was feeding it information, just because I didn't wanna forget. And I wanted to compare to what it actually produced.

And so I went through all the prompts. I did click the link and kinda looked at what was in that — that I had given it, and when I looked at it, it looked correct, 'cause it — I felt like that was a repository for what I was prompting it with.

And then I got to the end of the prompts, and then it said, "Okay, we're gonna generate your purchase agreement." And it took at least a couple minutes, and then the call dropped.

[John]: Oh.

[Erin]: So I called it back, and there's an option like, "Are you starting a new agreement or is this an existing agreement?" And so yes, it's an existing agreement. And I forget exactly what it told me. It might have said, "Is this for the buyer Gregory Joseph Wilson?" Or it might have said, "Is this for 4221 Elbow Way?" I can't remember. That's my husband's name and my home address that I was using.

[John]: I see.

[Erin]: I can't remember exactly how it prompted me, but I picked, "Yes, that's it." And then I re-instructed it to generate the agreement, and it took a few more minutes. And then it sent me the link with the agreement, and it was like all kinds of wrong. It wasn't even close to what I prompted it with.

[John]: Oh, interesting.

[Erin]: The only things that it seemed to have correct were my husband's — the buyer's name and the purchase price, but like nothing else was correct. It even had, and I don't know if this is like a default setting, but it had the buyer's agent as the California Association of Realtors, and then some name that was not mine — like AJ something.

[John]: Yeah, that would be confusing, definitely. That I can explain. So how we have it set up for this beta test — we're actually using the one account that CAR has given us. And so that's AJ Shaw, who you may know built ListReports, the company, and then sold that in '22 and now building this.

[Erin]: Okay. I know Jay. Okay.

[John]: So it's his account that we're using, and it won't obviously be set up like that in the future. It'll actually be going to your Zip account and signing into your account and creating the offer there.

[Erin]: Got it. I mean, well, that makes sense. I kinda figured there was some default setting like that. But it did prompt me for my name and all that stuff. Like — while it was prompting me.

[John]: Yeah.

[Erin]: The one thing that I think — well, there are a few things I think would be helpful, at least as a practical tool if I'm actually gonna use something like this. I mean, I'm sure that if it's using my ZipForm account, it's gonna pull in all my information and it's gonna do it correctly. But there's a feature in ZipForm called MLS Connect, and it was prompting me for the listing agent's name, the listing agent's license number. Like, I'm not gonna know any of that off the top of my head. But if it asked me for the listing number, that would pull it all in from MLS maybe, and that would be really great.

[John]: And that is the plan. We're definitely using MLS Connect or some version of that to pull that information in. We would like to go so far as to pull in the APN number for you as well. So when you give the address, it would pull that either from the tax records or from a title company and give you the APN and populate that for you as well.

[Erin]: Yeah.

[John]: So yeah. And it does sound like because the call dropped — we're experimenting with different voice carriers. So if there's a long enough pause, it does drop a call, and we're working on fixing that.

[Erin]: Yeah. The other feedback that I would give you — I get that there are agents of differing experience and skill level, but this took me at least double the time it would take me to log in and just type up the purchase contract myself. Like I would — I personally would never use this if the time weren't shortened somehow. Because it just — like it takes me all of like — I'd have to sit and time myself, but the call length initially was probably 11 or 12 minutes maybe. I'd have to go back and look. But probably including the time to boot up my computer from sleep mode, log into zipForm, and type up a new contract — it would take me much shorter, much less time. Like this would not be convenient for me to use.

[John]: Got it. That's — well, we're definitely gonna have different options. It's interesting though — that's what we were trying to do, is bring it down to the least amount of questions on a guide, but we're finding that there's people that are like, "Well, you missed all these other questions." I was like, "Okay, if we do that though, it's gonna be close to 100 questions." So where is the fine line, right? Where we make it fast and efficient, but at the same time we're capturing everything as well.

So I think what's gonna happen is we're gonna have the toggle on, toggle off type of — it'll know who you are and be smarter and say, you know the contract, and it knows what you've done before, and pre-populate those things, and you can probably get it done in four minutes. And then you'll have the newer agent that wants the guide, and it'll be 90 questions long, and it'll take them a half hour. So we're gonna have to kind of do both, and everything in between.

[Erin]: Yeah. I mean, I think, yeah, for a new agent that's probably actually really helpful. For someone like me, I just wanna get in there and know exactly where I have to go, what I have to change, and I just get it done. The only application of this for me in its current form, assuming that it's made to be accurate — the only application for me that I could think of is it's a super busy Saturday, and I'm out with like four different clients, and I leave one and they wanna write an offer and I'm heading to the next one, and I'm driving, and this'll bust out a purchase contract for me while I'm on the road.`
  }
];
