let noClickCount = 0;
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const birthdayNote = document.getElementById('birthdayNote');

noBtn.addEventListener('click', () => {
    noClickCount++;
    noBtn.style.fontSize = (16 + noClickCount * 5) + 'px';

    if (noClickCount >= 7) {
        document.querySelector('.buttons').style.display = 'none';
        birthdayNote.classList.remove('hidden');
    }
});

yesBtn.addEventListener('click', () => {
    document.querySelector('.buttons').style.display = 'none';
    birthdayNote.classList.remove('hidden');
});
