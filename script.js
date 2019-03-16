var amount = 0;

function add (amountId, spentId, price){
    var amount = document.getElementById(amountId);
    var number = amount.innerHTML;
    number++;
    amount.innerHTML = number;

    var cost = document.getElementById(spentId);
    var spent = cost.innerHTML;
    spent = number * price;
    cost.innerHTML = "$" + spent;
}