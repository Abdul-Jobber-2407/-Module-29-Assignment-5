document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();
   
const donateMoney = getInputFieldValueById('donate-add-money');
// console.log('Donate Money :',donateMoney);

if( donateMoney > 0){
    const balance = getTextFieldValueById('donate-account-balance');
    const donateBalance = balance + donateMoney ;
    
    document.getElementById('donate-account-balance').innerText = donateBalance;

    const totalBalance = getTextFieldValueById('total-balance');
    const presentBalance = totalBalance - donateMoney ;
    document.getElementById('total-balance').innerText = presentBalance;

    // add to transaction history
    const p = document.createElement('p');
    p.innerText = `${ donateMoney} TK is Donated for famine-2024 at Feni, Bangaladesh ${date}`;
    // console.log(p);

    // should be a common function
    document.getElementById('history-container').appendChild(p)
}
else{
    alert('Failed to Donate the Money')
}


})