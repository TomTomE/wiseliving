
var express = require('express'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    employees = require('./routes/employees'),
    app = express();

app.use(bodyParser());          // pull information from html in POST
app.use(methodOverride());      // simulate DELETE and PUT

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/category', employees.findAll);
app.get('/category/:id', employees.findById);
app.get('/category/pics/:pic', employees.findImgById);

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});