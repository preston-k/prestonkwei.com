let p1 = document.querySelector('#num1')
let p2 = document.querySelector('#num2')
let p3 = document.querySelector('#num3')
let p4 = document.querySelector('#num4')
p1.addEventListener("input", () => {
  if (p1.value != "") {
    p2.focus();
  } else {
  }
});
p2.addEventListener("input", () => {
  if (p2.value != "") {
    p3.focus();
  } else {
    p1.focus();
  }
});
p3.addEventListener("input", () => {
  if (p3.value != "") {
    p4.focus();
  } else {
    p2.focus();
  }
});
p4.addEventListener("input", () => {
  if (p4.value != "") {
    p4.focus();
  } else {
    p3.focus();
  }
});