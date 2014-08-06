var employees = [
    {"id": 0, "title": "James", "lastName": "King", "managerId": 0, "managerName": "", "main": "President and CEO", "department": "Corporate", "cellPhone": "617-000-0001", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "pic1.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org"},
    {"id": 1, "title": "Julie", "lastName": "Taylor", "managerId": 1, "managerName": "James King", "main": "VP of Marketing", "department": "Marketing", "cellPhone": "617-000-0002", "officePhone": "781-000-0002", "email": "jtaylor@fakemail.com", "city": "Boston, MA", "pic": "pic2.jpg", "twitterId": "@fakejtaylor", "blog": "http://coenraets.org"},
    {"id": 2, "title": "Eugene", "lastName": "Lee", "managerId": 1, "managerName": "James King", "main": "CFO", "department": "Accounting", "cellPhone": "617-000-0003", "officePhone": "781-000-0003", "email": "elee@fakemail.com", "city": "Boston, MA", "pic": "pic3.jpg", "twitterId": "@fakeelee", "blog": "http://coenraets.org"},
    {"id": 3, "title": "John", "lastName": "Williams", "managerId": 1, "managerName": "James King", "main": "VP of Engineering", "department": "Engineering", "cellPhone": "617-000-0004", "officePhone": "781-000-0004", "email": "jwilliams@fakemail.com", "city": "Boston, MA", "pic": "pic4.jpg", "twitterId": "@fakejwilliams", "blog": "http://coenraets.org"},
    {"id": 4, "title": "Ray", "lastName": "Moore", "managerId": 1, "managerName": "James King", "main": "VP of Sales", "department": "Sales", "cellPhone": "617-000-0005", "officePhone": "781-000-0005", "email": "rmoore@fakemail.com", "city": "Boston, MA", "pic": "pic5.jpg", "twitterId": "@fakermoore", "blog": "http://coenraets.org"},
    {"id": 5, "title": "Paul", "lastName": "Jones", "managerId": 4, "managerName": "John Williams", "main": "QA Manager", "department": "Engineering", "cellPhone": "617-000-0006", "officePhone": "781-000-0006", "email": "pjones@fakemail.com", "city": "Boston, MA", "pic": "pic6.jpg", "twitterId": "@fakepjones", "blog": "http://coenraets.org"},
    {"id": 6, "title": "Paula", "lastName": "Gates", "managerId": 4, "managerName": "John Williams", "main": "Software Architect", "department": "Engineering", "cellPhone": "617-000-0007", "officePhone": "781-000-0007", "email": "pgates@fakemail.com", "city": "Boston, MA", "pic": "pic7.jpg", "twitterId": "@fakepgates", "blog": "http://coenraets.org"},
    {"id": 7, "title": "Lisa", "lastName": "Wong", "managerId": 2, "managerName": "Julie Taylor", "main": "Marketing Manager", "department": "Marketing", "cellPhone": "617-000-0008", "officePhone": "781-000-0008", "email": "lwong@fakemail.com", "city": "Boston, MA", "pic": "Lisa_Wong.jpg", "twitterId": "@fakelwong", "blog": "http://coenraets.org"},
    {"id": 8, "title": "Gary", "lastName": "Donovan", "managerId": 2, "managerName": "Julie Taylor", "main": "Marketing Manager", "department": "Marketing", "cellPhone": "617-000-0009", "officePhone": "781-000-0009", "email": "gdonovan@fakemail.com", "city": "Boston, MA", "pic": "Gary_Donovan.jpg", "twitterId": "@fakegdonovan", "blog": "http://coenraets.org"},
    {"id": 9, "title": "Kathleen", "lastName": "Byrne", "managerId": 5, "managerName": "Ray Moore", "main": "Sales Representative", "department": "Sales", "cellPhone": "617-000-0010", "officePhone": "781-000-0010", "email": "kbyrne@fakemail.com", "city": "Boston, MA", "pic": "Kathleen_Byrne.jpg", "twitterId": "@fakekbyrne", "blog": "http://coenraets.org"},
    {"id": 10, "title": "Amy", "lastName": "Jones", "managerId": 5, "managerName": "Ray Moore", "main": "Sales Representative", "department": "Sales", "cellPhone": "617-000-0011", "officePhone": "781-000-0011", "email": "ajones@fakemail.com", "city": "Boston, MA", "pic": "Amy_Jones.jpg", "twitterId": "@fakeajones", "blog": "http://coenraets.org"},
    {"id": 11, "title": "Steven", "lastName": "Wells", "managerId": 4, "managerName": "John Williams", "main": "Software Architect", "department": "Engineering", "cellPhone": "617-000-0012", "officePhone": "781-000-0012", "email": "swells@fakemail.com", "city": "Boston, MA", "pic": "Steven_Wells.jpg", "twitterId": "@fakeswells", "blog": "http://coenraets.org"}
];

exports.findAll = function (req, res, next) {
    console.log("Find all");
    res.send(employees);
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(employees[id]);
};