/* ==========================================================================
   GAME CONFIGURATION & PUZZLES DEFINITION
   ========================================================================== */
const PLAYERS = {
    Frans: { name: "Frans", age: "5 år", emoji: "👦", class: "boy" },
    Alma: { name: "Alma", age: "7 år", emoji: "👧", class: "girl alma" },
    Lykke: { name: "Lykke", age: "8 år", emoji: "👧", class: "girl lykke" },
    Tim: { name: "Tim", age: "8 år", emoji: "👦", class: "boy tim" }
};

const PUZZLES = {
    1: {
        player: PLAYERS.Frans,
        title: "Uppdrag 1: Skogens lilla boll",
        question: "Jag bor i skogen och har massor av vassa taggar på ryggen. Om jag blir rädd rullar jag ihop mig till en liten boll. Vad är jag?",
        hint: "Mitt namn börjar på bokstaven I. Jag älskar att äta maskar och kryp!",
        answers: ["igelkott", "igelkotten", "enigelkott"],
        customUI: null,
        options: [
            { text: "Igelkott", emoji: "🦔" },
            { text: "Räv", emoji: "🦊" },
            { text: "Kanin", emoji: "🐇" }
        ]
    },
    2: {
        player: PLAYERS.Alma,
        title: "Uppdrag 2: Äppelmatte",
        question: "Du har 12 guldmynt i en påse. Du ger 4 mynt till Frans och 3 mynt till Lykke. Hur många guldmynt har du kvar i din påse?",
        hint: "Gör så här: Ta 12 och minska med 4 (då får du 8). Minska sedan det talet med 3 till!",
        answers: ["5", "fem"],
        customUI: null
    },
    3: {
        player: PLAYERS.Lykke,
        title: "Uppdrag 3: Visarens gåta",
        question: "Jag går och går men kommer aldrig till dörren. Jag har ett ansikte och två visare, men inga ögon eller händer. Vad är jag?",
        hint: "Jag visar vad klockan är och kan sitta på din handled eller hänga på väggen.",
        answers: ["klocka", "klockan", "enklocka"],
        customUI: null
    },
    4: {
        player: PLAYERS.Tim,
        title: "Uppdrag 4: Spindelmatte",
        question: "En spindel har 8 ben. Hur många ben har 3 spindlar tillsammans?",
        hint: "Räkna 8 + 8 + 8, eller tänk: vad blir 3 gånger 8?",
        answers: ["24", "tjugofyra"],
        customUI: null
    },
    5: {
        player: PLAYERS.Frans,
        title: "Uppdrag 5: Hoppiga kompisen",
        question: "Jag är grön, gillar att hoppa och bor i eller nära dammar. Jag säger ibland 'kvack' eller 'ko-ack'. Vad är jag?",
        hint: "Mitt namn börjar på bokstaven G. Jag var en prins i en känd saga!",
        answers: ["groda", "grodan", "engroda"],
        customUI: null,
        options: [
            { text: "Groda", emoji: "🐸" },
            { text: "Fisk", emoji: "🐟" },
            { text: "Anka", emoji: "🦆" }
        ]
    },
    6: {
        player: PLAYERS.Alma,
        title: "Uppdrag 6: Bokstavsröran",
        question: "Kasta om bokstäverna i ordet nedan för att hitta ett djur med långa öron som äter morötter och skuttar runt.",
        hint: "Börjar på K och slutar på N. Ordet har 5 bokstäver.",
        answers: ["kanin", "kaninen", "enkanin"],
        customUI: `
            <div class="scrambled-box">
                <span class="scrambled-letter animate-float">N</span>
                <span class="scrambled-letter animate-float" style="animation-delay: 0.2s">I</span>
                <span class="scrambled-letter animate-float" style="animation-delay: 0.4s">N</span>
                <span class="scrambled-letter animate-float" style="animation-delay: 0.6s">A</span>
                <span class="scrambled-letter animate-float" style="animation-delay: 0.8s">K</span>
            </div>
        `
    },
    7: {
        player: PLAYERS.Lykke,
        title: "Uppdrag 7: Piratmatten",
        question: "Ett piratskepp har 4 segel. Varje segel har 3 röda ränder målade på sig. Hur många röda ränder finns det sammanlagt på alla segel?",
        hint: "Räkna 3 + 3 + 3 + 3, eller tänk: vad blir 4 gånger 3?",
        answers: ["12", "tolv"],
        customUI: null
    },
    8: {
        player: PLAYERS.Tim,
        title: "Uppdrag 8: Nyckelgåtan",
        question: "Jag har ett huvud men ingen kropp. Jag har ett skägg men inget hår. Jag kan öppna stängda dörrar. Vad är jag?",
        hint: "Du sätter mig i ett nyckelhål och vrider om.",
        answers: ["nyckel", "nyckeln", "ennyckel"],
        customUI: null
    },
    9: {
        player: PLAYERS.Frans,
        title: "Uppdrag 9: Havets jätte",
        question: "Jag bor i havet, är jättestor (störst i hela världen!) och sprutar vatten från ett hål på mitt huvud. Vad är jag?",
        hint: "Mitt namn börjar på V och rimmar på ordet skal.",
        answers: ["val", "valen", "enval"],
        customUI: null,
        options: [
            { text: "Val", emoji: "🐳" },
            { text: "Bläckfisk", emoji: "🐙" },
            { text: "Krabba", emoji: "🦀" }
        ]
    },
    10: {
        player: PLAYERS.Alma,
        title: "Uppdrag 10: Ögon-gåtan",
        question: "Vem har ett öga men kan inte se någonting alls?",
        hint: "Du använder mig tillsammans med en tråd när du ska sy eller laga kläder.",
        answers: ["nål", "nålen", "ennål"],
        customUI: null
    },
    11: {
        player: PLAYERS.Lykke,
        title: "Uppdrag 11: Skogens lösenord",
        question: "Hitta det hemliga lösenordet genom att översätta tecknen med hjälp av kodboken under. Skriv sedan in ordet!",
        hint: "Det är namnet på ett träd med vit bark där skatten ligger gömd! Det börjar på B och slutar på N.",
        answers: ["björken", "björk"],
        customUI: `
            <div class="cipher-book-container">
                <div class="secret-code-display animate-pulse">
                    🐻 🌟 🍎 💎 🎈 👑 🍉
                </div>
                <div class="cipher-grid">
                    <div class="cipher-card"><span class="cipher-symbol">💎</span> = <span class="cipher-letter">R</span></div>
                    <div class="cipher-card"><span class="cipher-symbol">🐻</span> = <span class="cipher-letter">B</span></div>
                    <div class="cipher-card"><span class="cipher-symbol">🍉</span> = <span class="cipher-letter">N</span></div>
                    <div class="cipher-card"><span class="cipher-symbol">🌟</span> = <span class="cipher-letter">J</span></div>
                    <div class="cipher-card"><span class="cipher-symbol">👑</span> = <span class="cipher-letter">E</span></div>
                    <div class="cipher-card"><span class="cipher-symbol">🍎</span> = <span class="cipher-letter">Ö</span></div>
                    <div class="cipher-card"><span class="cipher-symbol">🎈</span> = <span class="cipher-letter">K</span></div>
                </div>
            </div>
        `
    },
    12: {
        player: PLAYERS.Tim,
        title: "Uppdrag 12: Det hemliga chiffret",
        question: "Öppna sista låset genom att översätta tecknen i den hemliga koden med hjälp av kodboken under. Skriv sedan in ordet för att avslöja skatten!",
        hint: "Ordet bildar det ni letar efter just nu! Det börjar på S och slutar på N.",
        answers: ["skatten", "skatt"],
        customUI: `
            <div class="cipher-book-container">
                <div class="secret-code-display animate-pulse">
                    🔑 💎 🍃 🔥 🔥 👑 🍉
                </div>
                <div class="cipher-grid">
                    <div class="cipher-card"><span class="cipher-symbol">🍃</span> = <span class="cipher-letter">A</span></div>
                    <div class="cipher-card"><span class="cipher-symbol">👑</span> = <span class="cipher-letter">E</span></div>
                    <div class="cipher-card"><span class="cipher-symbol">🔑</span> = <span class="cipher-letter">S</span></div>
                    <div class="cipher-card"><span class="cipher-symbol">🍉</span> = <span class="cipher-letter">N</span></div>
                    <div class="cipher-card"><span class="cipher-symbol">💎</span> = <span class="cipher-letter">K</span></div>
                    <div class="cipher-card"><span class="cipher-symbol">🔥</span> = <span class="cipher-letter">T</span></div>
                </div>
            </div>
        `
    }
};

