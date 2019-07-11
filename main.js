let em = require("./expenseManager");
let benefeciaries1 = [
    {
        user: "A",
        percent: 30
    },
    {
        user: "B",
        percent: 30
    },
    {
        user: "C",
        percent: 40
    }
];
let benefeciaries2 = [
    {
        user: "A",
        amount: 30
    },
    {
        user: "B",
        amount: 30
    },
    {
        user: "C",
        amount: 40
    }
]
em.addExpense({
    expenseName: "lunch",
    payer: "A",
    amount: 100,
    benefeciaries: benefeciaries1,
    isPercentage:true
});
em.addExpense({
    expenseName: "lunch2",
    payer: "B",
    amount: 100,
    benefeciaries: benefeciaries2
});
em.viewBalance("A");
em.settle("C", "A", 40);
em.viewBalance("A");