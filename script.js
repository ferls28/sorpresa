const messages = [
  "te amooooooooooo❤",
  "feliz septimo mes-aniversario❤💟",
  "gracias por estar en mi vida💞",
  "eres mi persona favorita💕",
  "mi corazón es tuyo❤",
  "adoro cada momento contigo❤",
  "solo te quiero a ti, a mi lado🥰",
  "en verdad me gustas❤️🥺",
  "Te amo demasiado ❤️🥺", 
  "No necesito a nadie más que a ti 💕", 
  "Eres la mejor novia❤️",
  "Siempre pienso en ti❤️"
];

function createTextBubble() {
  const bubble = document.createElement("div");
  bubble.className = "text-bubble";
  bubble.innerText = messages[Math.floor(Math.random() * messages.length)];

  const left = Math.random() * 80 + 10;
  const top = Math.random() * 80 + 10;

  bubble.style.left = `${left}vw`;
  bubble.style.top = `${top}vh`;

  const container = document.getElementById("bubbles-text");
  container.appendChild(bubble);

  // Remover después de 8 segundos
  setTimeout(() => {
    bubble.remove();
  }, 8000);
}

// Iniciar el efecto cada 500ms
setInterval(createTextBubble, 500);
