"use strict";

//navbar-burger
document.addEventListener("DOMContentLoaded", function() {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger")
  );
  console.log("$navbarBurgers: ", $navbarBurgers);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function(el) {
      el.addEventListener("click", function() {
        // Get the target from the "data-target" attribute
        var target = el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

//Setting Testimony Section
var testimonyQuote = document.querySelector("#testimony-quote");
var testimonyName = document.querySelector("#testimony-name");
var blockquote = document.querySelector(".blockquote");

async function getTestimonies() {
  return await fetch("../testimony.json")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      return data;
    });
}

async function setTestimony() {
  var arr = await getTestimonies();
  var randomNum = (Math.random() * arr.length) | 0;

  var html = setTestimonyTemplate(arr);
  blockquote.innerHTML = html;
  showQuote(0);
}
setTestimony();
function setTestimonyTemplate(arr) {
  var html = "";
  html += arr.reduce(function(pre, cur, i) {
    return (pre +=
      '\n    <div class="columns" id="testimony-' +
      i +
      '">\n      <div class="column is-10 is-offset-1">\n        <i class="fas fa-quote-left"></i>\n        <blockquote class="quote" id="">\n          ' +
      cur.testimony +
      '\n        </blockquote>\n        <p class="has-text-right" id="">\n          ' +
      cur.name +
      "\n        </p>\n      </div>\n    </div>");
  }, "");
  return html;
}

function showQuote(num) {
  var ele = document.querySelector("#testimony-" + num);
  console.log("ele: ", ele);
  var eleShow = document.querySelector(".show");
  if (eleShow) {
    eleShow.classList.remove("show");
  }
  if (ele) {
    ele.classList.add("show");
  }
}

var interval = 10000;
var initial = 1;
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
