const AKeyButton = document.getElementById('keyA');
const SKeyButton = document.getElementById('keyS');
const DKeyButton = document.getElementById('keyD');
const FKeyButton = document.getElementById('keyF');
const GKeyButton = document.getElementById('keyG');
const HKeyButton = document.getElementById('keyH');
const JKeyButton = document.getElementById('keyJ');
const KKeyButton = document.getElementById('keyK');
const LKeyButton = document.getElementById('keyL');
const TKeyButton = document.getElementById('keyT');
const YKeyButton = document.getElementById('keyY');
const UKeyButton = document.getElementById('keyU');
const OKeyButton = document.getElementById('keyO');
const PKeyButton = document.getElementById('keyP');

const circle1 = document.getElementById('circlebass');
const circle2 = document.getElementById('circlesnareL');
const circle3 = document.getElementById('circlesnareR');
const circle4 = document.getElementById('circleLtomL');
const circle5 = document.getElementById('circleLtomR');
const circle6 = document.getElementById('circleMtomL');
const circle7 = document.getElementById('circleMtomR');
const circle8 = document.getElementById('circleHtomL');
const circle9 = document.getElementById('circleHtomR');
const circle10 = document.getElementById('circlehatclL');
const circle11 = document.getElementById('circlehatclR');
const circle12 = document.getElementById('circlehatop');
const circle13 = document.getElementById('circlecrash');
const circle14 = document.getElementById('circleride');


// キーが押された時
document.addEventListener('keydown', function(event) {
    if (event.key == 'a') {
        AKeyButton.classList.add('active');
        KeyA.currentTime = 0; 
        KeyA.play();
        circle1.style.display = 'block';
    }
    if (event.key == 's') {
        SKeyButton.classList.add('active');
        KeyS.currentTime = 0; 
        KeyS.play();
        circle2.style.display = 'block';
    }

    if (event.key == 'd') {
        DKeyButton.classList.add('active');
        KeyD.currentTime = 0; 
        KeyD.play();
        circle3.style.display = 'block';
    }

    if (event.key == 'f') {
        FKeyButton.classList.add('active');
        KeyF.currentTime = 0; 
        KeyF.play();
        circle4.style.display = 'block';
    }

    if (event.key == 'g') {
        GKeyButton.classList.add('active');
        KeyG.currentTime = 0; 
        KeyG.play();
        circle5.style.display = 'block';
    }

    if (event.key == 'h') {
        HKeyButton.classList.add('active');
        KeyH.currentTime = 0; 
        KeyH.play();
        circle6.style.display = 'block';
    }

    if (event.key == 'j') {
        JKeyButton.classList.add('active');
        KeyJ.currentTime = 0; 
        KeyJ.play();
        circle7.style.display = 'block';
    }

    if (event.key == 'k') {
        KKeyButton.classList.add('active');
        KeyK.currentTime = 0; 
        KeyK.play();
        circle8.style.display = 'block';
    }

    if (event.key == 'l') {
        LKeyButton.classList.add('active');
        KeyL.currentTime = 0; 
        KeyL.play();
        circle9.style.display = 'block';
    }

    if (event.key == 't') {
        TKeyButton.classList.add('active');
        KeyT.currentTime = 0; 
        KeyT.play();
        circle10.style.display = 'block';
    }

    if (event.key == 'y') {
        YKeyButton.classList.add('active');
        KeyY.currentTime = 0; 
        KeyY.play();
        circle11.style.display = 'block';
    }

    if (event.key == 'u') {
        UKeyButton.classList.add('active');
        KeyU.currentTime = 0; 
        KeyU.play();
        circle12.style.display = 'block';
    }

    if (event.key == 'o') {
        OKeyButton.classList.add('active');
        KeyO.currentTime = 0; 
        KeyO.play();
        circle13.style.display = 'block';
    }

    if (event.key == 'p') {
        PKeyButton.classList.add('active');
        KeyP.currentTime = 0; 
        KeyP.play();
        circle14.style.display = 'block';
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key == 'a') {
        circle1.style.display = 'none';
    }

    if (event.key == 's') {
        circle2.style.display = 'none';
    }

    if (event.key == 'd') {
        circle3.style.display = 'none';
    }

    if (event.key == 'f') {
        circle4.style.display = 'none';
    }

    if (event.key == 'g') {
        circle5.style.display = 'none';
    }

    if (event.key == 'h') {
        circle6.style.display = 'none';
    }

    if (event.key == 'j') {
        circle7.style.display = 'none';
    }

    if (event.key == 'k') {
        circle8.style.display = 'none';
    }

    if (event.key == 'l') {
        circle9.style.display = 'none';
    }

    if (event.key == 't') {
        circle10.style.display = 'none';
    }

    if (event.key == 'y') {
        circle11.style.display = 'none';
    }

    if (event.key == 'u') {
        circle12.style.display = 'none';
    }

    if (event.key == 'o') {
        circle13.style.display = 'none';
    }

    if (event.key == 'p') {
        circle14.style.display = 'none';
    }
});

document.querySelector('.A-key').style.visibility = 'hidden';
document.querySelector('.S-key').style.visibility = 'hidden';
document.querySelector('.D-key').style.visibility = 'hidden';
document.querySelector('.F-key').style.visibility = 'hidden';
document.querySelector('.G-key').style.visibility = 'hidden';
document.querySelector('.H-key').style.visibility = 'hidden';
document.querySelector('.J-key').style.visibility = 'hidden';
document.querySelector('.K-key').style.visibility = 'hidden';
document.querySelector('.L-key').style.visibility = 'hidden';
document.querySelector('.T-key').style.visibility = 'hidden';
document.querySelector('.Y-key').style.visibility = 'hidden';
document.querySelector('.U-key').style.visibility = 'hidden';
document.querySelector('.O-key').style.visibility = 'hidden';
document.querySelector('.P-key').style.visibility = 'hidden';
