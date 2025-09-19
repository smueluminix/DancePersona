
  // Button to view all 8 personas
// ---- PERSONAS ----
const personas = [
  { name: "The Visionary", score: 0, image: "images/visionary.jpg" },
  { name: "The Socialite", score: 0, image: "images/socialite.jpg" },
  { name: "The Vibester", score: 0, image: "images/vibester.jpg" },
  { name: "The Sparkplug", score: 0, image: "images/sparkplug.jpg" },
  { name: "The Class Clown", score: 0, image: "images/classclown.jpg" },
  { name: "The Hustler", score: 0, image: "images/hustler.jpg" },
  { name: "The Showstopper", score: 0, image: "images/showstopper.jpg" },
  { name: "The Free Spirit", score: 0, image: "images/freespirit.jpg" }
];

// ---- TRAITS TO PERSONA WEIGHTS ----
const traitToPersonaWeights = {
  // Order: Visionary, Socialite, Vibester, Sparkplug, Class Clown, Hustler, Showstopper, Free Spirit
  Creative:    [0.58, 0,    0,    0,    0,    0,    0.27, 0.15],
  Social:      [0,    0.58, 0.27, 0.15,  0,    0,    0,    0],
  Chill:       [0,    0.15,  0.58, 0,    0.27, 0,    0,    0],
  Energetic:   [0,    0.27, 0,    0.58, 0,    0.15,  0,    0],
  Funny:       [0,    0,    0.15,  0,    0.58, 0,    0,    0.27],
  Meticulous:  [0.27, 0,    0,    0,    0,    0.58, 0.15,  0],
  Spotlight:   [0.15,  0,    0,    0,    0,    0.27, 0.58, 0],
  Wildcard:    [0,    0,    0,    0.27, 0.15,  0,    0,    0.58]
};

