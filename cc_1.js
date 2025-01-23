// Task 1: Variables
let employeeName = "John Doe";
const employeeID = 12345;
var isActive = true;

console.log("Employee Name:", employeeName, "Type:", typeof employeeName);
console.log("Employee ID:", employeeID, "Type:", typeof employeeID);
console.log("Is Active:", isActive, "Type:", typeof isActive);
// Task 2: Primitive Data Types
let productName = "Wireless Headphones";
const productPrice = 79.99;
var isAvailable = true;

console.log("Product Name:", productName, "Type:", typeof productName);
console.log("Product Price:", productPrice, "Type:", typeof productPrice);
console.log("Is Available:", isAvailable, "Type:", typeof isAvailable);
// Task 3: Number Data Type
let accountBalance = 1000.50;
console.log("Initial Account Balance:", accountBalance);

// Performing Arithmetic Operations
accountBalance += 500; // Deposit
console.log("After Deposit:", accountBalance);

accountBalance -= 200; // Withdrawal
console.log("After Withdrawal:", accountBalance);

accountBalance *= 1.05; // Interest 5%
console.log("After Interest:", accountBalance);

accountBalance /= 2; // Splitting amount
console.log("After Splitting:", accountBalance);
// Task 4: String Data Type
let customerName = "Alice Johnson";
let welcomeMessage = "Hello, " + customerName + "! Welcome to our store. We hope you have a great experience!";
console.log(welcomeMessage);