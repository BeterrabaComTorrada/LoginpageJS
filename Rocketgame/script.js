const rocket = document.getElementById("rocket");
const spaceWidth = 800; // Largura máxima do espaço
const spaceHeight = 600; // Altura máxima do espaço
let rocketX = window.innerWidth / 2;
let rocketY = window.innerHeight / 2;
let rocketAngle = 0;
let rocketSpeedY = 0;
let rocketSpeedX = 0;
const thrustPower = 0.2;
const gravity = 0.01;
const friction = 0.98;
const rotationSpeed = 5;

function updateRocket() {
    rocketX = (rocketX + rocketSpeedX) % spaceWidth;
    rocketY = (rocketY + rocketSpeedY) % spaceHeight;
  
    if (rocketX < 0) rocketX += spaceWidth;
    if (rocketY < 0) rocketY += spaceHeight;
    rocketSpeedX *= friction;
  rocketSpeedY *= friction;
  
    rocket.style.transform = `translate(${rocketX}px, ${rocketY}px) rotate(${rocketAngle}deg)`;
  }
  // Limita as coordenadas do foguete dentro dos limites da tela
  rocketX = Math.max(0, Math.min(rocketX, window.innerWidth));
  rocketY = Math.max(0, Math.min(rocketY, window.innerHeight));

  rocket.style.transform = `translate(${rocketX}px, ${rocketY}px) rotate(${rocketAngle}deg)`;
  function rotateRocket(direction) {
    if (direction === "left") {
      rocketAngle -= rotationSpeed;
    } else if (direction === "right") {
      rocketAngle += rotationSpeed;
    }
  }

  function applyThrust() {
    const thrustX = Math.sin((rocketAngle * Math.PI) / 180) * thrustPower;
    const thrustY = -Math.cos((rocketAngle * Math.PI) / 180) * thrustPower;
  
    rocketSpeedX += thrustX;
    rocketSpeedY += thrustY;
  
  rocketSpeedY -= thrustPower;
}

function applyGravity() {
  rocketSpeedY += gravity;
  rocketY += rocketSpeedY;

  if (rocketY > window.innerHeight) {
    rocketY = window.innerHeight;
    rocketSpeedY = 0;
  }
}

function rotateRocket(direction) {
  const rotationSpeed = 5;
  if (direction === "left") {
    rocketAngle -= rotationSpeed;
  } else if (direction === "right") {
    rocketAngle += rotationSpeed;
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    rotateRocket("left");
  } else if (event.key === "ArrowRight") {
    rotateRocket("right");
  } else if (event.key === "ArrowUp") {
    applyThrust();
  }
});

function gameLoop() {
  applyGravity();
  updateRocket();

  // Ajusta a posição do espaço em relação ao foguete
  const space = document.querySelector(".space");
  space.style.transform = `translate(calc(50% - ${rocketX}px), calc(50% - ${rocketY}px))`;

  requestAnimationFrame(gameLoop);
}
const space = document.querySelector(".space");
space.style.width = `${spaceWidth}px`;
space.style.height = `${spaceHeight}px`;
gameLoop();


