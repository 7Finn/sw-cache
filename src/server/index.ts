import HtmlParser from './core/html-parser';

let parser = new HtmlParser();
parser.parseHtml(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div></div>
</body>
</html>`
)

console.log(parser.toString());

module.exports.HtmlParser = HtmlParser