document.getElementById('show-donate-money-form')
.addEventListener('click', function(){
    console.log('show add money button clicked');
    showSectionById2('donate-money-section')
});

document.getElementById('history-donation-section')
.addEventListener('click',function(){
    console.log('good')
    showSectionById('history-section')
})