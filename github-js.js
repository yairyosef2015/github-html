const messages = [
    "Te amo más cada día ❤️",
    "Eres mi persona favorita 💖",
    "Contigo todo es mejor 💝",
    "Eres mi mayor felicidad 💗"
];

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    document.querySelector('.message-content').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);
}

function showLove() {
    const initialContent = document.querySelector('.initial-content');
    const messageContent = document.querySelector('.message-content');
    const messageElement = document.getElementById('love-message');
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    initialContent.classList.add('hidden');
    messageContent.classList.add('visible');
    messageElement.textContent = randomMessage;

    // Crear corazones flotantes periódicamente
    setInterval(createHeart, 300);
}
