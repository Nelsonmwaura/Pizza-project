function getOptions() {
    var x = document.getElementById("menu");
    var txt = "";
    var i;
    for (i = 0; i < x.length; i++) {
        txt = txt + " " + x.options[i].text;
    }
    document.getElementById("demo").innerHTML = txt;
}
function preferedToppings() {
    prefer = document.forms[0].toppings.value;
    alert("You have chosen " + prefer);
}