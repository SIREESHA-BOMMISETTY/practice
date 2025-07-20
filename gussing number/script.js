
const number = Math.floor(Math.random() * 10) +1;
const input = document.querySelector(".input-box");
const button = document.querySelector(".btn");
const message = document.querySelector(".result-text");
const attempts = document.querySelector(".attempt-field");


let temp = number;
let count = 5;
button.addEventListener('click',()=>{
      
      
      console.log(number);
      attempts.innerHTML = count;
       if(input.value == temp ){
             message.textContent = "your Guess Is Correct";
             message.style.backgroundColor = "green";
             message.style.color ="white";
              resetBtn()

        }
        else if(count == 1){
            attempts.innerHTML ="0";
            message.textContent = " You Lost the Game";
            message.style.backgroundColor = "red";
            message.style.color ="white";
            
            const division_field = document.querySelector(".division");
            const randomNumber = document.createElement("p");
            randomNumber.innerHTML = `the Number Is ${temp}`;
            division_field.appendChild(randomNumber);
            resetBtn()
           
             
            
        }
        else{
             message.textContent = "Your Gguess Is Wrong" + "Try Again";
             input.value ='';
             attempts.innerHTML = (count -= 1);
             message.style.backgroundColor ="red";
             input.value ='';

        }
        
    
})

function resetBtn() {
    const resetButton = document.createElement("button");
    resetButton.innerText = "Play Again?";
    resetButton.className = "reset-btn"; 


    resetButton.addEventListener('click', () => {
        location.reload();  
    });

    const divisionfield = document.querySelector(".reset-Field");
    divisionfield.appendChild(resetButton);
}


   
         



     


 