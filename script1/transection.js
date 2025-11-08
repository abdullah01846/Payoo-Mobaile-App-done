handleToggle('transection-history', 'none');
handleToggle('usersInfo', 'none');
handleToggle('pricIng','none')
handleToggle('trans','none')
// handleToggle('users-info','none');
document.getElementById('transection-box').addEventListener('click',function(){
    handleToggle('addMoney', 'none');
    handleToggle('cashout', 'none');
     handleToggle('transection-history', 'block');
   
})


document.getElementById('users-info').addEventListener('click', function(){
    handleToggle('usersInfo', 'block');
    handleToggle('addMoney', 'none');
    handleToggle('cashout', 'none');
    handleToggle('transection-history', 'none');
})



document.getElementById('transfer-box').addEventListener('click', function(){
    handleToggle('addMoney', 'none')
    handleToggle('cashout', 'none')
    handleToggle('transection-history','none');
    handleToggle('usersInfo', 'none');
    handleToggle('trans','block')
})

