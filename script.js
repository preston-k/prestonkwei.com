/** @type {typeof import("./static.json")} */
const data = await fetch("/static.json").then((x) => x.json());

const version = data.version;

function signinStat() {
  const edit = document.getElementById('signinstat');
  setTimeout(() => {
    edit.style.top = '10px';
    setTimeout(() => {
      edit.style.top = '-100%';
    }, 5000);
  }, 10);
}
function init() {
  console.log("PrestonKwei.com");
  console.log("JS Sucessfully Loaded");
  console.log("Version " + version);
  console.log(data);
  const urlParams = new URLSearchParams(window.location.search);
  const status = urlParams.get('status');
  if (status == 'loggedin') {
    signinStat()
    if (status !== null) {
      const newUrl = window.location.pathname;
      history.pushState({}, '', newUrl);
  }
  }
}


let mobilemenu = false
document.querySelector('#mobile-menu').addEventListener('click', () => {
  console.log('Mobile Menu')
  if (mobilemenu) {
    console.log(mobilemenu)
    mobilemenu = false
    document.querySelector('#mobile-menu-select').style.display = 'none'
  } else {
    console.log(mobilemenu)
    mobilemenu = true
    document.querySelector('#mobile-menu-select').style.display = 'block'
  }
})
// LEAVE AT BOTTOM OF PAGE
init();