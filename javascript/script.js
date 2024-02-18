

let totalSeat = 40;
let sum = 0;
let clickedSeats = 0;
const seats = document.getElementsByClassName('plan');

for (let seat of seats) {
   seat.addEventListener('click', function() {
       const seat42 = document.getElementById('seat40');
       let currentSeatCount = parseFloat(seat42.innerText);
       currentSeatCount--;
       seat42.innerText = currentSeatCount;

       const set2 = document.getElementById('set');
       let currentSet2Count = parseFloat(set2.innerText);
       currentSet2Count++;
       set2.innerText = currentSet2Count;
    //    console.log(currentSeatCount);

    const forPerSeatCost = document.getElementById('perSeatMoney');
    let perSeatCost = parseFloat(forPerSeatCost.innerText);
    let totalSeatCost = perSeatCost + 550;
    forPerSeatCost.innerText = totalSeatCost;
     sum +=550;
    

   const bdtTk =document.getElementById('bdt');
        bdtTk.innerText = sum;

   const grandTk =document.getElementById('grandTotal');
        grandTk.innerText = sum;

    if(clickedSeats < 4){
        clickedSeats++;
    }
    else{
        alert('You have already clicked four seats')
    }

   });
}

const btn = document.getElementById("apply-btn");
        btn.addEventListener("click", function () {
          const input = document.getElementById("coupone").value;
          
          const couponeCode = input.split(' ').join('').toUpperCase();
        
          if(couponeCode === 'NEW15'){

           const discount = sum *15 /100;
           const remainingAmount = sum - discount;
           const total = document.getElementById('grandTotal');
           total.innerText = remainingAmount.toFixed(2);
          }
          else if(couponeCode === 'COUPLE20'){
            const discount = sum *20 /100;
           const remainingAmount = sum - discount;
           const total = document.getElementById('grandTotal');
           total.innerText = remainingAmount.toFixed(2);
          }
          else{
            alert('Invalid coupon code or coupon code expired');
          }
        
        
        });


