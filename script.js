const text = document.getElementById("text")
const play = document.getElementById("play")
const pause = document.getElementById("pause")
const stop = document.getElementById("stop")
const speed = document.getElementById("speech")

play.addEventListener('click',()=>
{
    if(text.value === "")
    {
        alert("please enter some text")
    }
    playText(text.value)
    console.log(text.value)
    
})
pause.addEventListener('click',pauseContent)
function playText(textContent)
{
   const utterance = new SpeechSynthesisUtterance(textContent)
   utterance.rate = speed.value || 1 //specify speed
   utterance.addEventListener('end',()=>{
    text.disabled = false
   })
   console.log(utterance)

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