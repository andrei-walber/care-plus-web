// Carrega fragmentos HTML de header e footer
function loadFragment(id, path, callback) {
    fetch(path)
        .then(response => response.text())
        .then(html => {
            document.getElementById(id).innerHTML = html;
            if (callback) callback(document.getElementById(id));
        });
}

// Função que marca o link ativo no header
function highlightActiveLink(container) {
    const pathParts = window.location.pathname.split("/").filter(Boolean);
    const currentPath = pathParts.slice(-2).join("/");

    const links = container.querySelectorAll("a.nav-link");

    links.forEach(link => {
        link.classList.remove("pill-active");
        const href = link.getAttribute("href");

        if (href && href.endsWith(currentPath)) {
            link.classList.add("pill-active");
        }
    });
}


// Carrega header e aplica destaque no menu
loadFragment("site-header", "../../components/header/index.html", highlightActiveLink);

// Carrega footer
loadFragment("site-footer", "../../components/footer/index.html");

// Controle do menu mobile
document.addEventListener("click", function (e) {
    if (e.target.closest(".menu-toggle")) {
        document.getElementById("mobileMenu").classList.add("active");
    }
    if (e.target.closest(".menu-close") || e.target.id === "mobileMenu") {
        document.getElementById("mobileMenu").classList.remove("active");
    }
});
