var express = require("express");
var app = express();
app.use(express.static(__dirname + '/website'));
app.get("/porasuna", (req, res) => {
    var first_name = req.query.first_name;
    var last_name = req.query.last_name;
    var gender = req.query.gender;
    var dob = req.query.dob;
    var mnumber = req.query.mnumber;
    var email = req.query.email;
    var password = req.query.password;
    var data = {
        first_name: first_name, last_name: last_name, gender: gender,
        dob: dob, mnumber: mnumber, email: email,
        password: password,
        message: "Data submitted successfully."
    };
    res.json(data);
});

app.listen(8181);
console.log("Server running at address: http://localhost:8181");