document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById("acount-number").value;
    const amount = getInputeValueByID("amount");
    const pinNumber = getInputeValueByID("pin");
    const mainBalance = getInnerTextByID("main-balance");
    const selectedBank = document.getElementById("allbank").value;

    //  invalid number
    if (amount < 0) {
      alert("invalid amount");
      return;
    }

    if (accountNumber.length === 11) {
      if (pinNumber === 1234) {
        const sum = mainBalance + amount;
        setInnerTextByIDandValue("main-balance", sum);

        // Transection history
        const container = document.getElementById("transection-container");

        const div = document.createElement("div");
        div.innerHTML = `
           <div class="">
              <h1 class="bg-[#F5F1DC] text-[#FF8040] font-bold text-center text-xl"><i class="fa-solid fa-money-bill-trend-up"></i> Added Money ${selectedBank}</h1>
              <h3 class="bg-[#0046FF] text-[#FF8040] font-bold text-center"><i class="fa-solid fa-money-bill-trend-up"></i>  ${amount}</h3>
              <p class=" bg-[#0046FF] text-white font-bold text-center" ><i class="fa-solid fa-building-columns"></i> Account Number: ${accountNumber}</p>
           </div>
          `;
        container.appendChild(div);
      } else {
        alert("pinNumber Not valid");
      }
    } else {
      alert("accout number not valid");
    }
  });
