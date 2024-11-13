const text = document.getElementById("text")
const play = document.getElementById("play")
const pauseButton = document.getElementById("pause")
const stopButton = document.getElementById("stop")
const speed = document.getElementById("speech")
let currentCharacter

play.addEventListener('click',()=>
{
    if(text.value === "")
    {
        alert("please enter some text")
    }
    playText(text.value)
    console.log(text.value)
    
})
pauseButton.addEventListener('click',pauseContent)
stopButton.addEventListener('click',stopContent)
speed.addEventListener('input',()=>{
    stopContent()
    playText(utterance.text.substring(currentCharacter))
})

const utterance = new SpeechSynthesisUtterance()
   utterance.addEventListener('end',()=>{
    text.disabled = false
   })
   utterance.addEventListener('boundary',e=>{
     currentCharacter = e.charIndex 
   })

function playText(textContent)
{ 
    if(speechSynthesis.speaking && speechSynthesis.paused)
        {
         return speechSynthesis.resume()
        }
    utterance.text= textContent
    utterance.rate = speed.value || 1 //specify speed
    text.disabled = true
    speechSynthesis.speak(utterance)
   
}

function pauseContent()
{
    if(speechSynthesis.speaking)
    {
        speechSynthesis.pause()
    }
}
 
function stopContent(){
    speechSynthesis.cancel()

}