let budgetValue = 0;
let totalExpensesValue = 0;

let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0; // Evita NaN si no hay gastos
  }

  let total = 0;
  for (let i = 0; i < expenseEntries.length; i++) {
    total += expenseEntries[i][1];
  }

  let average = total / expenseEntries.length;
  return average;
}

console.log("Gasto promedio:", calculateAverageExpense());

function calculateTotalExpenses() {
  let total = 0;
  for (let i = 0; i < expenseEntries.length; i++) {
    total += expenseEntries[i][1];
  }
  return total;
}

function calculateBalance() {
  let totalExpenses = calculateTotalExpenses();
  return budgetValue - totalExpenses;
}

console.log("Total gastos:", calculateTotalExpenses());
console.log("Saldo restante:", calculateBalance());

expenseEntries.push(["groceries", 450]);
expenseEntries.push(["restaurants", 600]);

console.log(expenseEntries);

/*for (let i = 0; i < expenseEntries.length; i++) {
  console.log(
    `Categoría: ${expenseEntries[i][0]}, Importe: $${expenseEntries[i][1]}`
  );
}*/

for (const [categoria, importe] of expenseEntries) {
  console.log(`Categoría: ${categoria}, Importe: $${importe}`);
}