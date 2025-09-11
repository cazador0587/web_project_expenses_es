/**
 * Paso 2.- definir dos variables iniciales: 
 *            budgetValue para almacenar el importe total del presupuesto que establecemos en Presupuesto y
 *            totalExpensesValue para realizar un seguimiento de la suma de todos los gastos,
 *          que se muestra como Gastos totales.
 */
let budgetValue = 0;
let totalExpensesValue = 0;

/**
 * Paso 3.- Definir un array llamado expenseEntries para almacenar los gastos.
 *          Cada gasto es un array con dos elementos: la categoría y el importe.
 *          Inicialmente, este array contiene algunos gastos de ejemplo.
 * 
 *          se utilizara una estructura de array anidada.
 *          como una tabla: cada "fila" representa un gasto individual;
 *          y cada gasto tiene dos "columnas", 
 *          la primera para la categoría y la segunda para el importe.
 * 
 *          Nuestro Gestor de gastos utiliza cinco categorías de gastos:
 *          groceries ("Comida"),
 *          restaurants ("Comer fuera"),
 *          transport ("Transporte"),
 *          home ("Hogar") 
 *          y subscriptions ("Suscripciones").
 *      
 *          Ten en cuenta que estos son valores de string.
 *          Una vez que hayas creado con éxito este array, 
 *          se mostrará una lista inicial de gastos en la página después de actualizarla.
 */

let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

/**
 * Paso 5.- calcular algunas otras estadísticas, como el Gasto promedio.
 *          Para ello tendrás que crear una nueva función calculateAverageExpense()
 *          que calculará el valor promedio de un gasto en función del importe total de los gastos
 *          y el número de gastos. Esta función debe devolver el promedio calculado.
 * 
 *         Tal vez lo recuerdes de la clase de matemáticas:
 *         para encontrar un promedio, debes dividir el importe total entre el número de elementos.
 *         Pero si no hay gastos, estarías dividiendo cero entre cero, lo cual no está permitido.
 *         En JavaScript, esto te da NaN y no queremos eso en la página. Para solucionarlo,
 *         primero agrega una condición que devuelva 0 si el array expenseEntries está vacío.
 * 
 *         Una vez que hayas logrado hacer esto, vuelve a actualizar la página:
 *         verás que se muestra el valor Gasto promedio en la sección Estadísticas generales.
 * 
 */
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

/**
 * Paso 6.- El último elemento de la sección Estadísticas generales es el Saldo.
 *          Esto se calcula como la diferencia entre el presupuesto establecido y los gastos totales.
 *          Piensa en cómo calcularlo y crea una función calculateBalance() que devolverá este valor.
 * 
 *          Una vez hayas terminado, actualiza la página y verás el valor Saldo que se muestra en la sección Estadísticas generales.
 *  
 */

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
  categories.push([categoryName, categoryTotal]);
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