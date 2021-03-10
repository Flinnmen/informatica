// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    var mascots = [
        { name: 'Finley', organization: "FlinnMen", birth_year: 2005},
        { name: 'Hatsune Miku', organization: "Vocaloid", birth_year: 2004},
        { name: 'Asuka Langley Sohryu', organization: "Best Girl", birth_year: 2001}
    ];
    var tagline = "No programming concept is complete without a cute anime mascot.";

    res.render('pages/index', {
        mascots: mascots,
        tagline: tagline
    });
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(8080);
console.log('8080 is the magic port');