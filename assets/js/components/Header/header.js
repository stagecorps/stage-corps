(() => {
  const header = document.getElementById("header");
  const currentPage = window.location.pathname.split("/").pop();
  const isIndexPage = currentPage === "index.html" || currentPage == "";
  const isDeployed = window.location.hostname !== "localhost";
  header.innerHTML = `
<div class="container position-relative d-flex align-items-center">

    <a href=${isDeployed ? "/stage-corps/index.html" : isIndexPage ? "/index.html" : "../index.html"} class="logo d-flex align-items-center me-auto">
        <img src=${isIndexPage ? "assets/img/logo.png" : "../assets/img/logo.png"} style="background-color: white; border-radius: 50%;" alt="">
        <h1 class="sitename">Stage Corps</h1>
    </a>

    <nav id="navmenu" class="navmenu">
        <ul>
            <li><a href=${isDeployed ? "/stage-corps/index.html" : isIndexPage ? "/#hero" : "../index.html"}>Home</a></li>
            <li class="dropdown"><a href=${isDeployed ? "/stage-corps/index.html#about" : isIndexPage ? "/#about" : "../index.html#about"}><span>About</span> <i
                        class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                    <li><a href=${isDeployed ? "/stage-corps/pages/team.html" : isIndexPage ? "/pages/team.html" : "/team.html"}>Team</a></li>
                    <li><a href=${isIndexPage ? "/pages/testimonials.html" : "/testimonials.html"}>Testimonials</a></li>
                </ul>
            </li>
            <li class="dropdown"><a href=${isIndexPage ? "/pages/rentals.html" : "/rentals.html"}><span>Services</span> <i
                        class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                    <li><a href=${isIndexPage ? "/pages/light-design.html" : "/light-design.html"}>Light Design</a></li>
                    <li><a href=${isIndexPage ? "/pages/scenic-design.html" : "/scenic-design.html"}>Scenic Design</a></li>
                    <li><a href=${isIndexPage ? "/pages/labor.html" : "/labor.html"}>Labor</a></li>
                    <li><a href=${isIndexPage ? "/pages/rentals.html" : "/rentals.html"}>Rentals</a></li>
                    <li><a href=${isIndexPage ? "/pages/sales.html" : "/sales.html"}>Sales</a></li>
                </ul>
            </li>
            <li><a href=${isIndexPage ? "/pages/portfolio.html" : "/portfolio.html"}>Portfolio</a></li>
            <li><a href=${isIndexPage ? "/pages/contact.html" : "/contact.html"}>Contact</a></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
    </nav>

    <div class="header-social-links">
        <a href="https://www.facebook.com/StageCorps" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="https://www.instagram.com/stagecorps/" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="https://www.linkedin.com/company/stage-corps-llc/" class="linkedin"><i class="bi bi-linkedin"></i></a>
        <a href="tel:2145753750" class="phone"><i class="bi bi-telephone"></i></a>
    </div>

</div>
  `;

  const navLinks = document.querySelectorAll("#navmenu a");
  switch (currentPage) {
    case "index.html":
      navLinks[0].classList.add("active");
      break;
    case "team.html":
      navLinks[1].classList.add("active");
      break;
    case "testimonials.html":
      navLinks[1].classList.add("active");
      break;
    case "light-design.html":
      navLinks[4].classList.add("active");
      break;
    case "scenic-design.html":
      navLinks[4].classList.add("active");
      break;
    case "labor.html":
      navLinks[4].classList.add("active");
      break;
    case "rentals.html":
      navLinks[4].classList.add("active");
      break;
    case "sales.html":
      navLinks[4].classList.add("active");
      break;
    case "portfolio.html":
      navLinks[10].classList.add("active");
      break;
    case "contact.html":
      navLinks[11].classList.add("active");
      break;
    default:
      break;
  }
})();