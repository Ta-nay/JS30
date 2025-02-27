const panels = document.querySelectorAll('.panel');
panels.forEach(ele=>{
    ele.addEventListener('click',(e)=>
        ele.classList.toggle('open')
    )

    ele.addEventListener('transitionend',(e)=>{
        if(e.propertyName.includes('flex'))
         return ele.classList.toggle('open-active')
     }
     )
})      

// panels.forEach(ele=>{
    
// })