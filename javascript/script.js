let totalSeat = 40;
let sum = 0;
let clickedSeats = 0;
const seats = document.getElementsByClassName("plan");
for (let seat of seats) {
  seat.addEventListener("click", function oneClick() {
    seat.removeEventListener('click', oneClick);

    if (clickedSeats < 4) {  
   seat.classList.add('bg-[#1DD100]');
      const seat42 = document.getElementById("seat40");
      let currentSeatCount = parseFloat(seat42.innerText);
      currentSeatCount--;
      seat42.innerText = currentSeatCount;

      const set2 = document.getElementById("set");
      let currentSet2Count = parseFloat(set2.innerText);
      currentSet2Count++;
      set2.innerText = currentSet2Count;

    const seatClassPrice = document.getElementById("economy");
    const rowLine = document.createElement("tr");
    const td = document.createElement("td");
    td.innerText = seat.innerText;
    rowLine.appendChild(td);

    const economy = document.createElement("td");
    economy.innerText = "Economy";
    rowLine.appendChild(economy);

    const price = document.createElement("td");
    price.innerText = "550";
    rowLine.appendChild(price);

    seatClassPrice.appendChild(rowLine);
      
      const forPerSeatCost = document.getElementById("perSeatMoney");
      let perSeatCost = parseFloat(forPerSeatCost.innerText);
      let totalSeatCost = perSeatCost + 550;
      forPerSeatCost.innerText = totalSeatCost;
      sum += 550;

      const bdtTk = document.getElementById("bdt");
      bdtTk.innerText = sum;

      const grandTk = document.getElementById("grandTotal");
      grandTk.innerText = sum;

      clickedSeats++;
    } else {
      alert("You have already clicked four seats");
    }
  });
}

const btn = document.getElementById("apply-btn");
btn.addEventListener("click", function () {

  const input = document.getElementById("coupone").value;

  const couponeCode = input.split(" ").join("").toUpperCase();

  if (couponeCode === "NEW15") {
    const discount = (sum * 15) / 100;
    const remainingAmount = sum - discount;
    const total = document.getElementById("grandTotal");
    total.innerText = remainingAmount.toFixed(2);

    const btnHidden = document.getElementById('inputHidden');
    btnHidden.classList.add('hidden');

  }
  else if (couponeCode === "COUPLE20") {
    const discount = (sum * 20) / 100;
    const remainingAmount = sum - discount;
    const total = document.getElementById("grandTotal");
    total.innerText = remainingAmount.toFixed(2);

    const btnHidden = document.getElementById('inputHidden');
    btnHidden.classList.add('hidden');

  }
  else {
    alert("Invalid coupon code or coupon code expired");
  };

});
