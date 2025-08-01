function showWish() {
  const wish = document.getElementById('wish');
  wish.innerHTML = '<span class="lavender-bold"></span>'; // Prepare the span
  const message = "Wishing you an amazing year filled with love, laughter and success. Happy Birthday Bhumi🧡              🎈🎁🎉";
  const span = wish.querySelector('.lavender-bold');
  typeWriter(span, message, 0);

  // Start confetti
  startConfetti();
}


// Typewriter effect (now types inside the span)
function typeWriter(element, text, index) {
  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    setTimeout(() => typeWriter(element, text, index + 1), 50);
  }
}
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function random(min, max) {
  return Math.random() * (max - min) + min;
}
class Star {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = random(0, canvas.width);
    this.y = random(-canvas.height, 0);
    this.radius = random(1, 2.5);
    this.speed = random(2, 4.8);
    this.alpha = random(0.5, 1);
    this.sparkleSpeed = random(0.05, 0.15); // how fast it sparkles
    this.sparklePhase = random(0, Math.PI * 2);
  }
  draw() {
    ctx.save();
    // Sparkle by oscillating alpha
    const sparkle = Math.abs(Math.sin(Date.now() * this.sparkleSpeed / 100 + this.sparklePhase));
    ctx.globalAlpha = this.alpha * (0.6 + 0.4 * sparkle);
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.shadowColor = "#fff";
    ctx.shadowBlur = 12;
    ctx.fill();
    ctx.restore();
  }
  update() {
    this.y += this.speed;
    if (this.y > canvas.height) {
      this.reset();
      this.y = -this.radius;
    }
    this.draw();
  }
}

const stars = [];
for (let i = 0; i < 80; i++) {
  stars.push(new Star());
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(star => star.update());
  requestAnimationFrame(animateStars);
}

animateStars();
document.getElementById('start-surprise-btn').addEventListener('click', function() {
  // 1. Play the music (if allowed by browser)
  var audio = document.getElementById('bg-audio');
  if (audio.paused) {
    audio.play();
  }

  // 2. Show the typewriter message
  const wish = document.getElementById('wish');
  wish.innerHTML = '<span class="lavender-bold"></span>';
  const message = "Wishing you an amazing year filled with love, laughter and success. Happy Birthday Bhumi🧡     🎈🎁🎉";
  const span = wish.querySelector('.lavender-bold');
  typeWriter(span, message, 0);

  // 3. Start confetti/falling stars (if you have startConfetti())
  if (typeof startConfetti === 'function') {
    startConfetti();
  }

  // 4. Optionally, disable the button after one use
  this.disabled = true;
  this.innerText = "Enjoy the Surprise!";
});

// Typewriter effect
function typeWriter(element, text, index) {
  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    setTimeout(() => typeWriter(element, text, index + 1),50);
  }
}

