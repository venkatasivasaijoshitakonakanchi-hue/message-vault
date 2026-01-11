// ====== CONFIG ======
const DEV_MODE = false; // true for testing; set false before gifting

const BIRTHDAY = new Date("2026-01-23T00:00:00"); // local time

// Daily lock keys
const STORAGE_KEY_DATE = "vault_last_unlock_date";
const STORAGE_KEY_CODE = "vault_last_unlock_code";

// Archive of unlocked codes
const STORAGE_KEY_ARCHIVE = "vault_unlocked_codes";

// Pre-unlock first 2 messages automatically
const PRE_UNLOCK_CODES = ["4501", "6702"]; // Day 1 + Day 2

// Your custom codes (in day order)
const CODE_ORDER = [
  "4501", "6702", "9803", "1804", "9605", "5606", "6907",
  "2608", "7309", "3610", "7311", "7812", "7413", "8314",
  "8515", "9616", "7517", "4818", "7819", "4420", "2126"
];

const MESSAGES = {
  "4501": {
    day: 1,
    title: "Day 1 ✦ A proper beginning",
    message:
      "Hello Saghana!!!! You are going to turn 21 in 21 days!! How does it feel to be older than your friend(s), haha. But dear, this only means that we are growing and turning into real adults. A stage where we can EARN and make our decisions! A bit little late to give you this, but here are 21 paper stars that you are gonna open, one each day leading up to your birthday. Have fun reading them Love! \nYou’re the kind of person who makes life feel calmer and safer. I’m so grateful the universe crossed our paths — and I’m proud of the friendship we’ve built so quickly."
  },
  "6702": {
    day: 2,
    title: "Day 2 ✦ Soft hearts, strong souls",
    message:
      "Your honesty is rare, and your kindness is real. You don’t just say you care — you show it. That’s one of the reasons you’re so loved. 20 more days to go! Love youuuuuu"
  },
  "9803": {
    day: 3,
    title: "Day 3 ✦ Loyal looks good on you",
    message:
      "You are loyal in the most beautiful way — steady, sincere, and present. You make people feel chosen. Never forget how special that is. 19 more days to go!"
  },
  "1804": {
    day: 4,
    title: "Day 4 ✦ A little chocolate warmth",
    message:
      "You are sweet like a milk chocolate and give off some DARK vibes as a dark chocolate (Refer back to those pause games on instagram). Cozy, classy, and unforgettable. 18 more days to go!"
  },
  "9605": { day: 5, title: "Day 5 ✦ Rasmalai", message: "Are you Rasmalai?! Cause I want you for the Ras-of-ma-life. Haha" },
  "5606": {
    day: 6,
    title: "Day 6 ✦ Chill queen energy",
    message:
      "Haha, How was my rizzzz from yesterday?! Were you flattered? Butterflies? HAHA. Here's your message for today: You are a kind of person who feels like a safe place—sweet, honest, and effortlessly loyal in a way that makes me trust you without even trying. You carry a calm, chill energy that softens heavy days, like warm brown rainfall against a navy night. There’s something quietly magical about you: never loud, more like a polished sparkle that shows up when the moment matters (You know, Quietly Iconic, hehe). I agree, says ChatGPT and me ofc"
  },
  "6907": {
    day: 7,
    title: "Day 7 ✦ Special Message 2",
    message:
      "Thank you, Saghana, for being such a wonderful friend. Even though I didn’t know you well back in Tamil school, I truly feel much closer to you now. It’s been great getting to know you, and you’ve been there for me on days when I really needed someone. I’m so grateful to have a friend like you. You are one of the sweetest people I’ve ever met, and you are truly special an important part of my life. I’ve learned so much from you, and you are a genuinely good friend, the kind not everyone is lucky enough to have.  - Nanditha"
  },
  "2608": {
    day: 8,
    title: "Day 8 ✦ Special Message 3",
    message:
      "Dear Saggii, You know 21 is such a big milestone and you deserve to be happy here after too!!🙃Always do what you want and dont listen to others who you think are making bad choices. FOLLOW WHAT YOU THINK IS RIGHT AND DONT REGRET IT🫠🫠Eventhough I dont rly express my emotions towards you, I love you a lott. Going foward in life, things will be pretty difficult, but its up to you to not give up and keep moving forwardd🙂🙂You mostly shaped me into who I am today and the rest I did by myself. I look up to you in so many ways and think your a really amazing and smart person!! WELL ANYWAYS, Im running out of stuff to write, I pretty much emptied my whole brain, hehe. But I hope this year brings you love, success, a lot of happiness, and everything you have been working for!! No matter how old we get or how life changes, I will always be by your side whenever you need it. I love you more than words can explain and hehe yup thats it. Once again, happy 21st birthday you oldie!!! ❤️❤️🥳🎊🥂 From Vainu :))"
  },
  "7309": {
    day: 9,
    title: "Day 9 ✦ Special Message 4",
    message:
      "Happy 21st birthday! You’ve reached a huge milestone in your life, and I wish you many years with much love and happiness!! I’m so grateful for your friendship and support. We’ve had many great memories together and I’m looking forward to making many more in the years to come! You’re an amazing person and friend, and you deserve the best on this special day!! Wishing you nothing less than the world, Alexia 🩷"
  },
  "3610": {
    day: 10,
    title: "Day 10 ✦ Proud of you (seriously)",
    message:
      "I’m proud of you — not just for what you do, but for who you are: thoughtful, considerate, and real. You make kindness look powerful. Also Saghana, I think I messed up the timeline. The paper stars might not match what's here on the website but hey, my messages will give you the countdown, so follow that!"
  },
  "7311": { day: 11, title: "Day 11 ✦ Hogwarts letter moment", message: "Imagine this as your Hogwarts letter: ‘We are pleased to inform you that you are iconic and loved.’ Please accept immediately." },
  "7812": { day: 12, title: "Day 12 ✦ Special Message 5", message: "Ridhanya?" },
  "7413": {
    day: 13,
    title: "Day 13 ✦ You make people feel safe",
    message:
      "You are thoughtful in the details, the type who remembers, checks in, and makes you feel seen without needing a reason. Even though we’ve known each other for about five years, the closeness grew so naturally that it feels like you found a best friend at exactly the right time. And honestly, being loved by you as a friend is one of those rare gifts you don’t take for granted—you just feel grateful, every time."
  },
  "8314": { day: 14, title: "Day 14 ✦ Title hold", message: "You’re honest in a way that never harms — it helps. That balance is a gift. Never let the world change that softness in you." },
  "8515": { day: 15, title: "Day 15 ✦ Little wins matter", message: "Today: celebrate a small win. Drink water. Rest your mind. You’re doing better than you think — and I’m cheering for you." },
  "9616": {
    day: 16,
    title: "Day 16 ✦ Special Message 6",
    message:
      "Dear Saghana, I still remember the first time you and I hung out at Renegade. I was honestly skeptical. I kept wondering if it would be awkward or if it was too soon for us to hang out without Joshita. But to my surprise, it went so well that you’ve since become one of the greatest people I’ve ever known—one of my best friends. I genuinely don’t know what I would have done without you over the past two years as we’ve grown so close. You’ve been there for me through some of the hardest moments of my life. You stayed up late on calls while I ranted about everything going wrong, and you never once hesitated, rushed me, or made me feel like I was too much. That alone says everything about the kind of person you are. You are one of the most patient and kind people I have ever met. You put so much pressure on yourself, work incredibly hard, and somehow always come out on top. I hope you know how valued you are and how lucky everyone around you is to know you. Truly. Being able to dream about the future with you—girls’ trips with you and Joshita, maybe even that penthouse we joked about, or living together at some point—makes me so excited for everything still ahead. And yes, I cannot wait to finally drink soju with you (lol) when I turn 21… only about two more years to go. I can’t wait to see you grow even more and to be a part of your journey in this lifetime. I already know I’ll be there for all the big moments—especially your wedding (obviously). I guess I should start practicing for the dance break now. Happy 21st birthday, Here’s to many more trips, parties, late-night calls, laughter, and all the chaos and joy life has waiting for us. I hope I meet you in every lifetime. You are genuinely the best. I love you so much. Always, Ridhanya"
  },
  "7517": {
    day: 17,
    title: "Day 17 ✦ Special Message 7",
    message:
      "Dear Saggi, HAPPY 21ST BIRTHDAYY SAGGI!!🥳🎉🎊🍺🥂 You are officially an adult adult meaning...YOU CAN START DRINKING🤭🤭 (yayy, not that I rly care but hehe yeah) I actually can't believe you'r this old, it feels very surreal :)) Time has been going by really fast and we just keep growing older and older🥲 I dont think I say this enough, actually I dont even know if I say it but I am so grateful to have you as my older sister!! You are such a stupid, kind, funny, and beautiful person (ik this is cringey but wtvv🙃🙃) Thank you for always bering there for me through my bad and good days. Just spending a little time with you or a hug from you makes me feel like the world is not so bad and I have someone to rely on. I dont know if you know but you really make me happy saggi and throughout my 16 years on this earth, my most genuine laughs and smiles were with youu hehe. You are a really different species (in a good wayy ofcc) but I guess I ended up liking your kind very much!! Im sorrrry for upsetting you and making you mad in some ways, I dont mean too, but obvi I am your younger sister so ofcc Im gonna annoy youu 😝😝(LMAO im jkk) BUT I LOVE YOU SO SO SOO MUCH SAGGI AND hehe currently you will always be my number one favorite person in the whole entire world🙃🙃🫠 From, Vainu :))"
  },
  "4818": { day: 18, title: "Day 18 ✦ Gratitude note", message: "Thank you for being you — sweet, loyal, thoughtful, chill, and amazing. You’ve brought so much goodness into my life." },
  "7819": { day: 19, title: "Day 19 ✦ Keep choosing yourself", message: "Choose yourself more. Protect your peace. You don’t have to earn rest, love, or good things — you deserve them." },
  "4420": {
    day: 20,
    title: "Day 20 ✦ Special Message 8 ~ Ma",
    message:
      "Hi saggi, I love you, you are a bundle of joy and a good friend to me.  I love your craziness and anger (no, that is a lie 😀).  Saggi not everyone are sharp like you, so if anyone asks to explain again please do it, especially me 😂.  I know you are working hard, try your best, even if you fail, it is ok, cry a little bit, and focus on what to do next, which you are doing.  Keep in my mind no matter what I will be there for you always even though I am not good at problem solving, but will be there for you to lean on.  I am too cringy na 🤪.  You are my sunshine, bin tere Kya hei jina, and you are my azhi muthu (hope you remember these 🤣). Have fun and be happy my baby girl."
  },
  "2126": {
    day: 21,
    title: "Day 21 ✦ HAPPY 21ST BIRTHDAY!",
    message:
      "HAPPY 21ST BIRTHDAY Saggi!!! 🎉💖 You are one of the sweetest, most honest, most loyal people I know — and I’m so lucky to call you my bestie. I hope you have enjoyed your letters so far! May this year bring you big dreams, soft days, and people who love you the way you deserve. Let’s celebrate you like CRAZY 🥳 IDK when you opened this letter, probably not in the morning, cause I plan on surprising you, hopefully it goes as planned and you don't forget to open this by the end of the day. I hope you had a great time so far, hope you have a good rest of your weekend and year sweetheart. You deserve the best of the world! Here's to many more days filled with love, peace, happiness, health, and frindship!"
  }
};

