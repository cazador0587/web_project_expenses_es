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
  for (const entry of expenseEntries) {
    total += entry[1];
  }

  let average = total / expenseEntries.length;
  return average;
}

console.log("Gasto promedio:", calculateAverageExpense());

function calculateTotalExpenses() {
  let total = 0;
  for (const entry of expenseEntries) {
    total += entry[1];
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

let balanceColor = "green";

function updateBalanceColor() {
  let balance = calculateBalance();

  if (balance < 0) {
    balanceColor = "red";
  } else if (balance < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }

  // Aquí actualizamos el color en pantalla (ejemplo si el saldo está en un <span id="balanceValue">)
  let balanceElement = document.getElementById("balanceValue");
  if (balanceElement) {
    balanceElement.style.color = balanceColor;
  }
}

/* function calculateCategoryExpenses(category) {
  // Duplicate function removed. See definition above.
} */

let categories = [
  "groceries",
  "restaurants",
  "transport",
  "home",
  "subscriptions",
];

function calculateCategoryExpenses(category) {
  let total = 0;
  for (const entry of expenseEntries) {
    if (entry[0] === category) {
      total += entry[1];
    }
  }
  return total;
}


for (const categoryName of categories) {
  let categoryTotal = calculateCategoryExpenses(categoryName);
  categoriesData.push([categoryName, categoryTotal]);
}

function calculateLargestCategory() {
  let categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];

  // Construir array de categorías con totales
  let categoriesData = [];
  for (const categoryName of categories) {
    let categoryTotal = calculateCategoryExpenses(categoryName);
    categoriesData.push([categoryName, categoryTotal]);
  }

  // Encontrar la categoría con gasto más alto
  let largestCategory = categoriesData[0][0];
  let largestValue = categoriesData[0][1];

  for (let i = 1; i < categoriesData.length; i++) {
    if (categoriesData[i][1] > largestValue) {
      largestCategory = categoriesData[i][0];
      largestValue = categoriesData[i][1];
    }
  }

  // Siempre retorna un objeto con la categoría y el valor
  return { category: largestCategory, value: largestValue };
}
const largestCategoryResult = calculateLargestCategory();
console.log(
  "La categoría con más gastos es:",
  largestCategoryResult.category,
  "con un total de $",
  largestCategoryResult.value
);
console.log("La categoría con más gastos es:", calculateLargestCategory());

function addExpenseEntry(entry) {
  // 1. Agregar el gasto al array
  expenseEntries.push(entry);

  // 2. Actualizar el total de gastos
  totalExpensesValue = calculateTotalExpenses();

  // 3. Actualizar la página (ejemplo si tenemos los spans con IDs)
  document.getElementById("expensesValue").textContent = totalExpensesValue;
  document.getElementById("averageValue").textContent =
    calculateAverageExpense().toFixed(2);
  document.getElementById("balanceValue").textContent = calculateBalance();

  // 4. Actualizar color del saldo
  updateBalanceColor();
}