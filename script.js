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

// Função para criar corações
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '♥';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 2 + 8}s`;
    document.getElementById('heart-container').appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 250);

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

// Controle de tema
let isSunriseMode = false;
let leafInterval;

// Função para criar folhas
function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    const leaves = ['🍂', '🍃', '🍁', '🍀'];
    leaf.textContent = leaves[Math.floor(Math.random() * leaves.length)];
    leaf.style.left = `${Math.random() * 100}vw`;
    leaf.style.animationDuration = `${Math.random() * 3 + 6}s`;
    leaf.style.color = `hsl(${Math.random() * 60 + 15}, 70%, 50%)`; // Tons de outono
    document.getElementById('leaves-container').appendChild(leaf);
    setTimeout(() => {
        leaf.remove();
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

// Event listener para tema
document.getElementById('themeToggle').addEventListener('click', toggleTheme);

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

    // Atualizar contador de dias
    updateDaysTogether();
    setInterval(updateDaysTogether, 1000 * 60 * 60);
}

// Focar no campo de senha quando a página carregar
setTimeout(() => {
    document.getElementById('passwordInput').focus();
}, 100);