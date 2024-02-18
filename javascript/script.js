

let totalSeat = 40;
let sum = 550;
const seats = document.getElementsByClassName('plan');

for (let seat of seats) {
   seat.addEventListener('click', function() {
       const seat42 = document.getElementById('seat40');
       let currentSeatCount = parseFloat(seat42.innerText);
       currentSeatCount--;
       seat42.innerText = currentSeatCount;

    //    console.log(currentSeatCount);

    const forPerSeatCost = document.getElementById('perSeatMoney');
    let perSeatCost = parseFloat(forPerSeatCost.innerText);
    let totalSeatCost = perSeatCost + sum;
    // totalSeatCost ++;
    forPerSeatCost.innerText = totalSeatCost

    // console.log(totalSeatCost)


   });
}
