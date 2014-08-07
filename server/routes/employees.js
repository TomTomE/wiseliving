var fs = require('fs');

var categories = [
    {"id": 0, "title": "James", "lastName": "King", "managerId": 0, "managerName": "", "main": "President and CEO", "department": "Corporate", "cellPhone": "617-000-0001", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "pic1.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org"},
    {"id": 1, "title": "Julie", "lastName": "Taylor", "managerId": 1, "managerName": "James King", "main": "VP of Marketing", "department": "Marketing", "cellPhone": "617-000-0002", "officePhone": "781-000-0002", "email": "jtaylor@fakemail.com", "city": "Boston, MA", "pic": "pic2.jpg", "twitterId": "@fakejtaylor", "blog": "http://coenraets.org"},
    {"id": 2, "title": "Eugene", "lastName": "Lee", "managerId": 1, "managerName": "James King", "main": "CFO", "department": "Accounting", "cellPhone": "617-000-0003", "officePhone": "781-000-0003", "email": "elee@fakemail.com", "city": "Boston, MA", "pic": "pic3.jpg", "twitterId": "@fakeelee", "blog": "http://coenraets.org"},
    {"id": 3, "title": "John", "lastName": "Williams", "managerId": 1, "managerName": "James King", "main": "VP of Engineering", "department": "Engineering", "cellPhone": "617-000-0004", "officePhone": "781-000-0004", "email": "jwilliams@fakemail.com", "city": "Boston, MA", "pic": "pic4.jpg", "twitterId": "@fakejwilliams", "blog": "http://coenraets.org"},
    {"id": 4, "title": "Ray", "lastName": "Moore", "managerId": 1, "managerName": "James King", "main": "VP of Sales", "department": "Sales", "cellPhone": "617-000-0005", "officePhone": "781-000-0005", "email": "rmoore@fakemail.com", "city": "Boston, MA", "pic": "pic5.jpg", "twitterId": "@fakermoore", "blog": "http://coenraets.org"},
    {"id": 5, "title": "Paul", "lastName": "Jones", "managerId": 4, "managerName": "John Williams", "main": "QA Manager", "department": "Engineering", "cellPhone": "617-000-0006", "officePhone": "781-000-0006", "email": "pjones@fakemail.com", "city": "Boston, MA", "pic": "pic6.jpg", "twitterId": "@fakepjones", "blog": "http://coenraets.org"},
    {"id": 6, "title": "Paula", "lastName": "Gates", "managerId": 4, "managerName": "John Williams", "main": "Software Architect", "department": "Engineering", "cellPhone": "617-000-0007", "officePhone": "781-000-0007", "email": "pgates@fakemail.com", "city": "Boston, MA", "pic": "pic7.jpg", "twitterId": "@fakepgates", "blog": "http://coenraets.org"}
];

exports.findAll = function (req, res, next) {
    console.log("Find all");
    res.send(categories);
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(categories[id]);
};

exports.findImgById = function (req, res, next) {
    console.log("Find Image By Id");
    var id = req.params.pic;
    console.log(req);
    fs.readFile("./assets/pic/" + id, "binary", function(error, file) {
        if(error) {
            res.writeHead(500, {"Content-Type": "text/plain"});
            res.write(error + "\n" + req);
            res.end();
        } else {
            res.writeHead(200, {"Content-Type": "image/jpg"});
            res.write(file, "binary");
            res.end();
        }
    });
};