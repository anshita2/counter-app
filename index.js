let minusvalue=document.querySelector('#minus');
let plusvalue=document.querySelector('#plus');
let a=document.getElementById('value');
// minusvalue.addEventListener('click',()=>{
//     let b=parseInt(a.textContent);
//     a.textContent=b-1;
// });
// plusvalue.addEventListener('click',()=>{
//     let b=parseInt(a.textContent);
//     a.textContent=b+1;
// });
console.log('done');

//methos-2 using onclick
function decrement(){
    let b=parseInt(a.textContent);
    a.textContent=b-1;
}

function increment(){
    let b=parseInt(a.textContent);
    a.textContent=b+1;
}