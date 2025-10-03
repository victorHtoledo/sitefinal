// Versão simplificada e funcional do script

// Sistema de Senha
const correctPassword = "1234";
let attempts = 0;
const maxAttempts = 3;

// Mostrar modal de senha ao carregar
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('passwordModal').classList.remove('hidden');
    document.getElementById('passwordInput').focus();
});

// Função para verificar senha
function checkPassword() {
    const inputPassword = document.getElementById('passwordInput').value;
    const errorElement = document.getElementById('passwordError');
    
    if (inputPassword === correctPassword) {
        document.getElementById('passwordModal').classList.add('hidden');
        initializePage();
    } else {
        attempts++;
        if (attempts >= maxAttempts) {
            document.getElementById('passwordModal').classList.add('hidden');
            document.getElementById('accessDenied').classList.remove('hidden');
        } else {
            errorElement.textContent = `Senha incorreta! Tentativas restantes: ${maxAttempts - attempts}`;
            errorElement.classList.remove('hidden');
            document.getElementById('passwordInput').value = '';
            document.getElementById('passwordInput').focus();
        }
    }
}

// Event listeners para senha
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitPassword').addEventListener('click', checkPassword);
    document.getElementById('passwordInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });
    
    document.getElementById('tryAgainBtn').addEventListener('click', function() {
        attempts = 0;
        document.getElementById('accessDenied').classList.add('hidden');
        document.getElementById('passwordModal').classList.remove('hidden');
        document.getElementById('passwordError').classList.add('hidden');
        document.getElementById('passwordInput').value = '';
        document.getElementById('passwordInput').focus();
    });
});

// Função para criar corações
function createHeart() {
    const container = document.getElementById('heart-container');
    if (!container) return;
    
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '♥';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 2 + 8}s`;
    container.appendChild(heart);
    
    setTimeout(() => {
        if (heart.parentNode) {
            heart.remove();
        }
    }, 10000);
}

// Mensagens de amor
const loveMessages = [
    "Você é a razão do meu sorriso todos os dias 😊",
    "Cada dia ao seu lado é uma nova aventura de amor ❤️",
    "Você faz meu coração bater mais forte 💓",
    "Meu amor por você cresce a cada amanhecer 🌅",
    "Você é meu lugar seguro neste mundo 🏠",
    "Seus olhos são as estrelas que iluminam minha vida ✨",
    "Você é a melodia mais doce do meu coração 🎵",
    "Cada momento com você é um presente precioso 🎁",
    "Você é minha inspiração diária 🌈",
    "Seu amor é minha força para enfrentar qualquer dia 💪"
];

function getDailyMessage(dayNumber) {
    const messageIndex = dayNumber % loveMessages.length;
    return loveMessages[messageIndex];
}

function updateDaysTogether() {
    const startDate = new Date("2025-08-15T15:15:00");
    const today = new Date();
    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
    
    const daysElement = document.getElementById("daysTogether");
    if (daysElement) {
        daysElement.textContent = diffDays;
    }
    
    const dailyMessage = getDailyMessage(diffDays);
    const messageElement = document.getElementById("dailyMessage");
    if (messageElement) {
        messageElement.textContent = dailyMessage;
    }
}

// Controle de tema
let isAuroraMode = false;



// Função de efeito surpresa simples
function createSurpriseEffect() {
    // Criar explosão de corações
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            createHeart();
        }, i * 100);
    }
    
    // Mostrar mensagem especial
    const messages = [
        "Você é incrível! 💖",
        "Meu coração bate por você! 💓",
        "Você ilumina meus dias! ✨",
        "Sou grato por ter você! 🙏",
        "Você é meu mundo! 🌍"
    ];
    
    const message = messages[Math.floor(Math.random() * messages.length)];
    
    const messageEl = document.createElement('div');
    messageEl.textContent = message;
    messageEl.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 2rem;
        font-weight: bold;
        color: #ec4899;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        z-index: 1001;
        pointer-events: none;
        animation: fadeInOut 3s ease-out forwards;
    `;
    
    document.body.appendChild(messageEl);
    
    setTimeout(() => {
        if (messageEl.parentNode) {
            messageEl.remove();
        }
    }, 3000);
}

