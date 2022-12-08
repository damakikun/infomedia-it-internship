const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");

const topOne = document.querySelector(".top-one");
const topTwo = document.querySelector(".top-two");
const topThree = document.querySelector(".top-three");

const bottomOne = document.querySelector(".bottom-one");
const bottomTwo = document.querySelector(".bottom-two");
const bottomThree = document.querySelector(".bottom-three");

one.onclick = function() {
    one.classList.add("active");
    two.classList.remove("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");

    topOne.classList.remove("active");
    topTwo.classList.remove("active");
    topThree.classList.remove("active");

    bottomOne.classList.remove("active");
    bottomTwo.classList.remove("active");
    bottomThree.classList.remove("active");
}

two.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");

    topOne.classList.remove("active");
    topTwo.classList.remove("active");
    topThree.classList.remove("active");

    bottomOne.classList.remove("active");
    bottomTwo.classList.remove("active");
    bottomThree.classList.remove("active");
}
three.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.remove("active");
    five.classList.remove("active");
}
four.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.add("active");
    five.classList.remove("active");

    topOne.classList.add("active");
    topTwo.classList.add("active");
    topThree.classList.add("active");

    bottomOne.classList.add("active");
    bottomTwo.classList.add("active");
    bottomThree.classList.add("active");
}
five.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.add("active");
    five.classList.add("active");

    topOne.classList.add("active");
    topTwo.classList.add("active");
    topThree.classList.add("active");

    bottomOne.classList.add("active");
    bottomTwo.classList.add("active");
    bottomThree.classList.add("active");
}
topOne.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");

    topOne.classList.add("active");
    topTwo.classList.remove("active");
    topThree.classList.remove("active");
}
topTwo.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    four.classList.remove("active");

    topOne.classList.add("active");
    topTwo.classList.add("active");
    topThree.classList.remove("active");
}
topThree.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");

    topOne.classList.add("active");
    topTwo.classList.add("active");
    topThree.classList.add("active");
}
bottomOne.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");

    bottomOne.classList.add("active");
    bottomTwo.classList.remove("active");
    bottomThree.classList.remove("active");
}
bottomTwo.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    four.classList.remove("active");

    bottomOne.classList.add("active");
    bottomTwo.classList.add("active");
    bottomThree.classList.remove("active");
}
bottomThree.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");

    bottomOne.classList.add("active");
    bottomTwo.classList.add("active");
    bottomThree.classList.add("active");
}