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
    expenseItem.moment = new Date();

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

    renderList(allExpenses);
}


//Get the btn element
const element = document.querySelector("#btnAddExpense");

// Listen to click event on btn
element.addEventListener("click", addExpenseToTotal);


// Controller Functions 

// Get the date sting 
function getDateString(momento) {
    return momento.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}

// Delete Items
function deleteItem(dateValue) {
    const newArr = [];
    console.log("Delete item was called", dateValue);
    for(let i=0;i<allExpenses.length;i++) {
        if(allExpenses[i].moment.valueOf() !== dateValue) newArr.push(allExpenses[i]);
    }

    renderList(newArr);
}

// View layer 

// Rendering the list 
function renderList(arrOfList) {
    const allExpenseHtml = arrOfList.map(expense => createListItem(expense));
    const joinedAllExpenseHtml = allExpenseHtml.join(' ');
    expenseTableEl.innerHTML = joinedAllExpenseHtml;
}

// Making a function for putting the data in the table(destructuring)
function createListItem({ desc, amount, moment }) {
    return `
        <li class="list-group-item d-flex justify-content-between">
            <div class="d-flex flex-column">
                ${desc}
                <small class="text-muted">${getDateString(moment)}</small>
            </div>
            <div>
                <span class="px-5">
                    ${amount}   
                </span>
                <button 
                    type="button" 
                    class="btn btn-outline-danger btn-sm"
                    onclick="deleteItem(${moment.valueOf()})"
                    >
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        </li>
    `
}