/* ==========================================================================
   GAME STATE VARIABLES
   ========================================================================== */
let gameState = {
    currentStage: 0, // 0 = Intro, 1-12 = Tasks, 13 = Victory
    completedStages: [], // Array of solved tasks, e.g. [1, 2, 3...]
    isTransitioning: false,
    soundEnabled: false
};

/* ==========================================================================
   AUDIO SYNTHESIZER (Web Audio API)
   ========================================================================== */
let audioCtx = null;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playSynthTone(frequency, type, duration, startTimeOffset = 0) {
    if (!gameState.soundEnabled) return;
    initAudio();
    
    // Resume context if suspended (browser security restrictions)
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, audioCtx.currentTime + startTimeOffset);

    gain.gain.setValueAtTime(0.15, audioCtx.currentTime + startTimeOffset);
    // Smooth fade out
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + startTimeOffset + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(audioCtx.currentTime + startTimeOffset);
    osc.stop(audioCtx.currentTime + startTimeOffset + duration);
}

const AudioSFX = {
    click: () => {
        playSynthTone(600, 'sine', 0.1);
    },
    success: () => {
        playSynthTone(523.25, 'sine', 0.15); // C5
        playSynthTone(659.25, 'sine', 0.15, 0.1); // E5
        playSynthTone(783.99, 'sine', 0.3, 0.2); // G5
    },
    failure: () => {
        playSynthTone(220, 'sawtooth', 0.4); // Low buzz
        playSynthTone(180, 'sawtooth', 0.4, 0.05);
    },
    victory: () => {
        // Grand fanfare major chord progression
        const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50]; // C4 to C6 major arpeggio
        notes.forEach((freq, idx) => {
            playSynthTone(freq, 'triangle', 0.6, idx * 0.12);
        });
    }
};

