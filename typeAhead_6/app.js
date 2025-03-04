const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = []
const getData = async ()=>{
    const retrieved = await fetch(endpoint);
    const data = await retrieved.json();
    cities.push(...data);
}
getData();

const search = document.querySelector('.search');
let timer;
search.addEventListener('keyup', (e)=>{
    clearTimeout(timer);
    timer = setTimeout(() =>{
    const val =  search.value;
    const searched = cities.filter(ele =>{
    if(ele.city.toLowerCase().indexOf(val)!== -1 || ele.state.toLowerCase().indexOf(val)!== -1)
        return true;
})
    const suggestions = document.querySelector('.suggestions')
    const lis = document.querySelectorAll('li')
    lis.forEach(ele=>{
        ele.remove()
    })
    searched.forEach(ele =>{
        const child = document.createElement('li');
        child.innerText = `${ele.city},${ele.state}`
        suggestions.appendChild(child);
    })
},100);
})

