/** @type {typeof import("./static.json")} */
const data = await fetch("/static.json").then(x=>x.json());

const version = data.version
function init() {
  console.log('PrestonKwei.com')
  console.log('JS Sucessfully Loaded')
  console.log(data)
}

// LEAVE AT BOTTOM OF PAGE
init()