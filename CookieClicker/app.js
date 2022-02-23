let count = 0;
let income = 0;

const value = document.querySelector('#value');
const pIncome = document.querySelector('#income');

const btnAdd = document.querySelector(".btnAdd");

const btns = document.querySelectorAll('.btn');
/*const farmerBtn = document.querySelector(".farmer");
const cursorBtn = document.querySelector(".cursor");
const grandmaBtn = document.querySelector(".grandma");*/


btnAdd.addEventListener('click', function(e){
    count++;
    
    value.textContent = count;
});

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        const type = e.currentTarget.classList;
        switch(type.item(1)){
            case "cursor":
                if(count >= 5){
                    count -= 5;
                    income += 1;
                }
                break;
            case "grandma":
                if(count >= 15){
                    count -= 15;
                    income += 5;
                }
                break;
            case "farmer":
                if(count >= 30){
                    count -= 30;
                    income += 15;
                }
                break;
        }
        value.textContent = count;
        pIncome.textContent = income;
    });
})


while(income > 0){
    count += income;
    value.textContent = count;
}

setInterval(function(){
    count += income;
    value.textContent = count;
}, 500);