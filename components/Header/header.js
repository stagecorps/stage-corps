(function () {
  const header = document.getElementById("header");
  const container = document.createElement("div");
  container.classList = "container position-relative d-flex align-items-center";
  header.appendChild(container);

  const logo = document.createElement("a");
  logo.href = window.location.pathname.split('/')[1] == 'pages' ? "../index.html" : "index.html";
  logo.classList = "logo d-flex align-items-center me-auto";
  const logoImage = document.createElement("img");
  logoImage.src = "assets/img/logo.png";
  logoImage.style.backgroundColor = "white";
  logoImage.style.borderRadius = "50%";

  const h1 = document.createElement("h1");
  h1.classList = "sitename";
  h1.textContent = "Stage Corps";
  logo.appendChild(logoImage);
  logo.appendChild(h1);
  container.appendChild(logo);

  const navmenu = document.createElement("nav");
  navmenu.id = "navmenu";
  navmenu.classList = "navmenu";
  const ul = document.createElement("ul");
  const navItems = [
    {
      text: "Home",
      href: window.location.pathname.split('/')[1] == 'pages' ? "../index.html#hero" : "index.html#hero"
    },
    {
      text: "About",
      href: window.location.pathname.split('/')[1] == 'pages' ? "../index.html#about" : "index.html#about",
      dropdown: [
        { text: "Team", href: "team.html" },
        { text: "Testimonials", href: "testimonials.html" }
      ]
    },
    {
      text: "Services",
      href: "index.html#services",
      dropdown: [
        { text: "Light Design", href: "light-design.html" },
        { text: "Scenic Design", href: "scenic-design.html" },
        { text: "Labor", href: "labor.html" },
        { text: "Rentals", href: "rentals.html" },
        { text: "Sales", href: "sales.html" }
      ]
    },
    {
      text: "Portfolio",
      href: "portfolio.html"
    },
    {
      text: "Contact",
      href: "contact.html"
    }
  ];

  navItems.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.href;
    a.textContent = item.text;
    li.appendChild(a);
    ul.appendChild(li);
    if (item.dropdown) {
      li.classList.add("dropdown");
      const dropdownIcon = document.createElement("i");
      dropdownIcon.classList = "bi bi-chevron-down toggle-dropdown";
      a.appendChild(dropdownIcon);
      const dropUl = document.createElement("ul");
      item.dropdown.forEach(dropItem => {
        const dropLi = document.createElement("li");
        const dropA = document.createElement("a");
        dropA.href = dropItem.href;
        dropA.textContent = dropItem.text;
        dropLi.appendChild(dropA);
        dropUl.appendChild(dropLi);
      });
      li.appendChild(dropUl);
    }});
  navmenu.appendChild(ul);
  container.appendChild(navmenu);

    const toggleIcon = document.createElement("i");
    toggleIcon.classList = "bi bi-list mobile-nav-toggle d-xl-none";
    navmenu.appendChild(toggleIcon);

  const socialLinks = document.createElement("div");
  socialLinks.classList = "header-social-links";
  const socialItems = [
    { href: "https://www.facebook.com/StageCorps", class: "facebook", icon: "bi-facebook" },
    { href: "https://www.instagram.com/stagecorps/", class: "instagram", icon: "bi-instagram" },
    { href: "https://www.linkedin.com/company/stage-corps-llc/", class: "linkedin", icon: "bi-linkedin" },
    { href: "tel:2145753750", class: "phone", icon: "bi-telephone" }
  ];

  socialItems.forEach(item => {
    const link = document.createElement("a");
    link.href = item.href;
    link.classList = item.class;
    const icon = document.createElement("i");
    icon.classList = `bi ${item.icon}`;
    link.appendChild(icon);
    socialLinks.appendChild(link);
  });

  container.appendChild(socialLinks);

  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav ul li a");
  switch (currentPage) {
    case "team.html" || "testimonials.html":
      navLinks[1].classList.add("active");
      break;
    case "light-design.html" || "scenic-design.html" || "labor.html" || "rentals.html" || "sales.html":
      navLinks[2].classList.add("active");
      break;
    case "portfolio.html":
      navLinks[3].classList.add("active");
      break;
    case "contact.html":
      navLinks[4].classList.add("active");
      break;
    default:
      navLinks[0]?.classList.add("active");
      break;
    }
  })();