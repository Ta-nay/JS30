const canvas = document.querySelector('#canvas');
const ctx =  canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.strokeStyle = 'black'
let lastX = 0;
let lastY = 0;
let drawing = false;

const draw = (e)=>{
    if(!drawing) return; // does not draw on empty mouse moves.
   console.log(e);
   ctx.beginPath();
   ctx.moveTo(lastX,lastY);
   ctx.lineTo(e.offsetX,e.offsetY);
   ctx.stroke();
   [lastX,lastY] = [e.offsetX,e.offsetY];
}
canvas.addEventListener('mousedown', (e)=>{ 
    drawing = true;
    //[lastX,lastY] = [e.offsetX,e.offsetY];
})
canvas.addEventListener('mouseup',()=> drawing = false)
canvas.addEventListener('mousemove',draw)
canvas.addEventListener('mouseleave',()=> drawing = false)