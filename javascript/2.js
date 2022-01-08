function increment(para1) {
    let span = para1.parentElement.children[1];

    let prevValue = span.innerHTML;
    let newValue = parseInt(prevValue) + 1;

    span.innerHTML = newValue;
}
function decrement(para1) {
    let span = para1.parentElement.children[3];

    let prevValue = span.innerHTML;
    let newValue = parseInt(prevValue) + 1;

    span.innerHTML = newValue;
}
