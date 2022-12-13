const one = document.querySelector(".one");
const two = document.querySelector(".two");
const five = document.querySelector(".five");
const six = document.querySelector(".six");

const threeTop = document.querySelector(".three-top");
const fourTop = document.querySelector(".four-top");

const threeBottom = document.querySelector(".three-bottom");
const fourBottom = document.querySelector(".four-bottom");

one.onclick = function() {
    one.classList.add("active");
    two.classList.remove("active");
    five.classList.remove("active");
    six.classList.remove("active");

    threeTop.classList.remove("active");
    fourTop.classList.remove("active");

    threeBottom.classList.remove("active");
    fourBottom.classList.remove("active");
}

two.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    five.classList.remove("active");
    six.classList.remove("active");

    threeTop.classList.remove("active");
    fourTop.classList.remove("active");

    threeBottom.classList.remove("active");
    fourBottom.classList.remove("active");
}
threeTop.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    five.classList.remove("active");
    six.classList.remove("active");

    threeTop.classList.add("active");
    fourTop.classList.remove("active");
}
fourTop.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    five.classList.remove("active");
    six.classList.remove("active");

    threeTop.classList.add("active");
    fourTop.classList.add("active");
}
threeBottom.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    five.classList.remove("active");
    six.classList.remove("active");

    threeBottom.classList.add("active");
    fourBottom.classList.remove("active");
}
fourBottom.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    five.classList.remove("active");
    six.classList.remove("active");

    threeBottom.classList.add("active");
    fourBottom.classList.add("active");
}
five.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    five.classList.add("active");
    six.classList.remove("active");

    threeTop.classList.add("active");
    fourTop.classList.add("active");

    threeBottom.classList.add("active");
    fourBottom.classList.add("active");
}
six.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    five.classList.add("active");
    six.classList.add("active");

    threeTop.classList.add("active");
    fourTop.classList.add("active");

    threeBottom.classList.add("active");
    fourBottom.classList.add("active");
}