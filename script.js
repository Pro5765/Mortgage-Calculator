document.getElementById('mortgageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const amount = parseFloat(document.getElementById('amount').value);
    const term = parseInt(document.getElementById('term').value) * 12; // convert to months
    const rate = parseFloat(document.getElementById('rate').value) / 100 / 12; // monthly interest rate
    const type = document.querySelector('input[name="mortgageType"]:checked').value;
    
    let monthlyRepayment;
    if (type === "repayment") {
        monthlyRepayment = (amount * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
    } else {
        monthlyRepayment = amount * rate;
    }
    
    const totalRepayment = monthlyRepayment * term;

    document.getElementById('monthlyRepayment').textContent = `Your monthly repayments: £${monthlyRepayment.toFixed(2)}`;
    document.getElementById('totalRepayment').textContent = `Total you'll repay over the term: £${totalRepayment.toFixed(2)}`;
});
