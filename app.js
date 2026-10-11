/* ═══════════════════════════════════════════════════════
   VOCABULARY QUEST – B1+ List 5 "News"
   app.js – Full application logic
═══════════════════════════════════════════════════════ */

// ── Word Data ─────────────────────────────────────────
const WORDS = [
  { word: "accurately",    pos: "adverb",    meaning: "In a correct or exact way",                                         example: "The plans should be drawn as accurately as possible." },
  { word: "approach",      pos: "verb",      meaning: "To come close in distance or time",                                  example: "The journalist approached people in the crowd and asked them questions." },
  { word: "approximately", pos: "adverb",    meaning: "Close to a particular number or time, but not exactly",              example: "The job will take approximately three weeks, and cost approximately AED 1,000." },
  { word: "atmosphere",    pos: "noun",      meaning: "The feeling that exists in a place or situation",                    example: "There's a very relaxed atmosphere in our office." },
  { word: "attach",        pos: "verb",      meaning: "To join one thing to another; or to add a file to an email",         example: "I've attached a copy of this month's report to the email." },
  { word: "backwards",     pos: "adverb",    meaning: "Towards the direction behind you",                                   example: "He took a step backwards to allow her to pass." },
  { word: "charity",       pos: "noun",      meaning: "An official organization that gives money, food, or help to people who need it", example: "UNICEF is an international charity." },
  { word: "convince",      pos: "verb",      meaning: "To make someone believe that something is true",                     example: "It's useless trying to convince her that she doesn't need to lose any weight." },
  { word: "creature",      pos: "noun",      meaning: "Anything that lives but is not a plant",                             example: "Blue whales are the largest creatures ever to have lived." },
  { word: "crop",          pos: "noun",      meaning: "A plant such as a grain, fruit, or vegetable grown in large amounts by farmers", example: "The main crops grown for export are coffee and rice." },
  { word: "engineering",   pos: "noun",      meaning: "The work of an engineer, or the study of this work",                 example: "Rashid studied engineering at HCT." },
  { word: "exact",         pos: "adjective", meaning: "Completely correct",                                                 example: "The exact time of the accident was 2.43 p.m." },
  { word: "explode",       pos: "verb",      meaning: "To burst with noise and force",                                      example: "A bomb exploded at one of the capital's busiest railway stations this morning." },
  { word: "faucet",        pos: "noun",      meaning: "The part at the end of a pipe that controls the flow of water (US English)", example: "Turn the faucet on/off." },
  { word: "forecast",      pos: "noun",      meaning: "Something that says what will happen in the future",                 example: "The weather forecast said it was going to rain later today." },
  { word: "forward",       pos: "adverb",    meaning: "Towards the direction that is in front of you",                      example: "She leaned forward to speak into the microphone." },
  { word: "grateful",      pos: "adjective", meaning: "Wanting to say 'thank you' to someone who has done something good for you", example: "I'm so grateful to you for all that you've done." },
  { word: "historical",    pos: "adjective", meaning: "Relating to the past",                                               example: "Many important historical documents were destroyed in the fire in the national library." },
  { word: "imagination",   pos: "noun",      meaning: "The ability to have ideas or pictures in your mind",                 example: "I can never make up stories – I have absolutely no imagination." },
  { word: "in favour of",  pos: "phrase",    meaning: "To agree with a plan or idea",                                       example: "Are you in favour of a ban on smoking?" },
  { word: "leaf",          pos: "noun",      meaning: "A flat, green part of a plant that grows from a stem or branch",     example: "The leaves on the trees have started to change colour." },
  { word: "limited",       pos: "adjective", meaning: "Small in amount or number",                                          example: "There is a limited choice of drinks." },
  { word: "mostly",        pos: "adverb",    meaning: "Mainly or most of the time",                                         example: "It's mostly quiet at night." },
  { word: "mystery",       pos: "noun",      meaning: "Something strange that cannot be explained or understood",            example: "The mystery was solved when the police discovered the murder weapon." },
  { word: "nearby",        pos: "adverb / adjective", meaning: "Not far away",                                              example: "If there's a café nearby, we could stop for a coffee and a snack." },
  { word: "nowhere",       pos: "adverb",    meaning: "Not anywhere",                                                       example: "There was nowhere to sit." },
  { word: "pipe",          pos: "noun",      meaning: "A long tube that liquid or gas can move through",                    example: "Water was coming out of the pipe." },
  { word: "plenty",        pos: "quantifier", meaning: "A lot of something, more than you need",                            example: "They've always had plenty of money." },
  { word: "plug",          pos: "noun",      meaning: "An object used to connect electrical equipment; or something to block a hole", example: "I need to change the plug on my hairdryer." },
  { word: "previously",    pos: "adverb",    meaning: "Before",                                                             example: "He previously worked as a teacher." },
  { word: "pure",          pos: "adjective", meaning: "Not mixed with anything else; or clean and healthy",                 example: "The mountain air was wonderfully pure." },
  { word: "rescue",        pos: "verb / noun", meaning: "To save someone or something from a dangerous situation",          example: "Fifty passengers had to be rescued from a sinking ship." },
  { word: "scientific",    pos: "adjective", meaning: "Relating to science",                                                example: "A great deal of scientific research is being performed in this area." },
  { word: "shocked",       pos: "adjective", meaning: "Very surprised and upset",                                           example: "We were shocked to find a rat in our hotel room." },
  { word: "spoil",         pos: "verb",      meaning: "To stop something from being enjoyable or successful",               example: "The picnic was spoiled by the bad weather." },
  { word: "take action",   pos: "idiom",     meaning: "To do something in order to solve a problem",                        example: "We must take action before the problem gets worse." },
  { word: "tap",           pos: "noun",      meaning: "The part at the end of a pipe that controls the flow of water (British English)", example: "You shouldn't drink the water from the tap." },
  { word: "tower",         pos: "noun",      meaning: "A very tall, narrow building, or part of a building",                example: "He works in an office tower in downtown Dubai." },
  { word: "unpleasant",    pos: "adjective", meaning: "Not enjoyable or pleasant",                                          example: "There was an unpleasant smell coming from the bin." },
  { word: "useless",       pos: "adjective", meaning: "Does not work well or has no effect",                                example: "This umbrella is useless – there's a big hole in it." },
];

