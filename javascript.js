//"use strict";
var object = {
    name: "Duong",
    age: 23,
    eat: function () {
        return "eating"
    }
};

//object.eat()()


function literally_eating() {
    console(1)
}

var anonymous_eating = function () {
    console(2)
}

//literally_eating()
//anonymous_eating()

variable = 10

//var onclick = function () {
//  document.getElementById("submit").addEventListener(console.log(3))
//}

function get_name() {
    var name = document.getElementById("input-name").value;
    alert(name);
}

function get_age() {
    var age = document.getElementById("input-age").value;
    alert(age);
}

function get_gender() {
    var radios = document.getElementsByName('gender');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            // do whatever you want with the checked radio
            alert(radios[i].value);
            // only one radio can be logically checked, don't check the rest
            break;
        }
    }
}


function get_city() {

    // get references to select list and display text box
    var sel = document.getElementById('city');


    function getSelectedOption(sel) {
        var opt;
        for (var i = 0, len = sel.options.length; i < len; i++) {
            opt = sel.options[i];
            if (opt.selected === true) {
                break;
            }
        }
        return opt;
    }
}
