/**
 * common Shared functions here 
 */

function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value ;
    const inputNumber = parseFloat(inputValue); 
    return inputNumber ; 
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showSectionById(id){
    // hide all the sections
    document.getElementById('donate-money-section').style.display = 'none'
    document.getElementById('history-section').style.display = 'block'
   
}

function showSectionById2(id){
    // hide all the sections
    document.getElementById('donate-money-section').style.display = 'block'
    document.getElementById('history-section').style.display = 'none'
   
}