// ── State ──────────────────────────────────────────────
let mastered = new Set(JSON.parse(localStorage.getItem('mastered') || '[]'));
let currentMode = '';
let currentQ = 0;
let score = 0;
let shuffled = [];
let lastMode = '';

// ── Utility ────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function saveMastered() {
  localStorage.setItem('mastered', JSON.stringify([...mastered]));
}

function updateHomeProgress() {
  const pct = Math.round((mastered.size / WORDS.length) * 100);
  document.getElementById('home-bar').style.width = pct + '%';
  document.getElementById('home-score-label').textContent = `${mastered.size} / ${WORDS.length} mastered`;
}

function goHome() {
  showScreen('home');
  updateHomeProgress();
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ── MODE ROUTER ────────────────────────────────────────
function startMode(mode) {
  lastMode = mode;
  currentMode = mode;
  score = 0;
  currentQ = 0;
  shuffled = shuffle(WORDS);
  showScreen(mode);

  switch (mode) {
    case 'flashcards': initFlashcards(); break;
    case 'quiz':       initQuiz();       break;
    case 'fillin':     initFillIn();     break;
    case 'match':      initMatch();      break;
    case 'spell':      initSpell();      break;
    case 'challenge':  initChallenge();  break;
  }
}

function replayMode() { startMode(lastMode); }

// ══════════════════════════════════════════════════════
//  FLASHCARDS
// ══════════════════════════════════════════════════════
let fcIndex = 0;
let fcFlipped = false;

function initFlashcards() {
  fcIndex = 0; fcFlipped = false;
  renderFC();
}

function renderFC() {
  const w = shuffled[fcIndex];
  document.getElementById('fc-pos').textContent = w.pos;
  document.getElementById('fc-word').textContent = w.word;
  document.getElementById('fc-meaning').textContent = w.meaning;
  document.getElementById('fc-example').textContent = `"${w.example}"`;
  document.getElementById('fc-counter').textContent = `${fcIndex + 1} / ${shuffled.length}`;
  const inner = document.getElementById('fc-inner');
  inner.classList.remove('flipped');
  fcFlipped = false;
}

function flipCard() {
  const inner = document.getElementById('fc-inner');
  fcFlipped = !fcFlipped;
  inner.classList.toggle('flipped', fcFlipped);
}

function fcNav(dir) {
  fcIndex = (fcIndex + dir + shuffled.length) % shuffled.length;
  renderFC();
}

function markWord(known) {
  const w = shuffled[fcIndex];
  if (known) mastered.add(w.word); else mastered.delete(w.word);
  saveMastered();
  fcNav(1);
}

// ══════════════════════════════════════════════════════
//  MEANING QUIZ
// ══════════════════════════════════════════════════════
function initQuiz() {
  currentQ = 0; score = 0;
  document.getElementById('quiz-score').textContent = '⭐ 0';
  nextQuizQ();
}

function nextQuizQ() {
  if (currentQ >= shuffled.length) { showResults('quiz'); return; }
  const pct = Math.round((currentQ / shuffled.length) * 100);
  document.getElementById('quiz-progress').style.width = pct + '%';

  const w = shuffled[currentQ];
  document.getElementById('quiz-word').textContent = w.word;
  document.getElementById('quiz-pos').textContent = w.pos;
  document.getElementById('quiz-question').textContent = 'What does this word mean?';
  document.getElementById('quiz-feedback').textContent = '';
  document.getElementById('quiz-feedback').className = 'feedback';

  // 4 options: 1 correct + 3 wrong
  const others = shuffle(WORDS.filter(x => x.word !== w.word)).slice(0, 3);
  const options = shuffle([w, ...others]);
  const grid = document.getElementById('quiz-options');
  grid.innerHTML = '';
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt.meaning;
    btn.onclick = () => selectQuizAnswer(btn, opt.word === w.word, w, grid);
    grid.appendChild(btn);
  });
}

