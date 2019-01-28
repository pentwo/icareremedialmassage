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

//navbar-burger
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

//Setting Testimony Section
let testimonyQuote = document.querySelector("#testimony-quote");
let testimonyName = document.querySelector("#testimony-name");
let blockquote = document.querySelector(".blockquote");

async function getTestimonies() {
  return await fetch("../testimony.json")
    .then(res => res.json())
    .then(data => data);
}

async function setTestimony() {
  let arr = await getTestimonies();
  let randomNum = (Math.random() * arr.length) | 0;

  const html = setTestimonyTemplate(arr);
  blockquote.innerHTML = html;
  showQuote(0);
}
setTestimony();
function setTestimonyTemplate(arr) {
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

function showQuote(num) {
  let ele = document.querySelector(`#testimony-${num}`);

  let eleShow = document.querySelector(".show");
  if (eleShow) {
    eleShow.classList.remove("show");
  }
  if (ele) {
    ele.classList.add("show");
  }
}

let interval = 15000;
let initial = 1;
randomQuote();
function randomQuote() {
  // let randomNum = (Math.random() * 4) | 0;
  if (initial > 3) {
    initial = 0;
  }
  showQuote(initial);
  initial++;
  setTimeout(randomQuote, interval);
}
