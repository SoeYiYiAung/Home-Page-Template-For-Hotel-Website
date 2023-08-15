function increment() {
    var input = document.getElementById('quantity');
    input.value = parseInt(input.value) + 1;
}

function decrement() {
    var input = document.getElementById('quantity');
    var currentValue = parseInt(input.value);
    if (currentValue > 0) {
        input.value = currentValue - 1;
    }
}

function increment2() {
    var input = document.getElementById('quantity2');
    input.value = parseInt(input.value) + 1;
}

function decrement2() {
    var input = document.getElementById('quantity2');
    var currentValue = parseInt(input.value);
    if (currentValue > 0) {
        input.value = currentValue - 1;
    }
}