// Adicionar CSS para animação
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInOut {
        0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
        }
        50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.2);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(1);
        }
    }
`;
document.head.appendChild(style);

// Função para inicializar a página
function initializePage() {
    // Criar estrelas
    const starsContainer = document.getElementById("stars-container");
    if (starsContainer) {
        const numStars = 100;
        for (let i = 0; i < numStars; i++) {
            let star = document.createElement("div");
            star.className = "star";
            star.style.top = Math.random() * 100 + "vh";
            star.style.left = Math.random() * 100 + "vw";
            star.style.animationDuration = (Math.random() * 3 + 2) + "s";
            starsContainer.appendChild(star);
        }
    }
    
    // Iniciar animações de corações
    setInterval(createHeart, 400);
    
    // Atualizar contador de dias
    updateDaysTogether();
    setInterval(updateDaysTogether, 1000 * 60 * 60);
    
    // Adicionar event listeners
    addEventListeners();
}

// Função para alternar aurora
function toggleAurora() {
    const aurora = document.getElementById('aurora');
    const button = document.getElementById('auroraToggle');
    
    if (!isAuroraMode) {
        aurora.classList.add('active');
        button.innerHTML = '🌙 Desativar Aurora';
        isAuroraMode = true;
    } else {
        aurora.classList.remove('active');
        button.innerHTML = '🌌 Aurora Mágica';
        isAuroraMode = false;
    }
}

function addEventListeners() {
    // Botão revelar mensagem
    const revealBtn = document.getElementById('revealButton');
    if (revealBtn) {
        revealBtn.addEventListener('click', function() {
            const hiddenMessage = document.getElementById('hiddenMessage');
            if (hiddenMessage) {
                hiddenMessage.classList.remove('hidden');
                this.style.display = 'none';
            }
        });
    }
    
    // Botão secreto
    const secretBtn = document.getElementById('secretButton');
    if (secretBtn) {
        secretBtn.addEventListener('click', function() {
            const modal = document.getElementById('surpriseModal');
            if (modal) {
                modal.classList.remove('hidden');
            }
        });
    }
    
    // Fechar modal secreto
    const closeModalBtn = document.getElementById('closeModal');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            const modal = document.getElementById('surpriseModal');
            if (modal) {
                modal.classList.add('hidden');
            }
        });
    }
    
    // Álbum de fotos
    const albumBtn = document.getElementById('openAlbumButton');
    if (albumBtn) {
        albumBtn.addEventListener('click', function() {
            const modal = document.getElementById('albumModal');
            if (modal) {
                modal.classList.remove('hidden');
            }
        });
    }
    
    const closeAlbumBtn = document.getElementById('closeAlbum');
    if (closeAlbumBtn) {
        closeAlbumBtn.addEventListener('click', function() {
            const modal = document.getElementById('albumModal');
            if (modal) {
                modal.classList.add('hidden');
            }
        });
    }
    

    

    
    // Botão aurora
    const auroraBtn = document.getElementById('auroraToggle');
    if (auroraBtn) {
        auroraBtn.addEventListener('click', toggleAurora);
    }
    
    // Modal do clima
    const weatherBtn = document.getElementById('weatherButton');
    if (weatherBtn) {
        weatherBtn.addEventListener('click', function() {
            const modal = document.getElementById('weatherModal');
            if (modal) {
                modal.classList.remove('hidden');
            }
        });
    }
    
    const closeWeatherBtn = document.getElementById('closeWeatherModal');
    if (closeWeatherBtn) {
        closeWeatherBtn.addEventListener('click', function() {
            const modal = document.getElementById('weatherModal');
            if (modal) {
                modal.classList.add('hidden');
            }
        });
    }
}