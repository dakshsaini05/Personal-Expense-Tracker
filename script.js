// Init value of expense at 0
let totalExpense = 0;

// get the heading element
const headingEl = document.querySelector("#headingTotal");

// get the inputAmount 
const inputElement = document.querySelector("#inputAmount"); 

// Get the table 
const expenseTableEl = document.querySelector("#expenseTable");

// get the desc element 
const inputDescEl = document.querySelector("#inputDesc");

// set the heading element to totalExpense at 0
headingEl.textContent = totalExpense;

// allExpense at one place in an array
const allExpenses = [];  

// onButtonClick add inputAmount to totalExpense
function addExpenseToTotal() {
    // create an object to put all the data in it 
    const expenseItem = {};

    // Read value from inputAmount
    const textAmount = inputElement.value;

    // Read the desc value from inputDescEl
    const textDesc = inputDescEl.value;

    // convert it to number 
    const expense = parseInt(textAmount, 10); 

    // put all data in object
    expenseItem.amount = expense;
    expenseItem.desc = textDesc;

    // console.log(expenseItem);

    allExpenses.push(expenseItem);

    // add that value to totalExpense 
    totalExpense += expense;
    // console.log(totalExpense);

    // set the heading element to totalExpense
    const someText = `Total: ${totalExpense}`;
    headingEl.textContent = someText;

    // Show the table here 
    // const data1 = allExpenses[0];
    // const data2 = allExpenses[1];

    // const data1Text = `${data1.desc} :: ${data1.amount}`;
    // const data2Text = `${data2.desc} :: ${data2.amount}`;

    // const textTable = `
    //     <div>${data1Text}</div>
    //     <div>${data2Text}</div>
    // `;

    const allExpenseHtml = allExpenses.map(expense => {
        return `<div>${expense.desc} :: ${expense.amount}</div>`
    });
    // console.log(allExpenseHtml);

    const joinedAllExpenseHtml = allExpenseHtml.join(' ');
    console.log(joinedAllExpenseHtml);

    expenseTableEl.innerHTML = joinedAllExpenseHtml;
}


//Get the btn element
const element = document.querySelector("#btnAddExpense");

// Listen to click event on btn
element.addEventListener("click", addExpenseToTotal);