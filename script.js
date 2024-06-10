let btn = document.getElementById("order");
let checkBoxes = document.querySelectorAll(".foodItems");
// console.log(checkBox);

btn.addEventListener("click",function(){
    let selected = [];
    checkBoxes.forEach(function(checkbox){
        if(checkbox.checked){
            selected.push(checkbox.value);
        }
    });
    if(selected.length===0){
        alert(`click karo`)
    } 
    // let orderId = document.getElementById("showId");
    // let orderValue = document.getElementById("Values");
    // console.log(orderId);
    // orderId.style.display='none';

    let div =document.createElement("div");
   let para = document.createElement("p");
   div.appendChild(para);
   para.innerHtml="Order Id :";
    

})