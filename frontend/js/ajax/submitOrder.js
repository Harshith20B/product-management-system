async function submitOrder(event) {
    event.preventDefault();

    const formData = {
        order_date: document.getElementById('order-date').value,
        order_time: document.getElementById('order-time').value,
        delivery_date: document.getElementById('delivery-date').value,
        quantity_ordered: document.getElementById('quantity-ordered').value,
        total_amount: document.getElementById('total-amount').value,
        shipment_id: document.getElementById('shipment-id').value,
        supplier_id: document.getElementById('supplier-id').value,
        customer_id: document.getElementById('customer-id').value
    };

    try {
        const response = await fetch('http://localhost:3000/orders', {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        alert('Order added successfully!');
        document.getElementById('order-form').reset();
    } catch (error) {
        console.error('Error adding order:', error);
        alert('Failed to add order.');
    }
}

export default submitOrder;