function selectQuizAnswer(btn, correct, word, grid) {
  Array.from(grid.children).forEach(b => { b.disabled = true; });
  const fb = document.getElementById('quiz-feedback');
  if (correct) {
    btn.classList.add('correct');
    score++;
    fb.textContent = '✅ Correct! Well done!';
    fb.className = 'feedback correct';
    mastered.add(word.word); saveMastered();
  } else {
    btn.classList.add('wrong');
    fb.textContent = `❌ The correct meaning: "${word.meaning}"`;
    fb.className = 'feedback wrong';
    mastered.delete(word.word); saveMastered();
    // highlight correct
    Array.from(grid.children).forEach(b => {
      if (b.textContent === word.meaning) b.classList.add('correct');
    });
  }
  document.getElementById('quiz-score').textContent = `⭐ ${score}`;
  currentQ++;
  setTimeout(nextQuizQ, 1800);
}

// ══════════════════════════════════════════════════════
//  FILL IN THE GAP
// ══════════════════════════════════════════════════════
function initFillIn() {
  currentQ = 0; score = 0;
  document.getElementById('fi-score').textContent = '⭐ 0';
  nextFillIn();
}

function nextFillIn() {
  if (currentQ >= shuffled.length) { showResults('fillin'); return; }
  const pct = Math.round((currentQ / shuffled.length) * 100);
  document.getElementById('fi-progress').style.width = pct + '%';

  const w = shuffled[currentQ];
  // Replace the word in the example with a blank
  const re = new RegExp('\\b' + w.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'gi');
  const sentence = w.example.replace(re, '<span class="blank">_______</span>');
  document.getElementById('fi-sentence').innerHTML = sentence;
  document.getElementById('fi-hint').textContent = `Hint: Part of speech – ${w.pos}`;
  document.getElementById('fi-input').value = '';
  document.getElementById('fi-feedback').textContent = '';
  document.getElementById('fi-feedback').className = 'feedback';
  document.getElementById('fi-next').classList.add('hidden');
  document.getElementById('fi-input').focus();
}

function checkFillIn() {
  const w = shuffled[currentQ];
  const val = document.getElementById('fi-input').value.trim().toLowerCase();
  const correct = w.word.toLowerCase();
  const fb = document.getElementById('fi-feedback');
  if (val === correct) {
    fb.textContent = '✅ Correct!';
    fb.className = 'feedback correct';
    score++;
    mastered.add(w.word); saveMastered();
  } else {
    fb.textContent = `❌ The answer is: "${w.word}"`;
    fb.className = 'feedback wrong';
    mastered.delete(w.word); saveMastered();
  }
  document.getElementById('fi-score').textContent = `⭐ ${score}`;
  currentQ++;
  document.getElementById('fi-next').classList.remove('hidden');
}

