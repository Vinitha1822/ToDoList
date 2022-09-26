var myNodelist = document.getElementsByTagName("LI");

var i;

for(i = 0; i < myNodelist.length; i++) {

    var span = document.createElement("SPAN");

    var txt = document.createTextNode("\u00D7");

    span.className = "close";

    span.appendChild(txt);

    myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");

var i;

for (i = 0; i < close.length; i++) {

    close[i].onclick = function () {

        var div = this.parentElement;

        div.style.display = "none";
    }
}

var list = document.querySelector('ul');

list.addEventListener('click', function(ev) {

    if (ev.target.tagName === 'LI') {

        ev.target.classList.toggle('checked');

    }

}, false);


function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}












// function addNotes() {
//     var input = document.getElementById('user_input').value;
//     if (input == ""){
//         window.alert("You must enter a value in the New Task field.");
//     }
//     else {
//         var noteList = document.getElementById('note_List');
//         noteList.innerHTML += "<li><span>" + input + "</span><button onclick='this.parentNode.parentNode.removeChild(this.parentNode)' class='delete'>Delete</button> <button class='edit' onclick='this.previousElementSibling.previousElementSibling.contentEditable = true;' >Edit</button></li>";
//     }
// }