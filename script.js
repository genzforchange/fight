window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").classList.add("after-scroll");
  } else {
    document.getElementById("header").classList.remove("after-scroll");
  }
}

function scrollToSection(id, el) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  document.querySelectorAll(".fight-subtitle span").forEach((span) => {
    span.style.color = "#333";
  });
  el.style.color = el.dataset.color;
}