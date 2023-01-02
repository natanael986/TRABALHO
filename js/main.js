let debugbtn = document
  .querySelector("#debugbtn")
  .addEventListener("click", function () {
    this.classList.toggle("btn-active");
  });

let mobilebtn = document
  .querySelector(".menu-mobile")
  .addEventListener("click", () => {
    const navBtns = document.querySelector(".nav-buttons");
    const nav = document.querySelector("#main-menu");

    if (navBtns.style.display === "none") {
      navBtns.classList.toggle("navBtnsMobile");
      nav.classList.toggle("navbarMobile");
    } else {
      navBtns.classList.toggle("navBtnsMobile");
      nav.classList.toggle("navbarMobile");
    }

    // if (navBtns.style.display === "none") {
    //   navBtns.style.display = "flex";
    //   nav.style.paddingBottom = "150px";
    // } else {
    //   navBtns.style.display = "none";
    //   nav.style.paddingBottom = "32px";
    // }
  });
