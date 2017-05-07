var React = require('react'),
    DOM = React.DOM, div = DOM.div;

module.exports = React.createClass({
    render: function(){
        var content = 'Hello World';
        return div(null, content);
    }
})