// ══════════════════════════════════════════════════════
//  WORD MATCH
// ══════════════════════════════════════════════════════
let matchSelected = null;
let matchPairs = 0;
let matchRound = 0;
let matchScore = 0;
const MATCH_SIZE = 6;

function initMatch() {
  matchScore = 0;
  matchRound = 0;
  document.getElementById('match-score').textContent = '⭐ 0';
  loadMatchRound();
}

function loadMatchRound() {
  const total = shuffled.length;
  const start = matchRound * MATCH_SIZE;
  if (start >= total) { showResults('match'); return; }
  const pct = Math.round((start / total) * 100);
  document.getElementById('match-progress').style.width = pct + '%';

  const slice = shuffled.slice(start, start + MATCH_SIZE);
  const words = shuffle(slice);
  const meanings = shuffle(slice);

  matchSelected = null;
  matchPairs = 0;

  const wCol = document.getElementById('match-words');
  const mCol = document.getElementById('match-meanings');
  wCol.innerHTML = ''; mCol.innerHTML = '';

  document.getElementById('match-feedback').textContent = '';

  words.forEach(w => {
    const btn = document.createElement('div');
    btn.className = 'match-item';
    btn.textContent = w.word;
    btn.dataset.word = w.word;
    btn.dataset.type = 'word';
    btn.onclick = () => selectMatch(btn);
    wCol.appendChild(btn);
  });
  meanings.forEach(w => {
    const btn = document.createElement('div');
    btn.className = 'match-item';
    btn.textContent = w.meaning;
    btn.dataset.word = w.word;
    btn.dataset.type = 'meaning';
    btn.onclick = () => selectMatch(btn);
    mCol.appendChild(btn);
  });
}

function selectMatch(btn) {
  if (btn.classList.contains('correct')) return;
  if (!matchSelected) {
    if (matchSelected) matchSelected.classList.remove('selected');
    matchSelected = btn;
    btn.classList.add('selected');
    return;
  }
  if (matchSelected === btn) { btn.classList.remove('selected'); matchSelected = null; return; }
  if (matchSelected.dataset.type === btn.dataset.type) {
    matchSelected.classList.remove('selected');
    matchSelected = btn; btn.classList.add('selected'); return;
  }
  // Check pair
  const fb = document.getElementById('match-feedback');
  if (matchSelected.dataset.word === btn.dataset.word) {
    matchSelected.classList.remove('selected');
    matchSelected.classList.add('correct');
    btn.classList.add('correct');
    matchScore++;
    document.getElementById('match-score').textContent = `⭐ ${matchScore}`;
    fb.textContent = '✅ Matched!'; fb.className = 'feedback correct';
    mastered.add(btn.dataset.word); saveMastered();
    matchPairs++;
    matchSelected = null;
    if (matchPairs === Math.min(MATCH_SIZE, shuffled.length - matchRound * MATCH_SIZE)) {
      setTimeout(() => { matchRound++; loadMatchRound(); }, 900);
    }
  } else {
    matchSelected.classList.remove('selected');
    matchSelected.classList.add('wrong');
    btn.classList.add('wrong');
    fb.textContent = '❌ Not a match. Try again!'; fb.className = 'feedback wrong';
    const a = matchSelected, b2 = btn;
    setTimeout(() => { a.classList.remove('wrong'); b2.classList.remove('wrong'); }, 700);
    matchSelected = null;
  }
}

// ══════════════════════════════════════════════════════
//  SPELLING BEE
// ══════════════════════════════════════════════════════
function initSpell() {
  currentQ = 0; score = 0;
  document.getElementById('spell-score').textContent = '⭐ 0';
  nextSpell();
}

