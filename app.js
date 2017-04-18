require('!style-loader!css-loader!./styles.css')
let people = require('./people.js');
let $ = require('jquery');

$.each(people, function(key,value){
    $('body').append('<h1>'+people[key].name+'</h1>');
})
