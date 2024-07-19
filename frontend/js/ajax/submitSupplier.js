async function submitSupplier(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('supplier-name').value,
        phone_number: document.getElementById('supplier-phone').value,
        address: document.getElementById('supplier-address').value,
        email: document.getElementById('supplier-email').value,
    };

    try {
        const response = await fetch('http://localhost:3000/suppliers', {
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
        alert('Supplier added successfully!');
        document.getElementById('supplier-form').reset();
    } catch (error) {
        console.error('Error adding supplier:', error);
        alert('Failed to add supplier.');
    }
}

export default submitSupplier;