/* ==========================================================================
   CONFETTI PARTICLE ENGINE (Canvas)
   ========================================================================== */
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let confettiAnimationId = null;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class ConfettiParticle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -canvas.height - 20;
        this.size = Math.random() * 8 + 6;
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 5 + 4;
        this.color = `hsl(${Math.random() * 360}, 90%, 60%)`;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 4 - 2;
        this.shape = Math.random() > 0.5 ? 'rect' : 'circle';
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;
        
        // Slow down drift slightly
        this.speedX += Math.sin(this.y / 30) * 0.1;
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.fillStyle = this.color;
        
        if (this.shape === 'rect') {
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        } else {
            ctx.beginPath();
            ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    }
}

function startConfetti() {
    particles = [];
    for (let i = 0; i < 150; i++) {
        particles.push(new ConfettiParticle());
    }
    
    if (confettiAnimationId) cancelAnimationFrame(confettiAnimationId);
    animateConfetti();
}

function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    let activeParticles = false;
    particles.forEach(p => {
        p.update();
        p.draw();
        if (p.y < canvas.height + 20) {
            activeParticles = true;
        }
    });

    if (activeParticles) {
        confettiAnimationId = requestAnimationFrame(animateConfetti);
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

/* ==========================================================================
   DOM ELEMENTS
   ========================================================================== */
const screens = {
    intro: document.getElementById('intro-screen'),
    board: document.getElementById('game-board'),
    modal: document.getElementById('puzzle-modal'),
    pass: document.getElementById('pass-screen'),
    victory: document.getElementById('victory-screen')
};

const btns = {
    start: document.getElementById('start-game-btn'),
    closeModal: document.getElementById('close-modal-btn'),
    hint: document.getElementById('hint-btn'),
    nextPlayerConfirm: document.getElementById('next-player-confirmed-btn'),
    playAgain: document.getElementById('play-again-btn')
};

const modalElements = {
    content: document.querySelector('.modal-content'),
    emoji: document.getElementById('puzzle-player-emoji'),
    turnTag: document.getElementById('puzzle-player-turn'),
    title: document.getElementById('puzzle-title'),
    question: document.getElementById('puzzle-question'),
    interactive: document.getElementById('puzzle-interactive-area'),
    form: document.getElementById('puzzle-form'),
    input: document.getElementById('puzzle-input'),
    feedback: document.getElementById('puzzle-feedback'),
    hintText: document.getElementById('hint-text')
};

const passElements = {
    fromEmoji: document.getElementById('pass-from-emoji'),
    fromName: document.getElementById('pass-from-name'),
    toEmoji: document.getElementById('pass-to-emoji'),
    toName: document.getElementById('pass-to-name'),
    toNameWarning: document.getElementById('pass-to-name-warning')
};

/* ==========================================================================
   GAME ENGINE & VIEW MANAGEMENT
   ========================================================================== */

// Sync UI visible states
function showScreen(screenToShow) {
    Object.values(screens).forEach(screen => {
        if (screen === screenToShow) {
            screen.classList.remove('hidden');
        } else if (screen !== screens.modal) {
            // Keep modal logic isolated, don't hide modal unless specified
            screen.classList.add('hidden');
        }
    });
}

function updateActivePlayerBanner(player) {
    const activeEmoji = document.getElementById('active-avatar-emoji');
    const activeName = document.getElementById('active-player-name');
    const banner = document.getElementById('active-player-banner');
    
    activeEmoji.textContent = player.emoji;
    const suffix = player.name.endsWith('s') ? '' : 's';
    activeName.textContent = `${player.name}${suffix} tur!`;
    
    // Style active banner background according to player
    banner.className = `player-banner player-${player.class.replace(' ', '-')}`;
}

// Update Map markers based on progression
function updateMapUI() {
    for (let i = 1; i <= 12; i++) {
        const marker = document.getElementById(`marker-${i}`);
        const statusSpan = marker.querySelector('.marker-status');
        
        marker.classList.remove('locked', 'active', 'completed');
        marker.disabled = true;

        if (gameState.completedStages.includes(i)) {
            // Completed tasks
            marker.classList.add('completed');
            statusSpan.textContent = "✅";
        } else if (i === gameState.currentStage) {
            // Current active task
            marker.classList.add('active');
            statusSpan.textContent = "⭐";
            marker.disabled = false;
        } else {
            // Locked tasks
            marker.classList.add('locked');
            statusSpan.textContent = "🔒";
        }
    }
}

// Set up puzzle inside the Modal
function loadPuzzle(stage) {
    const puzzle = PUZZLES[stage];
    if (!puzzle) return;

    modalElements.emoji.textContent = puzzle.player.emoji;
    const suffix = puzzle.player.name.endsWith('s') ? '' : 's';
    modalElements.turnTag.textContent = `${puzzle.player.name}${suffix} uppdrag (${puzzle.player.age})`;
    modalElements.title.textContent = puzzle.title;
    modalElements.question.textContent = puzzle.question;
    modalElements.input.value = '';
    
    // Reset feedback states
    modalElements.feedback.classList.add('hidden');
    modalElements.feedback.classList.remove('error-active');
    modalElements.content.classList.remove('shake');
    
    // Reset hints
    modalElements.hintText.classList.add('hidden');
    modalElements.hintText.textContent = puzzle.hint;
    btns.hint.classList.remove('hidden');

    // Populate custom area (e.g. Scrambled word lists, option buttons)
    if (puzzle.options) {
        let optionsHTML = '<div class="options-container">';
        puzzle.options.forEach(opt => {
            optionsHTML += `
                <button type="button" class="option-btn" data-answer="${opt.text}">
                    <span class="option-emoji">${opt.emoji}</span>
                    <span class="option-text">${opt.text}</span>
                </button>
            `;
        });
        optionsHTML += '</div>';
        modalElements.interactive.innerHTML = optionsHTML;
        modalElements.interactive.classList.remove('hidden');
        modalElements.form.classList.add('hidden'); // Hide typing form for options

        // Add event listeners to Frans' option buttons
        modalElements.interactive.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const selected = btn.getAttribute('data-answer');
                if (validateAnswer(stage, selected)) {
                    handleCorrectAnswer();
                } else {
                    AudioSFX.failure();
                    btn.classList.add('shake');
                    setTimeout(() => btn.classList.remove('shake'), 500);
                    modalElements.feedback.classList.remove('hidden');
                    modalElements.feedback.classList.add('error-active');
                }
            });
        });
    } else {
        modalElements.form.classList.remove('hidden'); // Unhide typing form
        
        if (puzzle.customUI) {
            modalElements.interactive.innerHTML = puzzle.customUI;
            modalElements.interactive.classList.remove('hidden');
        } else {
            modalElements.interactive.innerHTML = '';
            modalElements.interactive.classList.add('hidden');
        }
    }

    // Set placeholder depending on input type
    if (stage === 2 || stage === 4 || stage === 7) {
        modalElements.input.type = "number";
        modalElements.input.placeholder = "Skriv siffran här...";
    } else {
        modalElements.input.type = "text";
        modalElements.input.placeholder = "Skriv ditt svar här...";
    }

    // Unhide Modal
    screens.modal.classList.remove('hidden');
    if (!puzzle.options) {
        modalElements.input.focus();
    }
}

