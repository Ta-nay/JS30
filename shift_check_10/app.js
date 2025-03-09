const items = document.querySelectorAll('.item input[type = checkbox]');
let lastChecked = false;

function handleclick(e) {
    let inBetween = false;
    if(e.shiftKey && this.checked){
        
        items.forEach(inputBox =>{
            if(inputBox === this || inputBox === lastChecked)
                inBetween = !inBetween
            if(inBetween)
                inputBox.checked = true;
        })
    }
        lastChecked = this;
}


items.forEach(item=> item.addEventListener('click',handleclick))