function nextSpell() {
  if (currentQ >= shuffled.length) { showResults('spell'); return; }
  const pct = Math.round((currentQ / shuffled.length) * 100);
  document.getElementById('spell-progress').style.width = pct + '%';

  const w = shuffled[currentQ];
  document.getElementById('spell-meaning').textContent = w.meaning;
  document.getElementById('spell-pos').textContent = `(${w.pos})`;
  // Example with blank
  const re = new RegExp('\\b' + w.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'gi');
  document.getElementById('spell-example').textContent = w.example.replace(re, '___');
  document.getElementById('letter-hint').textContent = '';
  document.getElementById('spell-input').value = '';
  document.getElementById('spell-feedback').textContent = '';
  document.getElementById('spell-feedback').className = 'feedback';
  document.getElementById('spell-next').classList.add('hidden');
  document.getElementById('spell-input').focus();
}

function showLetterHint() {
  const w = shuffled[currentQ];
  document.getElementById('letter-hint').textContent = `First letter: ${w.word[0].toUpperCase()}  (${w.word.length} letters)`;
}

function checkSpell() {
  const w = shuffled[currentQ];
  const val = document.getElementById('spell-input').value.trim().toLowerCase();
  const correct = w.word.toLowerCase();
  const fb = document.getElementById('spell-feedback');
  if (val === correct) {
    fb.textContent = `✅ Correct! "${w.word}"`;
    fb.className = 'feedback correct';
    score++;
    mastered.add(w.word); saveMastered();
  } else {
    fb.textContent = `❌ The word is: "${w.word}"`;
    fb.className = 'feedback wrong';
    mastered.delete(w.word); saveMastered();
  }
  document.getElementById('spell-score').textContent = `⭐ ${score}`;
  currentQ++;
  document.getElementById('spell-next').classList.remove('hidden');
}

// ══════════════════════════════════════════════════════
//  CHALLENGE MODE (timed, mixed)
// ══════════════════════════════════════════════════════
let chTimer = null;
let chSeconds = 0;
let chTotal = 0;

function initChallenge() {
  currentQ = 0; score = 0; chTotal = 20;
  shuffled = shuffle(WORDS).slice(0, chTotal);
  document.getElementById('ch-score').textContent = '⭐ 0';
  startChTimer();
  nextChallenge();
}

function startChTimer() {
  chSeconds = 60;
  updateChTimer();
  chTimer = setInterval(() => {
    chSeconds--;
    updateChTimer();
    if (chSeconds <= 0) { clearInterval(chTimer); showResults('challenge'); }
  }, 1000);
}

function updateChTimer() {
  document.getElementById('ch-timer').textContent = `⏱ ${chSeconds}`;
}

function nextChallenge() {
  if (currentQ >= chTotal) { clearInterval(chTimer); showResults('challenge'); return; }
  const pct = Math.round((currentQ / chTotal) * 100);
  document.getElementById('ch-progress').style.width = pct + '%';
  document.getElementById('ch-feedback').textContent = '';
  document.getElementById('ch-feedback').className = 'feedback';

  const w = shuffled[currentQ];
  const type = currentQ % 3; // 0=meaning quiz, 1=fill-in, 2=spell

  document.getElementById('ch-options').innerHTML = '';
  document.getElementById('ch-options').style.display = 'grid';
  document.getElementById('ch-input-row').classList.add('hidden');

  if (type === 0) {
    document.getElementById('ch-type-badge').textContent = '🎯 Quiz';
    document.getElementById('ch-question').textContent = 'What does this word mean?';
    document.getElementById('ch-word').textContent = w.word;
    const others = shuffle(WORDS.filter(x => x.word !== w.word)).slice(0, 3);
    const opts = shuffle([w, ...others]);
    const grid = document.getElementById('ch-options');
    opts.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = opt.meaning;
      btn.onclick = () => chSelectAnswer(btn, opt.word === w.word, w, grid);
      grid.appendChild(btn);
    });
  } else if (type === 1) {
    document.getElementById('ch-type-badge').textContent = '✏️ Fill-in';
    const re = new RegExp('\\b' + w.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'gi');
    document.getElementById('ch-question').textContent = 'Complete the sentence:';
    document.getElementById('ch-word').innerHTML = w.example.replace(re, '<strong style="color:var(--gold)">_______</strong>');
    document.getElementById('ch-options').style.display = 'none';
    document.getElementById('ch-input-row').classList.remove('hidden');
    document.getElementById('ch-input').value = '';
    document.getElementById('ch-input').focus();
  } else {
    document.getElementById('ch-type-badge').textContent = '🔤 Spelling';
    document.getElementById('ch-question').textContent = 'Type the word for this meaning:';
    document.getElementById('ch-word').textContent = w.meaning;
    document.getElementById('ch-options').style.display = 'none';
    document.getElementById('ch-input-row').classList.remove('hidden');
    document.getElementById('ch-input').value = '';
    document.getElementById('ch-input').focus();
  }
}