// Save to localStorage
function saveProgress() {
    localStorage.setItem('skattejakten_progress', JSON.stringify(gameState));
}

// Restore from localStorage
function loadProgress() {
    const saved = localStorage.getItem('skattejakten_progress');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            gameState.currentStage = parsed.currentStage || 0;
            gameState.completedStages = parsed.completedStages || [];
            gameState.soundEnabled = parsed.soundEnabled !== undefined ? parsed.soundEnabled : false;
        } catch (e) {
            console.error("Kunde inte läsa sparad speldata", e);
        }
    }
}

// Check validation of answer
function validateAnswer(stage, rawInput) {
    const cleanInput = rawInput
        .toLowerCase()
        .replace(/[^a-z0-9åäö]/g, '')
        .trim();

    const acceptableAnswers = PUZZLES[stage].answers;
    return acceptableAnswers.includes(cleanInput);
}

// Handle correct answer
function handleCorrectAnswer() {
    AudioSFX.success();
    startConfetti();
    
    // Add active task to completed list
    if (!gameState.completedStages.includes(gameState.currentStage)) {
        gameState.completedStages.push(gameState.currentStage);
    }

    screens.modal.classList.add('hidden');

    const lastCompleted = gameState.currentStage;
    
    if (lastCompleted < 12) {
        // Increment stage and trigger Pass Screen
        gameState.currentStage += 1;
        saveProgress();
        
        // Load the device-pass names
        const fromPlayer = PUZZLES[lastCompleted].player;
        const toPlayer = PUZZLES[gameState.currentStage].player;

        passElements.fromEmoji.textContent = fromPlayer.emoji;
        passElements.fromName.textContent = fromPlayer.name;
        passElements.toEmoji.textContent = toPlayer.emoji;
        passElements.toName.textContent = toPlayer.name;
        passElements.toNameWarning.textContent = toPlayer.name;

        // Animate/Bounce elements
        setTimeout(() => {
            showScreen(screens.pass);
        }, 300);
    } else {
        // Victory!
        gameState.currentStage = 13;
        saveProgress();
        setTimeout(() => {
            AudioSFX.victory();
            showScreen(screens.victory);
        }, 500);
    }
}

