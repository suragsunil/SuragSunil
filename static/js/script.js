 // Function to handle deleting expenses
 function deleteExpense(expenseId) {
    // Implement logic to delete expense using expenseId
    // For example, send AJAX request to delete expense with ID expenseId
    // Update the UI after successful deletion by removing the corresponding row from the table
    const row = document.getElementById(`expense-row-${expenseId}`);
    if (row) {
        row.remove(); // Remove the row from the table
        updateTotalAmount(); // Update total amount after deletion
    }
}

// Function to calculate and display the total amount
function calculateTotalAmount() {
    let total = 0;
    const amountCells = document.querySelectorAll('#expenses-table-body td:nth-child(2)'); // Assuming Amount is in the second column
    amountCells.forEach(cell => {
        total += parseFloat(cell.textContent || 0);
    });

    const totalAmountCell = document.getElementById('total-amount');
    if (totalAmountCell) {
        totalAmountCell.textContent = total.toFixed(2); // Display total with 2 decimal places
    }
}

// Call the function to calculate and display the total amount when the page is loaded
document.addEventListener('DOMContentLoaded', calculateTotalAmount);

function updateTotalAmount() {
    // Some code...
    const totalAmountElement = document.getElementById('total-amount');
    // Some more code...

    // Reusing totalAmountElement without redeclaring it
    const newValue = totalAmountElement.textContent + ' new value';
    // Additional code...
}


// Function to calculate and update total amount
function updateTotalAmount() {
    let total = 0;
    const amountCells = document.querySelectorAll('#expenses-table-body td:nth-child(2)'); // Assuming Amount is in the second column
    amountCells.forEach(cell => {
        total += parseFloat(cell.textContent || 0);
    });
    const totalAmountCell = document.getElementById('total-amount');
    totalAmountCell.textContent = total.toFixed(2); // Display total with 2 decimal places
}

    // Loop through table rows to sum up amounts
    tableBody.querySelectorAll('tr').forEach(row => {
        const amount = parseFloat(row.querySelector('td:nth-child(2)').textContent);
        total += amount;
    });

    const totalAmountElement = document.getElementById('total-amount');
    if (totalAmountElement) {
        totalAmountElement.textContent = total.toFixed(2); // Update total amount in the UI
    }


// Add event listeners to delete buttons
document.addEventListener('DOMContentLoaded', () => {
    const deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            const expenseId = button.dataset.expenseId; // Get expense ID from dataset
            deleteExpense(expenseId);
        });
    });

    updateTotalAmount(); // Calculate and display initial total amount
});