function chSelectAnswer(btn, correct, word, grid) {
  Array.from(grid.children).forEach(b => b.disabled = true);
  const fb = document.getElementById('ch-feedback');
  if (correct) {
    btn.classList.add('correct'); score++; chSeconds += 5;
    fb.textContent = '✅ +5 seconds!'; fb.className = 'feedback correct';
    mastered.add(word.word); saveMastered();
  } else {
    btn.classList.add('wrong'); chSeconds = Math.max(0, chSeconds - 3);
    fb.textContent = `❌ -3 seconds! Answer: "${word.meaning}"`; fb.className = 'feedback wrong';
    Array.from(grid.children).forEach(b => { if (b.textContent === word.meaning) b.classList.add('correct'); });
  }
  document.getElementById('ch-score').textContent = `⭐ ${score}`;
  updateChTimer();
  currentQ++;
  setTimeout(nextChallenge, 1400);
}

function checkChallenge() {
  const w = shuffled[currentQ];
  const val = document.getElementById('ch-input').value.trim().toLowerCase();
  const correct = w.word.toLowerCase();
  const fb = document.getElementById('ch-feedback');
  if (val === correct) {
    fb.textContent = '✅ Correct! +5 seconds!'; fb.className = 'feedback correct';
    score++; chSeconds += 5;
    mastered.add(w.word); saveMastered();
  } else {
    fb.textContent = `❌ Answer: "${w.word}" | -3 seconds`; fb.className = 'feedback wrong';
    chSeconds = Math.max(0, chSeconds - 3);
  }
  document.getElementById('ch-score').textContent = `⭐ ${score}`;
  updateChTimer();
  currentQ++;
  setTimeout(nextChallenge, 1400);
}

// Allow Enter key in inputs
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('fi-input').addEventListener('keydown', e => { if (e.key === 'Enter') checkFillIn(); });
  document.getElementById('spell-input').addEventListener('keydown', e => { if (e.key === 'Enter') checkSpell(); });
  document.getElementById('ch-input').addEventListener('keydown', e => { if (e.key === 'Enter') checkChallenge(); });
  updateHomeProgress();
});

// ══════════════════════════════════════════════════════
//  RESULTS
// ══════════════════════════════════════════════════════
function showResults(mode) {
  if (chTimer) { clearInterval(chTimer); chTimer = null; }
  showScreen('results');

  let total, pct;
  if (mode === 'match') {
    total = WORDS.length; // pairs possible
    score = matchScore;
    pct = Math.round((score / Math.ceil(total / MATCH_SIZE)) * 100);
  } else if (mode === 'challenge') {
    total = chTotal;
    pct = Math.round((score / total) * 100);
  } else {
    total = WORDS.length;
    pct = Math.round((score / total) * 100);
  }

  document.getElementById('results-score').textContent = `${score} pts`;
  setTimeout(() => {
    document.getElementById('results-bar').style.width = Math.min(pct, 100) + '%';
  }, 200);

  let trophy, title, msg;
  if (pct >= 90) { trophy = '🏆'; title = 'Excellent!'; msg = 'Outstanding work! You really know these words!'; }
  else if (pct >= 70) { trophy = '🥇'; title = 'Great job!'; msg = 'You are doing very well. Keep practising!'; }
  else if (pct >= 50) { trophy = '🥈'; title = 'Good effort!'; msg = 'You are making progress. Review the words and try again!'; }
  else { trophy = '📚'; title = 'Keep going!'; msg = 'Use the Flashcards to study, then try again!'; }

  document.getElementById('results-trophy').textContent = trophy;
  document.getElementById('results-title').textContent = title;
  document.getElementById('results-msg').textContent = msg;
  updateHomeProgress();
}
