document.getElementById('withdraw-btn').addEventListener('click', function(event){
  event.preventDefault()
  const accountNumber = document.getElementById('cashout-account').value;
  const amount = getInputeValueByID('cashout-amount');
  const pinNumber = getInputeValueByID('cashout-pin');
  const mainBalance = getInnerTextByID('main-balance');

   //   invalid amount
   if(amount > mainBalance){
      alert('invalid amount')
      return;
   }


     if(accountNumber.length === 11){
        if(pinNumber === 1234){
            const sum = mainBalance - amount;
            setInnerTextByIDandValue('main-balance', sum);

            // Transection history
        const container = document.getElementById("transection-container");

        const div = document.createElement("div");
        div.innerHTML = `
           <div class="">
               <h1 class="bg-[#F5F1DC] text-[#FF8040] font-bold text-center text-xl"><i class="fa-solid fa-money-bill-transfer"></i> Cashout</h1>
              <h3 class="bg-[#CBF3BB] text-[#043915] font-bold text-center"><i class="fa-solid fa-money-bill-transfer"></i> ${amount}</h3>
              <p class=" bg-blue-700 text-white font-bold text-center" ><i class="fa-solid fa-building-columns"></i> Account Number:  ${accountNumber}</p>
           </div>
          `
          container.appendChild(div)
          




        }
        else{
          alert('pinNumber Not valid');
        }
     }
     else{
        alert('accout number not valid')
     }

})