// ====== HELPERS ======
function todayKey() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

// ====== DAILY LOCK ======
function isLockedToday() {
  return localStorage.getItem(STORAGE_KEY_DATE) === todayKey();
}
function lockForToday(code) {
  localStorage.setItem(STORAGE_KEY_DATE, todayKey());
  localStorage.setItem(STORAGE_KEY_CODE, code);
}
function updateLockStatus() {
  const lastDate = localStorage.getItem(STORAGE_KEY_DATE);
  const lastCode = localStorage.getItem(STORAGE_KEY_CODE);
  const today = todayKey();

  if (!DEV_MODE && lastDate === today && lastCode) {
    lockStatusEl.innerHTML = `Today’s letter was already opened ✦ <strong>${lastCode}</strong> — come back tomorrow 💖`;
  } else if (DEV_MODE) {
    lockStatusEl.textContent = "DEV MODE ✦ testing is on.";
  } else {
    lockStatusEl.textContent = "Ready ✦ you can open one letter today.";
  }
}

// ====== ARCHIVE ======
function getArchive() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ARCHIVE);
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}
function setArchive(arr) {
  localStorage.setItem(STORAGE_KEY_ARCHIVE, JSON.stringify(arr));
}
function addToArchive(code) {
  const archive = getArchive();
  if (!archive.includes(code)) {
    archive.push(code);
    setArchive(archive);
  }
}
function renderArchive() {
  const archive = getArchive();
  archiveListEl.innerHTML = "";

  const unlockedInOrder = CODE_ORDER.filter((c) => archive.includes(c));

  if (unlockedInOrder.length === 0) {
    archiveListEl.innerHTML = `<p class="muted small">No letters yet — your first one will appear here ✦</p>`;
    return;
  }

  for (const code of unlockedInOrder) {
    const entry = MESSAGES[code];
    if (!entry) continue;

    const item = document.createElement("div");
    item.className = "archive-item";

    const left = document.createElement("div");
    left.className = "left";

    const title = document.createElement("div");
    title.className = "title";
    title.textContent = entry.title;

    const codeEl = document.createElement("div");
    codeEl.className = "code";
    codeEl.textContent = `CODE ${code}`;

    left.appendChild(title);
    left.appendChild(codeEl);

    const btn = document.createElement("button");
    btn.className = "open-btn";
    btn.type = "button";
    btn.textContent = "Open";
    btn.addEventListener("click", () => openLetterScreen(code, false));

    item.appendChild(left);
    item.appendChild(btn);

    archiveListEl.appendChild(item);
  }
}

