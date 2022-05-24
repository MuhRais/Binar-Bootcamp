const express = require ('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.status(200).json({msg : 'berhasil menambahkan produk'});
})

app.get('/product', (req, res) => {
    res.status(200).json([
                {
                  "id": "001",
                  "name": "Indomi Goreng Original",
                  "price": 1900
                },
                {
                  "id": "002",
                  "name": "Indomi Rebus Original",
                  "price": 1500
                },
                {
                  "id": "002",
                  "name": "Indomi Goreng Rasa Soto Bebek",
                  "price": 2000
                },
                {
                  "id": "003",
                  "name": "Indomi Goreng Rasa Nasi Goreng",
                  "price": 2000
                },
                {
                  "id": "004",
                  "name": "Indomi Rebus Rasa Mie Rebus",
                  "price": 1800
                },
                {
                  "id": "005",
                  "name": "Indomi Rebus Rasa Nano-Nano",
                  "price": 2000
                }
              ]
        );
})

app.post('/', (req, res) => {
    res.send({msg :'berhasil menambahkan product'});
})

app.put('/', (req, res) => {
    res.send({msg :'berhasil mengubah product'});
})

app.patch('/', (req, res) => {
    res.send('success post to localhost');
})

app.delete('/', (req, res) => {
    res.send({msg:'berhasil menghapus product'});
})


app.listen(PORT, () => {
 console.log('server is running port:', PORT);

})