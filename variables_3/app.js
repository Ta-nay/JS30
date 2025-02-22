
const colorchanger = ()=>{
    document.querySelector('span').style.color = document.querySelector('#base').value;
}
document.addEventListener('input',colorchanger);


const blurchanger =()=>{
    document.querySelector('img').style.filter = `blur(${document.querySelector('#blur').value}px)`; 
}
document.addEventListener('input',blurchanger)

const spacechanger =()=>{
    document.querySelector('img').style.padding = `${document.querySelector('#space').value}px`; 
}
document.addEventListener('input',spacechanger)