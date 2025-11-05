document.getElementById('cashout').style.display = 'none';

document.getElementById('add-money-box').addEventListener('click', function(){
    handleToggle('addMoney', 'block')
    handleToggle('cashout', 'none')
     handleToggle('transection-history', 'none');
})

document.getElementById('cashout-box').addEventListener('click', function(){
    handleToggle('addMoney', 'none')
    handleToggle('cashout', 'block')
     handleToggle('transection-history', 'none');
})
