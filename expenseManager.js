function expenseManager() {
    let expenses = [];
    let transactions = [];
    function addExpense({expenseName, payer, amount, benefeciaries, isPercentage}) {
        function getAmountFromPercent(amount, percent) {
            let a = (percent * amount)/100; 
            return +Number.parseFloat(a).toFixed(2);
        }
        expenses.push({
            expenseName,
            payer,
            benefeciaries
        });
    
        if (isPercentage) {
            benefeciaries = benefeciaries.map((ben) => { 
                ben.amount = getAmountFromPercent(amount, ben.percent);
                return ben;
            });
        }
        benefeciaries.forEach(ben => {
            addTransaction(payer, ben.user, ben.amount, expenseName);
        });
        console.log(expenses, transactions);
    }
    function addTransaction(user1, user2, amount, expenseName){
        transactions.push({
            payer: user1,
            benefeciary: user2,
            amount,
            expenseName
        });
    }
    function viewBalance(user1, user2=null) {
        let balances = {};
        transactions.forEach((t)=>{
            if (t.payer === user1) {
                if (!balances[t.benefeciary]) balances[t.benefeciary] = t.amount;
                else balances[t.benefeciary] += t.amount;
            }
            if (t.benefeciary === user1) {
                if (!balances[t.payer]) balances[t.payer] = -(t.amount);
                else balances[t.payer] -= t.amount;
            }
        });
        console.log(balances);
        // console.log(transactions);
        // return balances;
    }
    function settle(user1, user2, amount) {
        addTransaction(user1, user2, amount);
    }
    return {
        addExpense,
        viewBalance,
        settle
    }
}
module.exports = expenseManager();