function bgChanger() {
  if (this.scrollY > this.innerHeight / 1.5) {
    /* we are adding the bg-active class to the body */

    document.body.classList.add("bg-active");
  } else {
    document.body.classList.remove("bg-active");
  }
}

window.addEventListener("scroll", bgChanger);