// Reset Game Engine
function resetGame() {
    localStorage.removeItem('skattejakten_progress');
    gameState.currentStage = 0;
    gameState.completedStages = [];
    saveProgress();
    showScreen(screens.intro);
}

/* ==========================================================================
   EVENT LISTENERS & BINDINGS
   ========================================================================== */

// Intro Screen Start Click
btns.start.addEventListener('click', () => {
    AudioSFX.click();
    gameState.currentStage = 1;
    saveProgress();
    
    updateMapUI();
    updateActivePlayerBanner(PUZZLES[gameState.currentStage].player);
    showScreen(screens.board);
});

// Restart button removed

// Sound toggle listener removed

// Map Markers trigger puzzles
document.querySelectorAll('.map-marker').forEach(marker => {
    marker.addEventListener('click', (e) => {
        AudioSFX.click();
        const stageNum = parseInt(marker.getAttribute('data-task'));
        if (stageNum === gameState.currentStage) {
            loadPuzzle(stageNum);
        }
    });
});

// Close Modal button
btns.closeModal.addEventListener('click', () => {
    AudioSFX.click();
    screens.modal.classList.add('hidden');
});

// Hint toggler
btns.hint.addEventListener('click', () => {
    AudioSFX.click();
    modalElements.hintText.classList.toggle('hidden');
});

// Submit Form solver
modalElements.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = modalElements.input.value;
    
    if (validateAnswer(gameState.currentStage, userInput)) {
        handleCorrectAnswer();
    } else {
        // Shake modal and play failure buzz
        AudioSFX.failure();
        modalElements.content.classList.remove('shake');
        void modalElements.content.offsetWidth; // Trigger reflow to restart animation
        modalElements.content.classList.add('shake');
        
        modalElements.feedback.classList.remove('hidden');
        modalElements.feedback.classList.add('error-active');
    }
});

// Pass device screen next player click confirmation
btns.nextPlayerConfirm.addEventListener('click', () => {
    AudioSFX.click();
    
    // Update map board and active banner to represent the new player
    updateMapUI();
    updateActivePlayerBanner(PUZZLES[gameState.currentStage].player);
    showScreen(screens.board);
});

// Play Again at victory screen reset trigger
btns.playAgain.addEventListener('click', () => {
    AudioSFX.click();
    resetGame();
});

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
window.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    
    if (gameState.currentStage === 0) {
        showScreen(screens.intro);
    } else if (gameState.currentStage === 13) {
        showScreen(screens.victory);
    } else {
        updateMapUI();
        updateActivePlayerBanner(PUZZLES[gameState.currentStage].player);
        showScreen(screens.board);
    }
});