// ---- QUIZ SLOTS: QUESTIONS, DESCRIPTIONS, ETC. ----
const quizSlots = [
  // 1: Start Screen
  {
    type: "start",
    text: "Journey through Blob Land and discover your Dance Persona!",
    button: "Let's go!",
    image: "images/1.png"
  },
  // 2: Q1
  {
    type: "question",
    text: `It’s another Saturday evening and you’re on your way to dance practice for an upcoming gig. \n\n “Nothing interesting ever happens around here…” you sigh to yourself.
But as you turn the corner, you freeze. Right in front of you hover a pair of floating headphones, shimmering in brilliant gold.
\n\n <b>What do you do?</b>`,
    answers: [
      { text: "You start reciting every physics concept you know, trying to make sense of it.", trait: "Meticulous" },
      { text: "Wow, what's this?! You whip out your phone and start snapping pictures excitedly!", trait: "Energetic" },
      { text: "“Huh, that's pretty cool, I guess,” you think, as you stroll past them.", trait: "Chill" },
      { text: "No one’s in sight, right...? Well, finders’ keepers!", trait: "Wildcard" }
    ],
    image: "images/2.png"
  },
  // 3: Blob Land arrival
  {
    type: "description",
    text: `Before you know it, the golden headphones pull you in! You’re swept through a swirl of soundwaves and colours, tumbling across strange planes of existence.`,
    button: "Next",
    image: "images/3.png"
  },
  // 4: Q2
  {
    type: "question",
    text: `With a soft plop, you land in a whole new dimension – Blob Land! Here, music and dance clearly rule supreme. \n\n In the distance, you spot adorable mini Blobs bouncing on a dance floor, grooving happily to the rhythm.
\n\n <b>What’s your first move?</b>`,
    answers: [
      { text: "You think outside the box, conjuring up ideas and possibilities for what you could do here.", trait: "Creative" },
      { text: "You hang out at the edge of the dance floor, chatting and bouncing along with the Blobs to get to know them.", trait: "Social" },
      { text: "You bounce around like a Blob yourself, going \"BOINGGG!\" with every step to show you're harmless.", trait: "Funny" },
      { text: "You head straight to the centre of the dance floor, showing off your moves as your favourite song plays.", trait: "Spotlight" }
    ],
    image: "images/4.png"
  },
  // 5: Ground shakes
  {
    type: "description",
    text: `Suddenly, the ground shakes with heavy tremors. The Blobs around you freeze in terror. \n\n Then – darkness. The music cuts, the lights vanish, and panic ripples through the crowd.`,
    button: "Next",
    image: "images/5.png"
  },
  // 6: Q3
  {
    type: "question",
    text: `Just as chaos starts to break out, a booming “Silence!” echoes through the air. An elder steps forward – Grandpa Blob, holding a glowing torch that casts light across the frightened faces. \n\n His eyes land on you.
“It is no coincidence,” he rumbles, “that our world falls into darkness the very moment a stranger appears.” He steps closer as the other Blobs gather around.
\n\n <b>“Tell me, outsider… who are you?”</b>`,
    answers: [
      { text: "You eagerly introduce yourself to Grandpa Blob, your excitement shining through.", trait: "Energetic" },
      { text: "You decide to go by Blobby now. Might as well have some fun while you’re here!", trait: "Funny" },
      { text: "You step forward confidently, charismatically introducing yourself to the crowd as a human.", trait: "Spotlight" },
      { text: "You share tales of Earth, hoping to discuss deeper ideas about how your worlds differ.", trait: "Creative" }
    ],
    image: "images/6.png"
  },
  // 7: Grandpa Blob reacts
  {
    type: "question",
    text: `Grandpa Blob studies you closely, then exhales a long sigh of relief. “So you are no enemy of ours,” he states. He explains that your sudden arrival likely caused a rift in the space-time continuum, plunging Blob Land into darkness.
\n\n “I believe I know how to fix this,” he continues, “but I’ll need your help. In return, I promise to guide you safely back to Earth.”
\n\n <b>How do you respond?</b>`,
    answers: [
      { text: "“Sure, I guess.”", trait: "Chill" },
      { text: "“Hmm… I’ll need a few more details first. How exactly will we solve this?”", trait: "Meticulous" },
      { text: "“I’ll listen for now... But no promises on what I'll do after.”", trait: "Wildcard" },
      { text: "“As long as I'm not alone on the journey, I'm in!”", trait: "Social" }
    ],
    image: "images/7.png"
  },
  // 9: Grandpa Blob legend
  {
    type: "description",
    text: `Grandpa Blob listens to your response, his eyes twinkling with understanding. “I see… There is something you must know first.”
\n\n He begins to speak of an old legend: <b>An enormous red button</b> – towering as tall as a human – that serves as Blob Land’s hidden backup power source. Pressing it can restore light and music to the land.`,
    button: "Next",
    image: "images/8.png"
  },
  // 10: Q5
  {
    type: "question",
    text: `To help you on your quest, he introduces junior navigator Billy Blob, a bright-eyed youth Blob who bounces up to you eagerly. \n\n Torch in hand, the two of you set off into the darkness.
After what feels like forever, you reach a fork in the road. Billy frowns – he can’t remember which way to go!
\n\n <b>What do you do?</b>`,
    answers: [
      { text: "Head left into the urban stretch – it seems like the optimal route to the button.", trait: "Meticulous" },
      { text: "Head right into the forest – you don't know what lies within, but hey, why not?", trait: "Wildcard" },
      { text: "Either path works. No rush – you'll get there eventually.", trait: "Chill" },
      { text: "You ask Billy for his thoughts on which path to take, valuing his opinion.", trait: "Social" }
    ],
    image: "images/9.png"
  },
  // 11: Mist and stage
  {
    type: "question",
    text: `You continue onward, the mist curling around your feet and thickening as you go. Billy Blob sticks close, bouncing nervously beside you.
\n\n Suddenly, the fog grows dense, and without warning, Billy slips into a deep ditch filling with water! He splashes and calls out, panic in his voice.
\n\n <b>What will you do?</b>`,
    answers: [
      { text: "You immediately dive in headfirst, hoist Billy to safety, and scramble out, dripping wet.", trait: "Energetic" },
      { text: "You improvise, grabbing a nearby vine, fashioning a makeshift lasso, and swinging it to reel Billy in safely.", trait: "Creative" },
      { text: "You slide down, do a forward tuck, grab Billy mid-roll, and spring back up in one smooth move – landing like a hero.", trait: "Spotlight" },
      { text: "\"Didn’t know you wanted to swim that badly, Billy!\" you joke, scooping him up with a splash and a laugh.", trait: "Funny" }
    ],
    image: "images/10.png"
  },
  // 13: Grand stage
  {
    type: "description",
    text: `Billy climbs out of the ditch, a little shaken but safe. Together, you trudge through the swirling mist that continues to thicken. \n\n In the distance, a soft light glimmers, guiding your way… until you find yourself on a grand stage, facing a large, expectant audience.`,
    button: "Next",
    image: "images/11.png"
  },
  // 14: Q7
  {
    type: "question",
    text: `At the side of the stage, you notice a vision of your younger self appearing. They smile at you nervously and whisper, \n\n <b>“This is my first ever performance… do you have any advice for me?”</b>`,
    answers: [
      { text: "“This is your stage, your moment. Relish it, and shine like the star you are!”", trait: "Spotlight" },
      { text: "“Remember the people you’re sharing the stage with – your friends are the heart of any performance!”", trait: "Social" },
      { text: "“You have so much creativity in you. Give yourself chances to express your ideas!”", trait: "Creative" },
      { text: "“Don't take things too seriously. Have fun on stage, even if you're not the cleanest!”", trait: "Wildcard" }
    ],
    image: "images/12.png"
  },
  // 15: Billy and the button
  {
    type: "question",
    text: `Your younger self smiles at you before stepping confidently onto the stage. Suddenly, you hear Billy calling out from behind.
\n\n Turning around, you see him standing beside a gigantic red button – nearly as tall as you – just as Grandpa Blob had described!
\n\n <b>What do you do first?</b>`,
    answers: [
      { text: "This is it! You immediately press the button.", trait: "Energetic" },
      { text: "You scan the area thoroughly, checking for any other buttons before making a move.", trait: "Meticulous" },
      { text: "You tell Billy it's a Free Pizza button, and laugh as he rushes to press it.", trait: "Funny" },
      { text: "You shrug and press the button, figuring it'll all work out.", trait: "Chill" }
    ],
    image: "images/13.png"
  },
  // 17: White light and return
  {
    type: "description",
    text: `The button is pressed, and a dazzling white light engulfs you and Billy. You both hold tight as the world swirls into a blank, white canvas.
\n\n Seconds later, you realize you’re falling – and land safely right in front of Grandpa Blob and the rest of the villagers.`,
    button: "Next",
    image: "images/14.png"
  },
  // 18: Q9
  {
    type: "question",
    text: `Before anyone can react, lights flicker back on, music blasts through the village, and cheers erupt. You did it!
Grandpa Blob beams with joy. \n\n “You’ve saved Blob Land,” he proclaims, “and before you return home, I want you to take one thing with you.”
\n\n <b>What do you choose?</b>`,
    answers: [
      { text: "A map of Blob Land, charting out its vast land. Something to bring inspiration for your future adventures!", trait: "Creative" },
      { text: "The torch from your journey, now a worn-out stick but filled with memories. A reminder of your good times with Billy!", trait: "Social" },
      { text: "A shiny Blob Land disco ball, endlessly playing some fire beats. To spark some fun in future dance practices!", trait: "Energetic" },
      { text: "Anything they’re willing to give. You're not picky.", trait: "Chill" },

    ],
    image: "images/15.png"
  },
  // 19: Return home
  {
    type: "question",
    text: `When you’re finally ready to leave, you say your final goodbyes to your newfound friends. Grandpa Blob starts singing Welcome to the Black Parade, and you find yourself caught in a hypnotic trance.
\n\n In the blink of an eye, you’re back on Earth! The golden floating headphones have vanished, leaving you to gather your thoughts and process everything that just happened.
\n\n <b>What’s your first reaction to being home?</b>`,
    answers: [
      { text: "You want to recount your adventure to everyone, as dramatically as possible!", trait: "Spotlight" },
      { text: "You reflect on this surreal experience, thoughtfully digesting and learning from it!", trait: "Meticulous" },
      { text: "\"So I went through all of that... and I still can’t turn into a Blob? Boooo!\"", trait: "Funny" },
      { text: "\"It’s time for more adventures. Gotta hunt down more of those floating objects!\"", trait: "Wildcard" }
    ],
    image: "images/16.png"
  },
  // 21: Return to studio
  {
    type: "description",
    text: `You head back to dance practice, buzzing with new ideas and a fresh perspective. As you step into the dance studio, you wave at your friends, ready to jump into the fun. \n\n But wait – what’s that glow in the corner? A tiny pair of golden headphones floats in the air, and on top of it, a cute young Blob is dancing like nobody’s watching… to Welcome to the Black Parade, of course! Looks like someone’s watching over you.`,
    button: "Next",
    image: "images/17.png"
  },
  // 22: Results
  {
    type: "result",
    text: `Blob Land was full of surprises, and your choices there have revealed a lot about you. Now, here’s your personal dancer profile – use it to bring even more energy, creativity, and fun to every practice!`,
    button: "Get My Results!",
  }
];

