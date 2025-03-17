
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function spliter(word){
    return word.replace(/^\s*(a|an|the)\b\s*/i, '').trim();
}

const sortedBand = bands.sort((a,b)=>{
    let first = spliter(a)
    let second = spliter(b)
    return first.localeCompare(second);
})
console.log(sortedBand)
const listParent = document.querySelector('#bands')
listParent.innerHTML= ''
sortedBand.forEach(ele=>{
    const child = document.createElement('li');
    //console.log(ele)
    child.innerText = ele;
    listParent.appendChild(child)
})