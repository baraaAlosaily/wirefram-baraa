// var useName = prompt('Welcome to banana website please enter ASAC', 'ASAC');
// alert = useName;

// var sumOf = prompt('Enter sum of 2 and 4', '6'),
//     alert = sumOf;

var useName = prompt('Welcome to banana website please enter ASAC', 'ASAC');
alert = useName;

var sumOf = prompt('Enter sum of 2 and 4', '6'),
    alert = sumOf;

var baNana = prompt('please enter number of banana names you know')
alert = baNana;

if (baNana < 0) {
    document.write('Good');
}
else if (baNana >= 0) {
    document.write('V.good');
}
else {
    document.write('Enter to know more about banana');
}

var bananaType = prompt("please enter the type of banana");
while (bananaType !== 'appleBanana' && bananaType !== 'redBanana') {
    bananaType = prompt("Please choose appleBanana or redBanana");
}
var numberOfbanana = prompt("please enter the number of banana");
for (var i = 0; i < numberOfbanana; i++) {
    if (bananaType == 'appleBanana') {
        document.write('<img src="https://i.ytimg.com/vi/K8YsfVZxavk/maxresdefault.jpg"/>');
    }
    else {
        document.write('<img src="https://sc04.alicdn.com/kf/UTB86qkLlrPJXKJkSafSq6yqUXXaQ.jpg"/>');
    }
}
