const gettime = ()=>{
    const today = new Date();
    let minutes = today.getMinutes();
    let hours = today.getHours();
    let seconds = today.getSeconds();
   console.log(`hour${hours},minutes${minutes},seconds${seconds}`);
    let minhand =document.querySelector('#minute')
    let hourhand =document.querySelector('#hour')
    let secondhand = document.querySelector('#second')
    minhand.style.transform = `rotate(${minutes%60 * 6}deg) `;
    secondhand.style.transform = `rotate(${seconds%60 * 6}deg)`;
    hourhand.style.transform = `rotate(${hours%12 * 30}deg)`;
}
setInterval(gettime,1000);