function applyPreUnlock() {
  const archive = getArchive();
  if (archive.length === 0) {
    setArchive([...PRE_UNLOCK_CODES]);
  } else {
    for (const c of PRE_UNLOCK_CODES) addToArchive(c);
  }
}

// ====== PROGRESS UI ======
function renderProgress() {
  const archive = getArchive();
  const unlocked = CODE_ORDER.filter((c) => archive.includes(c)).length;

  unlockedCountEl.textContent = String(unlocked);
  const pct = Math.round((unlocked / 21) * 100);
  progressFillEl.style.width = `${pct}%`;
  progressBarEl.setAttribute("aria-valuenow", String(unlocked));

  progressDotsEl.innerHTML = "";
  for (let i = 0; i < 21; i++) {
    const d = document.createElement("div");
    d.className = "pdot" + (i < unlocked ? " on" : "");
    progressDotsEl.appendChild(d);
  }
}

// ====== CONFETTI + INK RIPPLE ======
const CONFETTI_EMOJIS = ["🍫", "🥭", "🍮", "✨", "✦"];
function burstConfetti() {
  confettiLayer.innerHTML = "";
  const count = 18;

  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    el.className = "confetti";
    el.textContent =
      CONFETTI_EMOJIS[Math.floor(Math.random() * CONFETTI_EMOJIS.length)];
    el.style.left = `${Math.random() * 100}%`;
    el.style.animationDuration = `${1500 + Math.random() * 1200}ms`;
    el.style.fontSize = `${16 + Math.random() * 10}px`;
    confettiLayer.appendChild(el);
    setTimeout(() => el.remove(), 3200);
  }
}

