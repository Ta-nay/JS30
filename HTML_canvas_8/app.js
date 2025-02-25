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

let hue = 0;
let direction = true;

const draw = (e)=>{
    if(!drawing) return; // does not draw on empty mouse moves.
   ctx.beginPath();
   ctx.strokeStyle=`hsl(${hue},50%,50%)`;
   hue++;
   hue%=360;
   if(ctx.lineWidth>=100 || ctx.lineWidth<=1){
    direction = ! direction;
   }
   if(direction){
    ctx.lineWidth++;
   }
   else{
    ctx.lineWidth--;
   }
   ctx.moveTo(lastX,lastY);
   ctx.lineTo(e.offsetX,e.offsetY);
   ctx.stroke();
   [lastX,lastY] = [e.offsetX,e.offsetY];
}
canvas.addEventListener('mousedown', (e)=>{ 
    drawing = true;
    [lastX,lastY] = [e.offsetX,e.offsetY];
})
canvas.addEventListener('mouseup',()=> drawing = false)
canvas.addEventListener('mousemove',draw)
canvas.addEventListener('mouseleave',()=> drawing = false)