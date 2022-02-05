// const express = require("express");
// const port = 3000;
// const app = express();

// app.get("/",(req,res) => {
//     res.send("Hello World")
// })

// app.listen(port, err => {
//     if (err) {
//         return console.log(`Błąd ${err}`);
//     }
//     console.log(`Strona działa na porcie${port}`);
// });
const functions = require('./functions');
functions.sayHello(),
functions.add(10,15);

const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const path = require("path");

app.set("view engine", "hbs");

app.use("/assets", express.static(path.join(__dirname, "./assets")));
app.use("/views/js", express.static(path.join(__dirname, "./views/js")));

app.get("/",(req,res) =>{
    res.render("index", {
        pageTile: "Zajecia dotyczace NodeJS",
        result: functions.add(10,15)
    });
});

app.get("/",(req,res) =>{
    res.render("index");
})

app.get("./about",(req,res) =>{
res.render("about");
});

app.get("/about/marcin",(req,res) =>{
    res.send("<h1> Strona o mnie </h1> <h3> Marcin Dłubis </h3> <div> lorem </div>");
    });

app.listen(port, err => {
if (err) {
return console.log(`Błąd ${err}`);
}
console.log(`Strona działa na porcie ${port}`);
});