window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const buttons = document.querySelectorAll('.buttons div');

    //sounds
    buttons.forEach((btn, i) => {
      btn.addEventListener('click', function() {
        sounds[i].currentTime = 0;
        sounds[i].play();
      })
    });
})