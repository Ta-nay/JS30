const hero =  document.querySelector('.hero');
const head = hero.querySelector('h1')
const walk = 100;

function handlemove(e){
    const {offsetHeight:height,offsetWidth:width} = hero;
    let {offsetX:x,offsetY:y} = e;
    
    if(this !== e.target){
        x= x+e.target.offsetLeft;
        y=y+e.target.offsetTop;
    }
    
    let walkX = Math.round((x/width)*walk- walk/2)
    let walkY = Math.round((y/height)*walk- walk/2)

    head.style.textShadow = `${walkX}px ${walkY}px 0 red` 
}

hero.addEventListener('mousemove',handlemove)