import db from "../database/db.js";

function addSupplier(req, res) {
    const { name, phone_number, address, email } = req.body;

    const query = `
        INSERT INTO suppliers (name, phone_number, address, email)
        VALUES (?, ?, ?, ?)
    `;

    db.query(query, [name, phone_number, address, email], (err, results) => {
        if (err) {
            console.error('Error adding supplier: ', err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Internal Server Error' }));
            return;
        }

        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Supplier added successfully!' }));
    });
}

export default addSupplier;