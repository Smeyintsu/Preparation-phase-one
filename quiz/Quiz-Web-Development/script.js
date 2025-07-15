// Create a "close" button and append it to each item list
var myNodeList = document.getElementsByTagName('li');
var i;
for (let i = 0; i < myNodeList.length; i++) {
    var span = document.createElement('SPAN');
    var txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

// Click on close button to hide the current list item
var close = document.getElementsByClassName('close');
var i;
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = 'none';
    }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('myInput').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === '') {
        alert('You must write something!');
    } else {
        document.getElementById('myUL').appendChild(li);
    }
    document.getElementById('myUL').value = '';

    var span = document.createElement('SPAN');
    var txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = 'none';
        }
    }
}

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myINPUT');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }