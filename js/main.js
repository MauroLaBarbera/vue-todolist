/**
 * TODO APP
 */

$(document).ready(function() {

//ARRAY CON OGGETTI GIA' INSERITI
var todoItems = [
    {
        text: 'andare al super',
        completed: false,
    },
    {
        text: 'andare al super',
        completed: true,
    },
    {
        text: 'andare al super',
        completed: false,
    },
    {
        text: 'andare al super',
        completed: true,
    },
    {
        text: 'andare al super',
        completed: false,
    },
];

//REFERENZE 
var list = $('.toDos');
var newToDo = $('.add-ToDo');
var template = $('#template li')

//RIEMPIAMO LA NOSTRA LISTA TODO
for (var i = 0; i < todoItems.length; i++ ) {
    var toDo = todoItems[i];
    console.log(todoItems[i]);

    //TEMPLATE
    var item = template.clone();
    item.find('.text').text(toDo.text);

    //AGGIUNGIAMO ALLA FINE DELLA LISTA
    list.append(item);
};
console.log(list);







    //END DOC READ
});
