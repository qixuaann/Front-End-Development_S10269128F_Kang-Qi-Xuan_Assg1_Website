// Wait for the DOM to fully load before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Get all the increase and decrease buttons
    const increaseButtons = document.querySelectorAll('#increase-btn');
    const decreaseButtons = document.querySelectorAll('#decrease-btn');

    // Loop through each button and attach event listeners
    increaseButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Find the input element and the total price for the row
            const input = button.previousElementSibling;  // The input is just before the button
            let currentValue = parseInt(input.value);

            // Increase the quantity and update the input value
            currentValue += 1;
            input.value = currentValue;

            // Update the total price for the current item and the overall total
            updateItemTotal(button, currentValue);
            updateTotalPrice();
        });
    });

    decreaseButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Find the input element and the total price for the row
            const input = button.nextElementSibling;  // The input is just after the button
            let currentValue = parseInt(input.value);

            // Decrease the quantity, ensuring it doesn't go below 1
            if (currentValue > 1) {
                currentValue -= 1;
                input.value = currentValue;

                // Update the total price for the current item and the overall total
                updateItemTotal(button, currentValue);
                updateTotalPrice();
            }
        });
    });

    // Function to update the total price for a single item
    function updateItemTotal(button, quantity) {
        // Get the row of the product (the parent row of the button)
        const row = button.closest('tr');
        const unitPrice = parseFloat(row.cells[1].innerText.replace('$', ''));  // Get the unit price
        const totalPriceCell = row.cells[3];  // Get the cell for the total price
        const itemTotalPrice = unitPrice * quantity;  // Calculate the total price for this item

        // Update the total price for this product
        totalPriceCell.innerText = `$${itemTotalPrice.toFixed(2)}`;
    }

    // Function to update the overall total price of the cart
    function updateTotalPrice() {
        let total = 0;

        // Loop through all rows and calculate the total for all items
        const rows = document.querySelectorAll('.cart-table tbody tr');
        rows.forEach(function(row) {
            const totalPrice = parseFloat(row.cells[3].innerText.replace('$', ''));  // Get the total price for the item
            total += totalPrice;  // Add the total for this item to the overall total
        });

        // Update the overall total price in the summary
        document.querySelector('.total .price').innerText = `$${total.toFixed(2)}`;
    }
});