// ---- QUIZ LOGIC ----
let currentSlot = 0;
let selectedAnswers = []; // Stores {slot: slotIndex, trait: trait} for each question slot

// Prevent duplicate quiz_completed events
let quizCompletedLogged = false;

function renderSlot() {
  const slot = quizSlots[currentSlot];
  const container = document.getElementById('quiz-container');
  container.innerHTML = ""; // Clear previous content

  // Show progress bar for question slots only
  const totalQuestions = quizSlots.filter(s => s.type === 'question').length;
  const currentQuestionIndex = quizSlots.slice(0, currentSlot + 1).filter(s => s.type === 'question').length;
  if (slot.type === 'question') {
     const progressBarWrapper = document.createElement('div');
     progressBarWrapper.className = 'progress-bar-wrapper';

     const progressBar = document.createElement('div');
     progressBar.className = 'progress-bar';

     const progressFill = document.createElement('div');
     progressFill.className = 'progress-bar-fill';
     progressFill.style.width = Math.round((currentQuestionIndex / totalQuestions) * 100) + '%';
     progressBar.appendChild(progressFill);
     progressBarWrapper.appendChild(progressBar);

     // Progress text
     const progressText = document.createElement('div');
     progressText.className = 'progress-bar-text';
     progressText.textContent = `Question ${currentQuestionIndex} of ${totalQuestions}`;
     progressBarWrapper.appendChild(progressText);

     container.appendChild(progressBarWrapper);
  }

  // Display slot image if available
  if (slot.image) {
    const img = document.createElement('img');
    img.src = slot.image;
    img.alt = "";
    img.className = "slot-image";
    container.appendChild(img);
  }

  // Display main text as multiple paragraphs
  if (slot.text) {
    slot.text.split(/\n\n|\r\n\r\n/).forEach(paragraph => {
      const p = document.createElement('p');
      p.innerHTML = paragraph.trim();
      container.appendChild(p);
    });
  }

  // Start screen
  if (slot.type === "start") {
    const btn = document.createElement('button');
    btn.textContent = slot.button;
    btn.onclick = () => { currentSlot++; renderSlot(); };
    container.appendChild(btn);
    return;
  }

  // Description screen (narrative with Next button)
  if (slot.type === "description") {
    if (slot.button) {
        const btn = document.createElement('button');
        btn.textContent = slot.button;
        btn.className = 'next-btn';
        btn.onclick = () => { currentSlot++; renderSlot(); };
        container.appendChild(btn);
    }
    return;
  }

  // Question screen
  if (slot.type === "question") {
    slot.answers.forEach((ans, i) => {
      const btn = document.createElement('button');
      btn.textContent = ans.text;
      btn.onclick = () => {
        selectedAnswers.push({ slot: currentSlot, trait: ans.trait });
        // GA4 event: answer_selected
        console.log('[GA4] answer_selected', { question: currentSlot, option_index: i, trait: ans.trait, option_text: ans.text });
        if (typeof gtag === 'function') {
          gtag('event', 'answer_selected', {
            question: currentSlot,
            option_index: i,
            trait: ans.trait,
            option_text: ans.text
          });
        }
        currentSlot++;
        renderSlot();
      };
      btn.className = "answer-btn";
      container.appendChild(btn);
    });
    return;
  }

  // Result screen
  if (slot.type === "result") {
    const btn = document.createElement('button');
    btn.textContent = slot.button;
    btn.onclick = function() {
      console.log('Get My Results button clicked');
      try {
        showResults();
      } catch (e) {
        console.error('Error in showResults:', e);
        alert('An error occurred while showing results. See console for details.');
      }
    };
    container.appendChild(btn);
    return;
  }
}