function inkBlotRipple(x, y) {
  if (!inkLayer) return;
  const blot = document.createElement("div");
  blot.className = "ink-blot";
  blot.style.left = `${x}px`;
  blot.style.top = `${y}px`;
  inkLayer.appendChild(blot);
  setTimeout(() => blot.remove(), 1300);
}

// ====== SPOTLIGHT FOLLOW ======
function moveSpotlightTo(el) {
  if (!spotlightEl || !el) return;
  const rect = el.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  spotlightEl.style.setProperty("--sx", `${x}px`);
  spotlightEl.style.setProperty("--sy", `${y}px`);
}

// ====== UI ELEMENTS ======
const codeInput = document.getElementById("codeInput");
const unlockBtn = document.getElementById("unlockBtn");
const errorEl = document.getElementById("error");
const daysLeftEl = document.getElementById("daysLeft");
const lockStatusEl = document.getElementById("lockStatus");

// screens
const screenHome = document.getElementById("screenHome");
const screenLetter = document.getElementById("screenLetter");
const backBtn = document.getElementById("backBtn");

// letter
const letterTitleEl = document.getElementById("letterTitle");
const letterCodeEl = document.getElementById("letterCode");
const letterMessageEl = document.getElementById("letterMessage");
const letterBoxEl = document.querySelector(".letter");

// envelope + spotlight
const envelopeEl = document.getElementById("envelope");
const envelopeStatusEl = document.getElementById("envelopeStatus");
const spotlightEl = document.getElementById("spotlight");

// archive
const archiveListEl = document.getElementById("archiveList");

// progress
const unlockedCountEl = document.getElementById("unlockedCount");
const progressFillEl = document.getElementById("progressFill");
const progressDotsEl = document.getElementById("progressDots");
const progressBarEl = document.querySelector(".progress-bar");

// keypad
const keypadEl = document.querySelector(".keypad");

// layers
const inkLayer = document.getElementById("inkLayer");
const confettiLayer = document.getElementById("confettiLayer");

