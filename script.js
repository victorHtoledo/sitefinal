// Event listeners para modais
document.getElementById('secretButton').addEventListener('click', function () {
    document.getElementById('surpriseModal').classList.remove('hidden');
});

document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('surpriseModal').classList.add('hidden');
});

document.getElementById('revealButton').addEventListener('click', function () {
    document.getElementById('hiddenMessage').classList.remove('hidden');
    this.style.display = 'none';
});

// Função para criar corações melhorada
function createHeart() {
    const container = document.getElementById('heart-container');
    if (!container) return;
    
    const heart = document.createElement('div');
    heart.classList.add('heart');
    const heartSymbols = ['♥', '💖', '💕', '💗', '💓', '💝'];
    heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 2 + 8}s`;
    heart.style.fontSize = `${Math.random() * 1 + 1.5}rem`;
    container.appendChild(heart);
    setTimeout(() => {
        if (heart.parentNode) {
            heart.remove();
        }
    }, 12000);
}

// Função para criar partículas de luz
function createLightParticle() {
    const container = document.getElementById('light-particles-container');
    if (!container) return;
    
    const particle = document.createElement('div');
    particle.classList.add('light-particle');
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.animationDuration = `${Math.random() * 3 + 6}s`;
    container.appendChild(particle);
    setTimeout(() => {
        if (particle.parentNode) {
            particle.remove();
        }
    }, 9000);
}

// Função para criar neve romântica
function createSnow() {
    const container = document.getElementById('snow-container');
    if (!container) return;
    
    const snow = document.createElement('div');
    snow.classList.add('snow');
    const snowSymbols = ['❄', '❅', '❆', '✻', '✼', '❋'];
    snow.textContent = snowSymbols[Math.floor(Math.random() * snowSymbols.length)];
    snow.style.left = `${Math.random() * 100}vw`;
    snow.style.animationDuration = `${Math.random() * 3 + 8}s`;
    snow.style.fontSize = `${Math.random() * 0.5 + 0.8}rem`;
    container.appendChild(snow);
    setTimeout(() => {
        if (snow.parentNode) {
            snow.remove();
        }
    }, 11000);
}

let heartInterval;
let lightInterval;
let snowInterval;

// Inicializar intervalos apenas após a página carregar
function startAnimations() {
    heartInterval = setInterval(createHeart, 300);
    lightInterval = setInterval(createLightParticle, 500);
}

// Event listeners para álbum
document.getElementById('openAlbumButton').addEventListener('click', function () {
    document.getElementById('albumModal').classList.remove('hidden');
});

document.getElementById('closeAlbum').addEventListener('click', function () {
    document.getElementById('albumModal').classList.add('hidden');
});

// Sistema de Senha Melhorado
const correctPassword = "1234";
let attempts = 0;
const maxAttempts = 3;

// Mostrar modal de senha ao carregar
document.getElementById('passwordModal').classList.remove('hidden');

// Função para verificar senha
function checkPassword() {
    const inputPassword = document.getElementById('passwordInput').value;
    const errorElement = document.getElementById('passwordError');
    
    if (inputPassword === correctPassword) {
        // Senha correta - esconder modal e mostrar conteúdo
        document.getElementById('passwordModal').classList.add('hidden');
        initializePage();
    } else {
        // Senha incorreta
        attempts++;
        if (attempts >= maxAttempts) {
            // Máximo de tentativas atingido
            document.getElementById('passwordModal').classList.add('hidden');
            document.getElementById('accessDenied').classList.remove('hidden');
        } else {
            // Mostrar erro e limpar campo
            errorElement.textContent = `Senha incorreta! Tentativas restantes: ${maxAttempts - attempts}`;
            errorElement.classList.remove('hidden');
            document.getElementById('passwordInput').value = '';
            document.getElementById('passwordInput').focus();
        }
    }
}

// Event listeners para senha
document.getElementById('submitPassword').addEventListener('click', checkPassword);
document.getElementById('passwordInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
});

// Botão tentar novamente
document.getElementById('tryAgainBtn').addEventListener('click', function() {
    attempts = 0;
    document.getElementById('accessDenied').classList.add('hidden');
    document.getElementById('passwordModal').classList.remove('hidden');
    document.getElementById('passwordError').classList.add('hidden');
    document.getElementById('passwordInput').value = '';
    document.getElementById('passwordInput').focus();
});

// Array com mensagens carinhosas
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
    "Seu amor é minha força para enfrentar qualquer dia 💪",
    "Você é a pessoa mais especial do universo 🌌",
    "Meu amor, você é minha felicidade completa 😍",
    "Você faz cada dia valer a pena ☀️",
    "Seu sorriso é minha vitamina diária 😄",
    "Você é meu sonho que se tornou realidade 🌙",
    "Cada dia com você é uma nova página de amor 📝",
    "Você é minha paz em meio ao caos 🕊️",
    "Seu amor é o combustível da minha alma ⛽",
    "Você é minha companheira perfeita 👫",
    "Meu coração bate seu nome a cada segundo 💖",
    "Você é minha sorte grande na vida 🍀",
    "Cada dia é mais lindo porque você existe 🌺",
    "Você é minha definição de amor verdadeiro 💕",
    "Seu carinho é meu remédio para tudo 💊",
    "Você é minha estrela-guia ⭐",
    "Meu amor por você é infinito como o universo 🌌",
    "Você é minha razão de viver 🌿",
    "Cada dia com você é uma bênção 🙏",
    "Você é meu tesouro mais precioso 💎",
    "Seu amor é minha maior conquista 🏆"
];

// Função para obter mensagem do dia
function getDailyMessage(dayNumber) {
    // Usa o número do dia para selecionar uma mensagem consistente
    const messageIndex = dayNumber % loveMessages.length;
    return loveMessages[messageIndex];
}

// Função para atualizar o contador de dias juntos
function updateDaysTogether() {
    // Data do início do relacionamento
    const startDate = new Date("2025-08-15T15:15:00");

    // Data atual
    const today = new Date();

    // Diferença entre hoje e a data de início em milissegundos
    const diffTime = today - startDate;

    // Converte a diferença para dias (1 dia = 1000ms * 60s * 60min * 24h)
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;

    // Atualiza o conteúdo do span com o número de dias
    document.getElementById("daysTogether").textContent = diffDays;

    // Atualiza a mensagem diária
    const dailyMessage = getDailyMessage(diffDays);
    document.getElementById("dailyMessage").textContent = dailyMessage;
}

// Controle de tema e efeitos
let isSunriseMode = false;
let isAuroraMode = false;
let isSnowMode = false;
let leafInterval;
let currentTheme = 'night';

// Função para criar folhas
function createLeaf() {
    const container = document.getElementById('leaves-container');
    if (!container) return;
    
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    const leaves = ['🍂', '🍃', '🍁', '🍀'];
    leaf.textContent = leaves[Math.floor(Math.random() * leaves.length)];
    leaf.style.left = `${Math.random() * 100}vw`;
    leaf.style.animationDuration = `${Math.random() * 3 + 6}s`;
    leaf.style.color = `hsl(${Math.random() * 60 + 15}, 70%, 50%)`; // Tons de outono
    container.appendChild(leaf);
    setTimeout(() => {
        if (leaf.parentNode) {
            leaf.remove();
        }
    }, 9000);
}

// Função para alternar tema
function toggleTheme() {
    const body = document.body;
    const starsContainer = document.getElementById('stars-container');
    const themeButton = document.getElementById('themeToggle');
    const heartContainer = document.getElementById('heart-container');
    const leavesContainer = document.getElementById('leaves-container');
    const landscape = document.getElementById('sunrise-landscape');

    if (!isSunriseMode) {
        // Ativar modo nascer do sol
        body.classList.add('sunrise-mode');
        starsContainer.classList.add('sunrise-mode');
        landscape.classList.remove('hidden');
        themeButton.innerHTML = '🌙 Modo Noturno';
        themeButton.className = themeButton.className.replace('bg-orange-500 hover:bg-orange-400', 'bg-indigo-600 hover:bg-indigo-500');
        
        // Trocar corações por folhas
        heartContainer.classList.add('hidden');
        leavesContainer.classList.remove('hidden');
        leafInterval = setInterval(createLeaf, 400);
        
        isSunriseMode = true;
    } else {
        // Voltar ao modo noturno
        body.classList.remove('sunrise-mode');
        starsContainer.classList.remove('sunrise-mode');
        landscape.classList.add('hidden');
        themeButton.innerHTML = '🌅 Nascer do Sol';
        themeButton.className = themeButton.className.replace('bg-indigo-600 hover:bg-indigo-500', 'bg-orange-500 hover:bg-orange-400');
        
        // Voltar aos corações
        heartContainer.classList.remove('hidden');
        leavesContainer.classList.add('hidden');
        clearInterval(leafInterval);
        
        isSunriseMode = false;
    }
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
        button.innerHTML = '🌌 Aurora';
        isAuroraMode = false;
    }
}

// Função para alternar neve
function toggleSnow() {
    const snowContainer = document.getElementById('snow-container');
    const button = document.getElementById('snowToggle');
    
    if (!isSnowMode) {
        snowContainer.classList.remove('hidden');
        snowInterval = setInterval(createSnow, 200);
        button.innerHTML = '☀️ Parar Neve';
        isSnowMode = true;
    } else {
        snowContainer.classList.add('hidden');
        clearInterval(snowInterval);
        button.innerHTML = '❄️ Neve';
        isSnowMode = false;
    }
}

// Função para adicionar todos os event listeners
function addEventListeners() {
    // Event listeners para controles de tema
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    
    const auroraBtn = document.getElementById('auroraToggle');
    if (auroraBtn) {
        auroraBtn.addEventListener('click', toggleAurora);
    }
    
    const snowBtn = document.getElementById('snowToggle');
    if (snowBtn) {
        snowBtn.addEventListener('click', toggleSnow);
    }
    
    // Event listeners para modais
    const musicBtn = document.getElementById('musicButton');
    if (musicBtn) {
        musicBtn.addEventListener('click', function() {
            document.getElementById('musicModal').classList.remove('hidden');
        });
    }
    
    const closeMusicBtn = document.getElementById('closeMusicModal');
    if (closeMusicBtn) {
        closeMusicBtn.addEventListener('click', function() {
            document.getElementById('musicModal').classList.add('hidden');
        });
    }
    
    const surpriseBtn = document.getElementById('surpriseButton');
    if (surpriseBtn) {
        surpriseBtn.addEventListener('click', function() {
            createSurpriseEffect();
        });
    }
    
    const weatherBtn = document.getElementById('weatherButton');
    if (weatherBtn) {
        weatherBtn.addEventListener('click', function() {
            document.getElementById('weatherModal').classList.remove('hidden');
        });
    }
    
    const closeWeatherBtn = document.getElementById('closeWeatherModal');
    if (closeWeatherBtn) {
        closeWeatherBtn.addEventListener('click', function() {
            document.getElementById('weatherModal').classList.add('hidden');
        });
    }
}

// Função de efeito surpresa
function createSurpriseEffect() {
    // Criar explosão de corações
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createHeart();
        }, i * 100);
    }
    
    // Efeito de confete
    createConfetti();
    
    // Mostrar mensagem especial
    showSurpriseMessage();
}

// Função para criar confete
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.zIndex = '1000';
        confetti.style.pointerEvents = 'none';
        confetti.style.animation = `confettiFall ${Math.random() * 2 + 3}s linear forwards`;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Função para mostrar mensagem surpresa
function showSurpriseMessage() {
    const messages = [
        "Você é incrível! 💖",
        "Meu coração bate por você! 💓",
        "Você ilumina meus dias! ✨",
        "Sou grato por ter você! 🙏",
        "Você é meu mundo! 🌍"
    ];
    
    const message = messages[Math.floor(Math.random() * messages.length)];
    
    // Criar elemento de mensagem flutuante
    const messageEl = document.createElement('div');
    messageEl.textContent = message;
    messageEl.style.position = 'fixed';
    messageEl.style.top = '50%';
    messageEl.style.left = '50%';
    messageEl.style.transform = 'translate(-50%, -50%)';
    messageEl.style.fontSize = '2rem';
    messageEl.style.fontWeight = 'bold';
    messageEl.style.color = '#ec4899';
    messageEl.style.textShadow = '2px 2px 4px rgba(0,0,0,0.3)';
    messageEl.style.zIndex = '1001';
    messageEl.style.pointerEvents = 'none';
    messageEl.style.animation = 'surpriseMessage 3s ease-out forwards';
    
    document.body.appendChild(messageEl);
    
    setTimeout(() => {
        messageEl.remove();
    }, 3000);
}

// Adicionar CSS para animações dinâmicas
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(720deg);
        }
    }
    
    @keyframes surpriseMessage {
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

// Função para inicializar a página após senha correta
function initializePage() {
    // Criar estrelas piscando dinamicamente
    const starsContainer = document.getElementById("stars-container");
    const numStars = 150;

    for (let i = 0; i < numStars; i++) {
        let star = document.createElement("div");
        star.className = "star";
        star.style.top = Math.random() * 100 + "vh";
        star.style.left = Math.random() * 100 + "vw";
        star.style.animationDuration = (Math.random() * 3 + 2) + "s";
        starsContainer.appendChild(star);
    }

    // Iniciar animações
    startAnimations();
    
    // Adicionar event listeners
    addEventListeners();
    
    // Atualizar contador de dias
    updateDaysTogether();
    
    // Verificar se a função existe antes de chamar
    if (typeof updateDailyMessageWithEffect === 'function') {
        updateDailyMessageWithEffect();
    }
    
    setInterval(updateDaysTogether, 1000 * 60 * 60);
    
    // Inicializar animações de entrada
    setTimeout(() => {
        if (typeof animateOnScroll === 'function') {
            animateOnScroll();
        }
    }, 500);
}

// Focar no campo de senha quando a página carregar
setTimeout(() => {
    document.getElementById('passwordInput').focus();
}, 100);

// Função para otimizar performance
function optimizeAnimations() {
    // Reduzir animações em dispositivos com baixa performance
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
        // Reduzir frequência de criação de partículas
        if (heartInterval) clearInterval(heartInterval);
        if (lightInterval) clearInterval(lightInterval);
        heartInterval = setInterval(createHeart, 600);
        lightInterval = setInterval(createLightParticle, 1000);
    }
}

// Função para detectar se o usuário prefere animações reduzidas
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Desabilitar algumas animações para usuários que preferem menos movimento
    document.documentElement.style.setProperty('--animation-duration', '0.1s');
}

// Inicializar otimizações
optimizeAnimations();

// Adicionar efeito de digitação à mensagem diária
function typeWriter(element, text, speed = 50) {
    element.textContent = '';
    element.classList.remove('typing-effect');
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            element.classList.add('typing-effect');
        }
    }
    
    type();
}

// Melhorar a função de atualização da mensagem diária
function updateDailyMessageWithEffect() {
    const messageElement = document.getElementById('dailyMessage');
    if (!messageElement) return;
    
    const dayNumber = Math.floor((new Date() - new Date("2025-08-15T15:15:00")) / (1000 * 60 * 60 * 24)) + 1;
    const message = getDailyMessage(dayNumber);
    
    if (typeof typeWriter === 'function') {
        typeWriter(messageElement, message, 30);
    } else {
        messageElement.textContent = message;
    }
}

// Função para criar efeito de entrada suave nos elementos
function animateOnScroll() {
    if (!window.IntersectionObserver) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    const elements = document.querySelectorAll('.timeline-item-content');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Inicializar animações de scroll quando a página estiver pronta
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(animateOnScroll, 1000);
});