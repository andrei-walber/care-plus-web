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
    const path = window.location.pathname; // exemplo: /home/index.html
    const links = container.querySelectorAll("a.nav-link");

    links.forEach(link => {
        link.classList.remove("pill-active"); // limpa antes
        const href = link.getAttribute("href");

        if (href && path.includes(href.replace("../", ""))) {
            link.classList.add("pill-active");
        }
    });
}

// Carrega header e aplica destaque no menu
loadFragment("site-header", "../../components/header/index.html", highlightActiveLink);

// Carrega footer
loadFragment("site-footer", "../../components/footer/index.html");
