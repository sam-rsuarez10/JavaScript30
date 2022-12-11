window.addEventListener('keydown', function(event){
    const key = event.key.toUpperCase().charCodeAt();
    const audio  = this.document.querySelector(`audio[data-key="${key}"]`);
    const renderKey = this.document.querySelector(`.key[data-key="${key}"]`)
    if (!audio) return;
    audio.currentTime = 0; // rewind to start
    audio.play();
    renderKey.classList.add('playing');
});

function removeTransition(event) {
    if (event.propertyName !== 'transform') return; // skip if it's not transform

    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));