// ====== UI HELPERS ======
function setError(msg) {
  if (!msg) {
    errorEl.style.display = "none";
    errorEl.textContent = "";
    return;
  }
  errorEl.textContent = msg;
  errorEl.style.display = "block";
}

function showHomeScreen() {
  screenLetter.classList.add("hidden");
  screenHome.classList.remove("hidden");
  setError("");
  codeInput.value = ""; // no preview
  updateLockStatus();
}

function showLetterScreen() {
  screenHome.classList.add("hidden");
  screenLetter.classList.remove("hidden");
  setError("");
}

// ====== LETTER OPEN (unfold + spotlight + slow) ======
async function openLetterScreen(code, withEffects = true) {
  const entry = MESSAGES[code];
  if (!entry) return;

  letterTitleEl.textContent = entry.title;
  letterCodeEl.textContent = code;

  // Keep your current behavior: plain text with \n breaks
  letterMessageEl.textContent = entry.message;

  // reset states
  letterBoxEl.classList.remove("enter");
  envelopeEl.classList.remove("open", "hide", "already-open");

  showLetterScreen();

  // move spotlight to envelope first
  moveSpotlightTo(envelopeEl);

  if (withEffects) {
    // FIRST-TIME OPEN ✨
    requestAnimationFrame(() => {
      envelopeEl.classList.add("open");
    });

    setTimeout(() => {
      envelopeEl.classList.add("hide");
      letterBoxEl.classList.add("enter");
      moveSpotlightTo(letterBoxEl);
    }, 980);

    burstConfetti();
  } else {
    // ALREADY OPENED 💖
    envelopeEl.classList.add("already-open");

    setTimeout(() => {
      letterBoxEl.classList.add("enter");
      moveSpotlightTo(letterBoxEl);
    }, 120);
  }
}

// ====== UNLOCK ======
function unlock() {
  const code = (codeInput.value || "").trim();
  setError("");

  if (!code) {
    setError("Enter your 4-digit code ✦");
    return;
  }

  if (!DEV_MODE && isLockedToday()) {
    updateLockStatus();
    setError("One per day ✦ come back tomorrow 💖");
    return;
  }

  const entry = MESSAGES[code];
  if (!entry) {
    setError("That code doesn’t match. Try again ✦");
    return;
  }

  if (!DEV_MODE) lockForToday(code);
  addToArchive(code);

  renderArchive();
  renderProgress();
  updateLockStatus();

  const r = unlockBtn.getBoundingClientRect();
  inkBlotRipple(r.left + r.width / 2, r.top + r.height / 2);

  openLetterScreen(code, true);
}

// ====== KEYPAD ======
function attachKeypad() {
  if (!keypadEl) return;
  keypadEl.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    const k = btn.getAttribute("data-k");
    const act = btn.getAttribute("data-act");

    if (k) {
      codeInput.value = (codeInput.value + k).slice(0, 8);
      codeInput.focus();
      return;
    }
    if (act === "back") {
      codeInput.value = codeInput.value.slice(0, -1);
      codeInput.focus();
      return;
    }
    if (act === "clear") {
      codeInput.value = "";
      codeInput.focus();
      return;
    }
  });
}

// events
unlockBtn.addEventListener("click", unlock);
codeInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") unlock();
});
backBtn.addEventListener("click", showHomeScreen);

// keep spotlight centered if window resizes while letter is open
window.addEventListener("resize", () => {
  if (!screenLetter.classList.contains("hidden")) {
    moveSpotlightTo(letterBoxEl);
  }
});

// ====== COUNTDOWN ======
function updateCountdown() {
  const now = new Date();
  const ms = BIRTHDAY.getTime() - now.getTime();
  const days = Math.ceil(ms / (1000 * 60 * 60 * 24));
  daysLeftEl.textContent = String(Math.max(days, 0));
}
updateCountdown();
setInterval(updateCountdown, 60 * 1000);

// ====== OPENING SCREEN (Curtain) ======
const openingEl = document.getElementById("opening");
const enterBtn = document.getElementById("enterBtn");

function openTheCurtains() {
  if (!openingEl) return;
  openingEl.classList.add("open");

  setTimeout(() => {
    openingEl.classList.add("hidden");
  }, 1200);
}

if (enterBtn) {
  enterBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    openTheCurtains();
  });
}

// backup: click anywhere on the opening screen
if (openingEl) {
  openingEl.addEventListener("click", () => openTheCurtains());
}


// ====== INIT ======
applyPreUnlock();
renderArchive();
renderProgress();
updateLockStatus();
attachKeypad();
showHomeScreen();
