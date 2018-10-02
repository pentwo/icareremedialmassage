// gettimely button
var bookingButton = new timelyButton("icareremedialmassage", {
  dontCreateButton: true
});
var bookingRemedialButton = new timelyButton("icareremedialmassage", {
  category: "113660",
  dontCreateButton: true
});
var bookingAromaButton = new timelyButton("icareremedialmassage", {
  category: "113662",
  dontCreateButton: true
});
var bookingPregnancyButton = new timelyButton("icareremedialmassage", {
  category: "113661",
  dontCreateButton: true
});

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger")
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

// let testimony = console.log("testimony: ", testimony);
let testimonyQuote = document.querySelector("#testimony-quote");
let testimonyName = document.querySelector("#testimony-name");
let blockquote = document.querySelector(".blockquote");

// const testimonys = getTestimonys();
// console.log("testimonys: ", testimonys);

async function getTestimonys() {
  return await fetch("../testimony.json")
    .then(res => res.json())
    .then(data => data);
}

async function setTestimony() {
  let arr = await getTestimonys();
  let rendomNum = (Math.random() * arr.length) | 0;

  const html = setTestimonyTemp(arr);
  blockquote.innerHTML = html;
  // testimonyQuote.innerText = arr[rendomNum].Testimony;
  // testimonyName.innerText = arr[rendomNum].Name;
}
setTestimony();

let interval = 3000;
randomQuote();
function randomQuote() {
  let rendomNum = (Math.random() * 4) | 0;
  let ele = document.querySelector(`#testimony-${rendomNum}`);
  let eleShow = document.querySelector(".show");
  console.log("eleShow: ", eleShow);
  if (eleShow) {
    eleShow.classList.remove("show");
  }
  if (ele) {
    ele.classList.add("show");
  }
  setTimeout(randomQuote, interval);
}

function setTestimonyTemp(arr) {
  let html = ``;
  html += arr.reduce((pre, cur, i) => {
    return (pre += `
    <div class="columns" id="testimony-${i}">
      <div class="column is-10 is-offset-1">
        <i class="fas fa-quote-left"></i>
        <blockquote class="quote" id="">
          ${cur.testimony}
        </blockquote>
        <p class="has-text-right" id="">
          ${cur.name}
        </p>
      </div>
    </div>`);
  }, "");
  return html;
}