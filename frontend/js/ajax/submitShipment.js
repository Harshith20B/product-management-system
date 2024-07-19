async function submitShipment(event) {
    event.preventDefault();

    const formData = {
        shipment_date: document.getElementById('shipment-date').value,
        status: document.getElementById('status').value,
        actual_arrival_date: document.getElementById('actual-arrival-date').value,
        est_arrival_date: document.getElementById('estimated-arrival-date').value
    };

    try {
        const response = await fetch('http://localhost:3000/shipments', {
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
        alert('Shipment added successfully!');
        document.getElementById('shipment-form').reset();
    } catch (error) {
        console.error('Error adding shipment:', error);
        alert('Failed to add shipment.');
    }
}

export default submitShipment;