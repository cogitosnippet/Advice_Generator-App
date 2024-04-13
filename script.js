const advice_number = document.getElementById('number');
const advice_text = document.getElementById('text'); 
const button = document.getElementById('button');



button.addEventListener('click',()=>{
  main();
})





async function main(){
  const response = await fetch('https://api.adviceslip.com/advice');
  let data = await response.json();
  
  let advice = data;

  setTimeout(()=>{
    advice_number.innerHTML = advice.slip.id;
    advice_text.innerHTML = advice.slip.advice;
  },100)
}