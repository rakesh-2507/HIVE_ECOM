fetch("/menu.html") // always absolute path from root
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("menu-placeholder").innerHTML = html;

    let currentPath = window.location.pathname;

    // Normalize `/` and `/index.html`
    if (currentPath === "/" || currentPath === "/index.html") {
      currentPath = "/index.html";
    }

    // Highlight top menu
    document.querySelectorAll(".horizontal-menu a").forEach((link) => {
      const href = link.getAttribute("href");
      if (
        href === currentPath ||
        (href === "/" && currentPath === "/index.html")
      ) {
        link.classList.add("active");
      }
    });

    // Highlight side menu
    document.querySelectorAll(".sidenav a").forEach((link) => {
      const href = link.getAttribute("href");
      if (
        href === currentPath ||
        (href === "/" && currentPath === "/index.html")
      ) {
        link.classList.add("active");
        const parentCollapse = link.closest(".collapse");
        if (parentCollapse) parentCollapse.classList.add("show");
      }
    });

    document.querySelectorAll('[data-bs-toggle="collapse"]').forEach((el) => {
      el.addEventListener("click", function () {
        const target = document.querySelector(
          el.getAttribute("data-bs-target")
        );
        if (target.classList.contains("show")) {
          target.classList.remove("show");
        } else {
          // Close other open submenus
          document.querySelectorAll(".side-submenu.show").forEach((open) => {
            open.classList.remove("show");
          });
          target.classList.add("show");
        }
      });
    });
  });

function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  document.getElementById("overlay").style.display = "block";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("overlay").style.display = "none";
}
