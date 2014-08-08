var fs = require('fs');

var fakeContents = "Lorem ipsum dolor sit amet, dolores scriptorem ius ut," +
    " integre insolens sea an, vidit habeo insolens quo id";

var categories = [
    {"id": 0, "title": "James", "pic": "pic1.jpg"},
    {"id": 1, "title": "Julie", "pic": "pic2.jpg"},
    {"id": 2, "title": "Eugene", "pic": "pic3.jpg"},
    {"id": 3, "title": "John", "pic": "pic4.jpg"},
    {"id": 4, "title": "Ray", "pic": "pic5.jpg"},
    {"id": 5, "title": "Paul", "pic": "pic6.jpg"},
    {"id": 6, "title": "Paula", "pic": "pic7.jpg"}
];

var articles = [
    {"category" : "0", "title": "Lorem ipsum", "writer": "dolor sit amet", "contents": fakeContents, "pic": ""},
    {"category" : "0", "title": "Lorem ipsum", "writer": "dolor sit amet", "contents": fakeContents, "pic": ""},
    {"category" : "0", "title": "Lorem ipsum", "writer": "dolor sit amet", "contents": fakeContents, "pic": ""},
    {"category" : "0", "title": "Lorem ipsum", "writer": "dolor sit amet", "contents": fakeContents, "pic": ""},
    {"category" : "0", "title": "Lorem ipsum", "writer": "dolor sit amet", "contents": fakeContents, "pic": ""},
    {"category" : "0", "title": "Lorem ipsum", "writer": "dolor sit amet", "contents": fakeContents, "pic": ""},
    {"category" : "1", "title": "Lorem ipsum", "writer": "dolor sit amet", "contents": fakeContents, "pic": ""},
    {"category" : "1", "title": "Lorem ipsum", "writer": "dolor sit amet", "contents": fakeContents, "pic": ""},
    {"category" : "1", "title": "Lorem ipsum", "writer": "dolor sit amet", "contents": fakeContents, "pic": ""},
    {"category" : "2", "title": "Lorem ipsum", "writer": "dolor sit amet", "contents": fakeContents, "pic": ""},
    {"category" : "2", "title": "Lorem ipsum", "writer": "dolor sit amet", "contents": fakeContents, "pic": ""},
    {"category" : "3", "title": "Lorem ipsum", "writer": "dolor sit amet", "contents": fakeContents, "pic": ""},
    {"category" : "3", "title": "Lorem ipsum", "writer": "dolor sit amet", "contents": fakeContents, "pic": ""},
    {"category" : "3", "title": "Lorem ipsum", "writer": "dolor sit amet", "contents": fakeContents, "pic": ""},
    {"category" : "3", "title": "Lorem ipsum", "writer": "dolor sit amet", "contents": fakeContents, "pic": ""},
    {"category" : "3", "title": "Lorem ipsum", "writer": "dolor sit amet", "contents": fakeContents, "pic": ""},
    {"category" : "4", "title": "Lorem ipsum", "writer": "dolor sit amet", "contents": fakeContents, "pic": ""}
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
    var id = req.params.pic;

    fs.readFile("./assets/pic/" + id, "binary", function(error, file) {
        if(error) {
            console.log("Connection Fail.");
            res.writeHead(500, {"Content-Type": "text/plain"});
            res.write(error + "\n" + req);
            res.end();
        } else {
            console.log("Send Image");
            res.writeHead(200, {"Content-Type": "image/jpg"});
            res.write(file, "binary");
            res.end();
        }
    });
};