const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
];

app.get('/', (req, res) => {
    const message = '<h4>No route is defined for \'/\'</h4>'

    res.send(message);
})

app.get('/api/customers', (req, res) => {

    res.json(customers);
});

app.post('/api/customers', (req, res) => {
    // const newCustomer = {
    //   id: customers.length + 1,
    //   firstName: req.body.firstName,
    //   lastName: req.body.lastName
    // }

    // customers.push(newCustomer);
    // res.json(newCustomer);


    // Password validation
    // Insert passport JS here

    const retval = {success: req.body.pass === 'avocado'}

    res.json(retval);

});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
