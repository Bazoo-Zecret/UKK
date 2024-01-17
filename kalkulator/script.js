let display = document.getElementById("display");

function isi(value) {
    display.value += value;
}

function bersihkan() {
    display.value = "";
}

function hapus() {
    display.value = display.value.slice(0, -1);
}
         
function hasil() {
    try {
       display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
