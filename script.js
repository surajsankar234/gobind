function toggleMenu() {
    const nav = document.getElementById("navMenu");
    nav.classList.toggle("active");
}

document.getElementById("year").textContent =
    new Date().getFullYear();