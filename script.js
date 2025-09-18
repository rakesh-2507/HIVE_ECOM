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

    // Side menu collapse toggle
    document.querySelectorAll('[data-bs-toggle="collapse"]').forEach((el) => {
      el.addEventListener("click", function () {
        const target = document.querySelector(
          el.getAttribute("data-bs-target")
        );
        if (target.classList.contains("show")) {
          target.classList.remove("show");
        } else {
          document
            .querySelectorAll(".side-submenu.show")
            .forEach((open) => open.classList.remove("show"));
          target.classList.add("show");
        }
      });
    });

    // -------------------------
    // Top submenu hover logic
    // -------------------------
    const submenuCard = document.getElementById("top-submenu-card");
    const submenuLeft = submenuCard.querySelector(".submenu-left");
    const submenuRight = submenuCard.querySelector(".submenu-right");
    const horizontalMenu = document.querySelector(".horizontal-menu");

    // Define submenu content for each menu
    const submenuData = {
      home: {
        left: [
          { text: "Overview of Solution", href: "/home/overview.html" },
          {
            text: "Key Value Proposition",
            href: "/home/keyvalueproposition.html",
          },
          { text: "Quick Demo", href: "/home/demo.html" },
        ],
        right: {
          title: "Most Read",
          descLinks: [
            {
              text: "Learn how our solutions help organizations manage assets effectively.",
              href: "/resources/asset-management.html",
            },
            {
              text: "Best practices for asset tracking in 2025.",
              href: "/resources/best-practices.html",
            },
            {
              text: "How to boost ROI with automation tools.",
              href: "/resources/roi-automation.html",
            },
          ],
        },
      },

      solutions: {
        left: [
          {
            text: "Fixed Asset Management",
            href: "/solutions/assetmanage.html",
          },
          { text: "Asset Accounting", href: "/solutions/accounting.html" },
          { text: "Inventory & Equipment", href: "/solutions/inventory.html" },
          { text: "Custom Solutions", href: "/solutions/customsolutions.html" },
        ],
        right: {
          title: "Most Read",
          descLinks: [
            {
              text: "Learn how our solutions help organizations manage assets effectively.",
              href: "/resources/asset-management.html",
            },
            {
              text: "Best practices for asset tracking in 2025.",
              href: "/resources/best-practices.html",
            },
            {
              text: "How to boost ROI with automation tools.",
              href: "/resources/roi-automation.html",
            },
          ],
        },
      },
      features: {
        left: [
          {
            text: "Centralized Asset Register",
            href: "/features/assetregister.html",
          },
          {
            text: "Acquisition & Disposal",
            href: "/features/acquisition.html",
          },
          { text: "Geo-Tagging", href: "/features/geotagging.html" },
          {
            text: "Preventive & Corrective Maintenance",
            href: "/features/preventive.html",
          },
          {
            text: "Multi-Level User Access",
            href: "/features/multiuseraccess.html",
          },
          {
            text: "Mobile App Integration",
            href: "/features/mobileappint.html",
          },
          { text: "Cloud & On-Premise", href: "/features/cloudonpremise.html" },
          { text: "Analytics & Dashboards", href: "/features/analytics.html" },
        ],
        right: {
          title: "Most Read",
          descLinks: [
            {
              text: "Learn how our solutions help organizations manage assets effectively.",
              href: "/resources/asset-management.html",
            },
            {
              text: "Best practices for asset tracking in 2025.",
              href: "/resources/best-practices.html",
            },
            {
              text: "How to boost ROI with automation tools.",
              href: "/resources/roi-automation.html",
            },
          ],
        },
      },
      industries: {
        left: [
          { text: "Aviation", href: "/industries/aviation.html" },
          { text: "Publishing", href: "/industries/publishing.html" },
          {
            text: "Corporate & Enterprises",
            href: "/industries/corporate.html",
          },
          {
            text: "Real Estate / Gated Communities",
            href: "/industries/realestate.html",
          },
          {
            text: "Educational Institutions",
            href: "/industries/educational.html",
          },
          {
            text: "Hospitals & Healthcare",
            href: "/industries/healthcare.html",
          },
          {
            text: "Manufacturing & Warehousing",
            href: "/industries/manufacturing.html",
          },
          {
            text: "Government & Public Sector",
            href: "/industries/sectors.html",
          },
        ],
        right: {
          title: "Most Read",
          descLinks: [
            {
              text: "Learn how our solutions help organizations manage assets effectively.",
              href: "/resources/asset-management.html",
            },
            {
              text: "Best practices for asset tracking in 2025.",
              href: "/resources/best-practices.html",
            },
            {
              text: "How to boost ROI with automation tools.",
              href: "/resources/roi-automation.html",
            },
          ],
        },
      },
      benefits: {
        left: [
          { text: "Cost Savings & ROI", href: "/benefits/costsavings.html" },
          {
            text: "Compliance & Risk Mitigation",
            href: "/benefits/compliance.html",
          },
          {
            text: "Transparency & Accountability",
            href: "/benefits/transparency.html",
          },
          {
            text: "Operational Efficiency",
            href: "/benefits/operational.html",
          },
          {
            text: "Fraud & Loss Prevention",
            href: "/benefits/prevention.html",
          },
        ],
        right: {
          title: "Most Read",
          descLinks: [
            {
              text: "Learn how our solutions help organizations manage assets effectively.",
              href: "/resources/asset-management.html",
            },
            {
              text: "Best practices for asset tracking in 2025.",
              href: "/resources/best-practices.html",
            },
            {
              text: "How to boost ROI with automation tools.",
              href: "/resources/roi-automation.html",
            },
          ],
        },
      },
      resources: {
        left: [
          { text: "Case Studies", href: "/resources/casestudies.html" },
          { text: "Whitepapers", href: "/resources/whitepapers.html" },
          { text: "Blogs", href: "/resources/blogs.html" },
          { text: "FAQs", href: "/resources/faq.html" },
          { text: "Guides", href: "/resources/guides.html" },
        ],
        right: {
          title: "Most Read",
          descLinks: [
            {
              text: "Learn how our solutions help organizations manage assets effectively.",
              href: "/resources/asset-management.html",
            },
            {
              text: "Best practices for asset tracking in 2025.",
              href: "/resources/best-practices.html",
            },
            {
              text: "How to boost ROI with automation tools.",
              href: "/resources/roi-automation.html",
            },
          ],
        },
      },
      pricing: {
        left: [
          { text: "Plans & Packages", href: "/pricing/plans.html" },
          {
            text: "Enterprise Customization",
            href: "/pricing/customization.html",
          },
          { text: "Free Trial / Demo", href: "/pricing/freetrail.html" },
        ],
        right: {
          title: "Most Read",
          descLinks: [
            {
              text: "Learn how our solutions help organizations manage assets effectively.",
              href: "/resources/asset-management.html",
            },
            {
              text: "Best practices for asset tracking in 2025.",
              href: "/resources/best-practices.html",
            },
            {
              text: "How to boost ROI with automation tools.",
              href: "/resources/roi-automation.html",
            },
          ],
        },
      },
      about: {
        left: [
          { text: "Company Profile", href: "/about/company.html" },
          { text: "Vision & Mission", href: "/about/vision.html" },
          { text: "Leadership Team", href: "/about/leadership.html" },
          { text: "Certifications", href: "/about/certifications.html" },
        ],
        right: {
          title: "Most Read",
          descLinks: [
            {
              text: "Learn how our solutions help organizations manage assets effectively.",
              href: "/resources/asset-management.html",
            },
            {
              text: "Best practices for asset tracking in 2025.",
              href: "/resources/best-practices.html",
            },
            {
              text: "How to boost ROI with automation tools.",
              href: "/resources/roi-automation.html",
            },
          ],
        },
      },
      support: {
        left: [
          { text: "Knowledge Base", href: "/support/knowledge.html" },
          { text: "Training & Onboarding", href: "/support/training.html" },
          { text: "Helpdesk", href: "/support/helpdesk.html" },
          { text: "Contact Support", href: "/support/contactsupport.html" },
        ],
        right: {
          title: "Most Read",
          descLinks: [
            {
              text: "Learn how our solutions help organizations manage assets effectively.",
              href: "/resources/asset-management.html",
            },
            {
              text: "Best practices for asset tracking in 2025.",
              href: "/resources/best-practices.html",
            },
            {
              text: "How to boost ROI with automation tools.",
              href: "/resources/roi-automation.html",
            },
          ],
        },
      },
      contact: {
        left: [
          { text: "Sales Inquiry", href: "/contact/sales.html" },
          { text: "Demo Request", href: "/contact/demorequest.html" },
          { text: "Office Locations", href: "/contact/officelocations.html" },
          { text: "Email / Phone / Chat", href: "/contact/emailchat.html" },
        ],
        right: {
          title: "Most Read",
          descLinks: [
            {
              text: "Learn how our solutions help organizations manage assets effectively.",
              href: "/resources/asset-management.html",
            },
            {
              text: "Best practices for asset tracking in 2025.",
              href: "/resources/best-practices.html",
            },
            {
              text: "How to boost ROI with automation tools.",
              href: "/resources/roi-automation.html",
            },
          ],
        },
      },
    };

    // Event listeners for top menu items
    document.querySelectorAll(".top-menu-item").forEach((item) => {
      item.addEventListener("mouseenter", () => {
        const key = item.dataset.menu;
        const data = submenuData[key];
        if (!data) return;

        // Populate left
        submenuLeft.innerHTML = data.left
          .map((a) => `<a href="${a.href}">${a.text}</a>`)
          .join("");

        // Highlight active submenu link
        const currentPath = window.location.pathname;
        submenuLeft.querySelectorAll("a").forEach((link) => {
          let href = link.getAttribute("href");
          if (
            href === currentPath ||
            (href === "/" && currentPath === "/index.html")
          ) {
            link.classList.add("active");
          }
        });

        // Populate right
        if (data.right.descLinks) {
          // Case: multiple clickable descriptions
          submenuRight.innerHTML = `
    <h4>${data.right.title}</h4>
    <ul class="desc-list">
      ${data.right.descLinks
        .map(
          (d) => `<li><a href="${d.href}" class="desc-link">${d.text}</a></li>`
        )
        .join("")}
    </ul>
  `;

          // Highlight active descLink if matches current page
          submenuRight.querySelectorAll("a").forEach((link) => {
            const href = link.getAttribute("href");
            if (
              href === currentPath ||
              (href === "/" && currentPath === "/index.html")
            ) {
              link.classList.add("active");
            }
          });
        } else {
          // Case: single desc + one link
          submenuRight.innerHTML = `
    <h4>${data.right.title}</h4>
    <p>${data.right.desc}</p>
    <a href="${data.right.link.href}" class="read-more">${data.right.link.text}</a>
  `;

          // Highlight active right link
          const rightLink = submenuRight.querySelector("a");
          if (rightLink && rightLink.getAttribute("href") === currentPath) {
            rightLink.classList.add("active");
          }
        }

        submenuCard.style.display = "flex";
      });
    });
    // Hide submenu only when leaving the entire horizontal menu area
    horizontalMenu.addEventListener("mouseleave", () => {
      submenuCard.style.display = "none";
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
