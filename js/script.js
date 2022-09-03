const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 900);
}

const loop = setInterval(() => {
    const pipePositionLeft = pipe.offsetLeft;
    const cloudPositionLeft = clouds.offsetLeft;
    const marioHeight = +window.getComputedStyle(mario).bottom.replace('px','');
    
    if (pipePositionLeft <= 105 && pipePositionLeft > -25 && marioHeight <= 105) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePositionLeft}px`;

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudPositionLeft}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioHeight}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '72px'; 
        mario.style.marginLeft = '40px';

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);