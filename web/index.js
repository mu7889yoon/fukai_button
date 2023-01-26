const { Router } = require('express');
const express = require('express')
const app = express()
const request = require('request')
const port = 80


app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('index')
})

app.get("/fukai", (req, res) => {
    const options = {
	method: "GET",
	url: "http://back:8100/fukai",
    };
    request(options, (error, response, body) => {
    if (error) throw new Error(error);
    res.send(body);
    });
});

app.use(express.static("public"));
app.listen(80, () => {});