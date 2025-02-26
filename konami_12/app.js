const typing = [];
const secretCode = "eureka";

document.addEventListener('keyup',(e)=>{
    typing.push(e.key)
    typing.splice(-secretCode.length - 1 , typing.length-secretCode.length)
    console.log(typing)
    if(typing.join('') === (secretCode))
        cornify_add()
})