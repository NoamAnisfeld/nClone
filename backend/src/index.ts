import express from "express";

const app = express();

app.use((req, res, next) => {
    console.log(req.url);
    next();
})

app.get('/', (req, res) => {
    res.send('response');
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});