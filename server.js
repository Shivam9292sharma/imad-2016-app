var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleone={
    title:"Article one shivam sharma",
    heading :"article one",
    date: "sept 18 2016",
    content:`<p>
            hello ,my nae is shivam sharma.this is my first web app program
            happy journey.
        </p>
        <p>
            hello ,my nae is shivam sharma.this is my first web app program
            happy journey.
        </p>
        <p>
            hello ,my nae is shivam sharma.this is my first web app program
            happy journey.
        </p>`
        };
        
    function createtemplate(data){
        var title = data,title;
        var date=data,date;
        var heading=data,heading;
        varcontent=data,content;
        
    var htmltemplate=`
    <html>
    <head>
        <title>
            $(title)
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">HOME</a>
        </div>
        <h2>
            $(heading)
        </h2>
        <div>
            $(date)
        </div>
       $(content)
        </div>
        </body>
        </html>
        `;
        return htmltemplate;
    }
        
        app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two', function (req, res) {
    res.send(createtemplate(articleone));
});

app.get('/article-three', function (req, res) {
     res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
