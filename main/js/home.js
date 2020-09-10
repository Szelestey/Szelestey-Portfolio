// JavaScript source code
    var btn = document.getElementById("contactBtn");
    var modal = document.getElementById("cntModal");
    var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal
    btn.onclick = function contactWindow() {
        modal.style.display = "block";
    }
// When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
// When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

