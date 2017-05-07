//import {DatePicker} from 'antd';

var express = require('express');
var app = express();

var React = require('react'),
    ReactDOMServer = require('react-dom/server');

var Appp = React.createFactory(require('./Appp'));

app.get('/', function (req, res) {
    var html = ReactDOMServer.renderToStaticMarkup(
        React.DOM.body(
            null,
            React.DOM.div({id: 'root',
                dangerouslySetInnerHTML: {
                    __html: ReactDOMServer.renderToStaticMarkup(Appp())
                }
            })
        )
        //ReactDOM.render(<DatePicker />, mountNode);
    );
  res.send(html);
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})