window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;


let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);


recognition.addEventListener('result', (e)=>{
    const transcripts = [...e.results]
    .map(result => result[0])
    .map(result => result.transcript)
    .join()

    p.innerText=transcripts
    if(e.results[0].isFinal){
        p = document.createElement('p');
        words.append(p);
    }
    console.log(e.results);
})


recognition.addEventListener('end', recognition.start)

recognition.start();