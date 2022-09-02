function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    // clear input field 
    inputField.value = '';

    return amountValue;
};

// get and update deposit & withdraw total 
function upadateTotalField(totalFieldId, depositAmount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + depositAmount;
};

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
};

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    /*
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
     */
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }

};

document.getElementById('deposit-button').addEventListener('click', function () {
    /*
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText); 
    */


    // get and update deposit total 
    /* 
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount;
     */


    // update balance 
    /* 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount;
 */
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        upadateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
});

// handle withdraw button 
document.getElementById('withdraw-button').addEventListener('click', function () {
    /*
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    */


    // get and update withdraw total 
    /* 
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previouswithdrawTotal = parseFloat(withdrawTotalText);

    withdrawTotal.innerText = previouswithdrawTotal + withdrawAmount;
 */



    // update balance after withdraw 
    /* 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
 */
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        upadateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    // clear withdraw input field 
    // withdrawInput.value = '';

});