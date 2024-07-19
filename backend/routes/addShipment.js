import db from "../database/db.js";

function addShipment(req, res) {
    const { shipment_date, status, actual_arrival_date, est_arrival_date } = req.body;

    const query = `
        INSERT INTO shipments (shipment_date, status, actual_arrival_date, est_arrival_date)
        VALUES (?, ?, ?, ?)
    `;

    db.query(query, [shipment_date, status, actual_arrival_date, est_arrival_date], (err, results) => {
        if (err) {
            console.error('Error adding shipment: ', err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Internal Server Error' }));
            return;
        }

        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Shipment added successfully!' }));
    });
}

export default addShipment;
