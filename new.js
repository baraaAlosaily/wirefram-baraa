

var userName = prompt('Welcome to banana website please enter ASAC', 'ASAC');
var sumOf = prompt('Enter sum of 2 and 4', '6');
var baNana = prompt('please enter number of banana names you know');

function banNa() {

    userName = prompt('Welcome to banana website please enter ASAC', 'ASAC');
    sumOf = prompt('Enter sum of 2 and 4', '6');
    baNana = prompt('please enter number of banana names you know');
}
banNa();


function banaNa2() {

    if (baNana < 0) {
        document.write('Good');
    }
    else if (baNana >= 0) {
        document.write('V.good');
    }
    else {
        document.write('Enter to know more about banana');
    }

}

banaNa2();



var bananaType;

function newNumber() {

    while (bananaType !== 'appleBanana' && bananaType !== 'redBanana') {
        var bananaType = prompt("Please choose appleBanana or redBanana");
    }

}

newNumber();

var numberOfbanana = prompt("please enter the number of banana");

function BarAa() {
    for (var i = 0; i < numberOfbanana; i++) {
        if (bananaType == 'appleBanana') {
            document.write('<img src="https://i.ytimg.com/vi/K8YsfVZxavk/maxresdefault.jpg"/>');
        }
        else {
            document.write('<img src="https://sc04.alicdn.com/kf/UTB86qkLlrPJXKJkSafSq6yqUXXaQ.jpg"/>');
        }
    }
}
BarAa();

















