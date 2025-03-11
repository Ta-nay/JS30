const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

let dragging = false;
function togglePlay(){
    let val = video.paused?'play':'pause';
    video[val]();
    
}
function updateButton(){
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}
function skipContent(){
    video.currentTime += parseFloat(this.dataset.skip);
}
function handleProgress(){
    let currentProgress = (video.currentTime/video.duration)*100;
    progressBar.style.flexBasis = `${currentProgress}%`
}

function handleRangeUpdate(){
    video[this.name] = this.value;
}
function scrub(e){
    // console.log(e)
    let currentTime = (e.offsetX/progress.offsetWidth) * video.duration;
    video.currentTime = currentTime
}

video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate',handleProgress)


toggle.addEventListener('click', togglePlay)

skipButtons.forEach(ele => ele.addEventListener('click',skipContent))

ranges.forEach(ele => ele.addEventListener('change',handleRangeUpdate))
ranges.forEach(ele => ele.addEventListener('mousemove',handleRangeUpdate))

progress.addEventListener('mousedown', ()=> dragging = true)
progress.addEventListener('mousemove', (e)=> dragging && scrub(e))
progress.addEventListener('mouseup', ()=> dragging = false)
progress.addEventListener('mouseleave', ()=> dragging = false)