function showResults() {
  console.log('showResults called');
  try {
    // Log selectedAnswers and personas for debugging
    console.log('selectedAnswers:', selectedAnswers);
    console.log('personas:', personas);
  } catch (e) {
    console.error('Error logging debug info:', e);
  }
  // Reset personas scores
  personas.forEach(p => p.score = 0);

  // Tally up scores from selectedAnswers
  selectedAnswers.forEach(ans => {
    const trait = ans.trait;
    const weights = traitToPersonaWeights[trait];
    weights.forEach((weight, idx) => {
      personas[idx].score += weight;
    });
  });


  // Find top 3 personas (with tiebreaker if needed)
  // 1. Find max score (first place)
  let personaArr = personas.map((p, idx) => ({ ...p, idx }));
  let maxScore = Math.max(...personaArr.map(p => p.score));
  let firstPlaceArr = personaArr.filter(p => p.score === maxScore);
  let winner = firstPlaceArr[Math.floor(Math.random() * firstPlaceArr.length)];

  // Remove winner from pool for 2nd place
  let remaining = personaArr.filter(p => p.idx !== winner.idx);
  let secondMax = Math.max(...remaining.map(p => p.score));
  let secondPlaceArr = remaining.filter(p => p.score === secondMax);
  let second;
  if (secondPlaceArr.length === 1) {
    second = secondPlaceArr[0];
  } else {
    // If winner was tied with others, pick one of the others as 2nd if possible
    let tiedWithWinner = firstPlaceArr.filter(p => p.idx !== winner.idx);
    if (tiedWithWinner.length > 0 && tiedWithWinner[0].score === secondMax) {
      second = tiedWithWinner[0];
    } else {
      second = secondPlaceArr[Math.floor(Math.random() * secondPlaceArr.length)];
    }
  }

  // Remove winner and second from pool for 3rd place
  let remainingForThird = personaArr.filter(p => p.idx !== winner.idx && p.idx !== second.idx);
  let thirdMax = Math.max(...remainingForThird.map(p => p.score));
  let thirdPlaceArr = remainingForThird.filter(p => p.score === thirdMax);
  let third = thirdPlaceArr[Math.floor(Math.random() * thirdPlaceArr.length)];

  // Firebase save removed; only GA4 is used now

  // Display results
  const container = document.getElementById('quiz-container');
  container.innerHTML = "";


  // Share Results header (less bold, smaller)
  const h3InstaTag = document.createElement('h3');
  h3InstaTag.textContent = "We'd love if you could tag us when sharing your results on Instagram :)";
  h3InstaTag.style.fontWeight = '400';
  h3InstaTag.style.fontSize = '1.3rem';
  h3InstaTag.style.maxWidth = '350px';
  h3InstaTag.style.margin = '0.5em auto 1.2em auto';
  h3InstaTag.style.textAlign = 'center';

  // Reduce bottom margin to decrease gap
  h3InstaTag.style.margin = '0.5em auto 0.9em auto';
  container.appendChild(h3InstaTag);

  // Winner image
    if (winner.image) {
      // Only log quiz_completed event the first time results are shown
      if (!quizCompletedLogged) {
        console.log('[GA4] quiz_completed', { persona: winner.name });
        if (typeof gtag === 'function') {
          gtag('event', 'quiz_completed', {
            persona: winner.name
          });
        }
        quizCompletedLogged = true;
      }
      // Add 'Your Dance Persona is...' line
    const personaLine = document.createElement('div');
    personaLine.textContent = 'Your Dance Persona is...';
    personaLine.style.fontWeight = '700';
    personaLine.style.fontSize = '1.3rem'; // smaller
    personaLine.style.textAlign = 'center';
    personaLine.style.margin = '0.6em 0 0.7em 0';
    personaLine.style.color = '#6d2d7e';
    container.appendChild(personaLine);

      const img = document.createElement('img');
      img.src = winner.image;
      img.alt = winner.name;
      img.className = "slot-image";
      container.appendChild(img);

      // Instruction text below image
    const saveText = document.createElement('div');
    saveText.innerHTML = "<i>Right click or hold the image to save!</i>";
    saveText.style.fontSize = '1.07rem'; // smaller
    saveText.style.margin = '0.1em auto 1.5em auto';
    saveText.style.maxWidth = '90%';
    saveText.style.color = '#6d2d7e';
    saveText.style.fontWeight = '500';
    saveText.style.textAlign = 'center';
    container.appendChild(saveText);
    }

  // Runners-up display


  // View All 8 Personas button
    const viewAllBtn = document.createElement('button');
    viewAllBtn.textContent = 'View all 8 Personas here!';
    viewAllBtn.style.margin = '0.6em auto 0.6em auto';
    viewAllBtn.style.display = 'block';
    viewAllBtn.style.fontSize = '1.08rem';
    viewAllBtn.style.padding = '0.55em 1.1em';
    viewAllBtn.style.whiteSpace = 'nowrap';
    viewAllBtn.onclick = function() {
      console.log('[GA4] view_all_personas_clicked');
      if (typeof gtag === 'function') {
        gtag('event', 'view_all_personas_clicked');
      }
      showAllPersonas();
    };
    container.appendChild(viewAllBtn);

  // Restart button
    const restartBtn = document.createElement('button');
    restartBtn.textContent = "Restart Quiz";
    restartBtn.style.margin = '0.6em auto 0.6em auto';
    restartBtn.style.fontSize = '1.08rem';
    restartBtn.style.padding = '0.55em 1.1em';
    restartBtn.style.whiteSpace = 'nowrap';
    restartBtn.onclick = () => {
      console.log('[GA4] restart_quiz_clicked');
      if (typeof gtag === 'function') {
        gtag('event', 'restart_quiz_clicked');
      }
      currentSlot = 0;
      selectedAnswers = [];
      quizCompletedLogged = false; // Reset flag on restart
      renderSlot();
    };
    container.appendChild(restartBtn);

  // Instagram page button (now last)
    const instaBtn = document.createElement('button');
    instaBtn.textContent = 'Check us out on Instagram!';
    instaBtn.style.display = 'block';
    instaBtn.style.margin = '0.6em auto 0.6em auto';
    instaBtn.style.textAlign = 'center';
    instaBtn.style.fontSize = '1.08rem';
    instaBtn.style.padding = '0.55em 1.1em';
    instaBtn.style.whiteSpace = 'nowrap';
    instaBtn.onclick = () => {
      console.log('[GA4] instagram_clicked');
      if (typeof gtag === 'function') {
        gtag('event', 'instagram_clicked');
      }
      window.open('https://www.instagram.com/eluminix/', '_blank', 'noopener');
    };
    container.appendChild(instaBtn);

// Show all 8 persona report cards
function showAllPersonas() {

  const container = document.getElementById('quiz-container');
  container.innerHTML = '';

  // Title (sticky at top)
  const title = document.createElement('h2');
  title.textContent = 'Meet All 8 Personas!';
  title.style.margin = '0';
  title.style.padding = '1.5em 0 1em 0';
  title.style.fontSize = '2rem';
  title.style.color = '#6d2d7e';
  title.style.fontWeight = '700';
  title.style.textAlign = 'center';
  title.style.position = 'sticky';
  title.style.top = '0';
  title.style.background = 'white';
  title.style.zIndex = '10';
  container.appendChild(title);

  // Scrollable images wrapper
  const imagesWrapper = document.createElement('div');
  imagesWrapper.style.maxHeight = '60vh';
  imagesWrapper.style.overflowY = 'auto';
  imagesWrapper.style.margin = '0 auto';
  imagesWrapper.style.padding = '0 0 1em 0';

  personas.forEach(p => {
    const personaDiv = document.createElement('div');
    personaDiv.style.margin = '0 0 2.2em 0';
    personaDiv.style.textAlign = 'center';

    const img = document.createElement('img');
    img.src = p.image;
    img.alt = p.name;
    img.className = 'slot-image';
    img.style.maxWidth = '350px';
    img.style.width = '90%';
    img.style.borderRadius = '1.2em';
    img.style.boxShadow = '0 2px 16px rgba(123, 80, 198, 0.08)';
    personaDiv.appendChild(img);

    imagesWrapper.appendChild(personaDiv);
  });
  container.appendChild(imagesWrapper);

  // Back to results button (sticky at bottom)
  const backBtn = document.createElement('button');
  backBtn.textContent = 'Back to My Results';
  backBtn.onclick = showResults;
  backBtn.style.margin = '0';
  backBtn.style.position = 'sticky';
  backBtn.style.bottom = '0';
  backBtn.style.left = '0';
  backBtn.style.right = '0';
  backBtn.style.display = 'block';
  backBtn.style.width = '100%';
  backBtn.style.padding = '1.2em 0';
  backBtn.style.background = 'white';
  backBtn.style.zIndex = '10';
  container.appendChild(backBtn);
}
}

// ---- INIT ----
window.onload = renderSlot;