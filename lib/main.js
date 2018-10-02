"use strict";

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

document.addEventListener("DOMContentLoaded", function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"));

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function (el) {
      el.addEventListener("click", function () {
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

// let testimony = console.log("testimony: ", testimony);
var testimonyQuote = document.querySelector("#testimony-quote");
var testimonyName = document.querySelector("#testimony-name");
var blockquote = document.querySelector(".blockquote");

// const testimonys = getTestimonys();
// console.log("testimonys: ", testimonys);

async function getTestimonys() {
  return await fetch("../testimony.json").then(function (res) {
    return res.json();
  }).then(function (data) {
    return data;
  });
}

async function setTestimony() {
  var arr = await getTestimonys();
  var rendomNum = Math.random() * arr.length | 0;

  var html = setTestimonyTemp(arr);
  blockquote.innerHTML = html;
  // testimonyQuote.innerText = arr[rendomNum].Testimony;
  // testimonyName.innerText = arr[rendomNum].Name;
}
setTestimony();

var interval = 3000;
randomQuote();
function randomQuote() {
  var rendomNum = Math.random() * 4 | 0;
  var ele = document.querySelector("#testimony-" + rendomNum);
  var eleShow = document.querySelector(".show");
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
  var html = "";
  html += arr.reduce(function (pre, cur, i) {
    return pre += "\n    <div class=\"columns\" id=\"testimony-" + i + "\">\n      <div class=\"column is-10 is-offset-1\">\n        <i class=\"fas fa-quote-left\"></i>\n        <blockquote class=\"quote\" id=\"\">\n          " + cur.testimony + "\n        </blockquote>\n        <p class=\"has-text-right\" id=\"\">\n          " + cur.name + "\n        </p>\n      </div>\n    </div>";
  }, "");
  return html;
}