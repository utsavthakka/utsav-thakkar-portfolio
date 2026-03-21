// MODAL LOGIC
const modal = document.getElementById("modal");
const body = document.getElementById("modal-body");

const projects = {
    raas: `
        <h2>RAAS – Rewards as a Service</h2>
        <p>Enterprise SaaS platform for reward management.</p>
        <ul class="clean-list list-styled mt-4">
            <li>20+ global clients</li>
            <li>50K+ daily transactions</li>
            <li>99.8% uptime</li>
            <li>Tech: Python, Django, PostgreSQL, AWS, Docker</li>
        </ul>
    `,
    iot: `
        <h2>RaychemRPG – IoT Automation</h2>
        <p>Manufacturing automation using real-time IoT data.</p>
        <ul class="clean-list list-styled mt-4">
            <li>40% defect reduction</li>
            <li>50+ connected devices</li>
            <li>MQTT-based real-time monitoring</li>
        </ul>
    `,
    energy: `
        <h2>HikEMM – Energy Monitoring</h2>
        <p>Energy consumption analytics platform.</p>
        <ul class="clean-list list-styled mt-4">
            <li>10K+ sensor data points/min</li>
            <li>20–30% cost savings</li>
            <li>Real-time dashboards</li>
        </ul>
    `,
    dating: `
        <h2>Datesafe – Dating Platform</h2>
        <p>AI-powered matchmaking application.</p>
        <ul class="clean-list list-styled mt-4">
            <li>10K+ active users</li>
            <li>Secure authentication</li>
            <li>Real-time notifications</li>
        </ul>
    `
};

function openModal(project) {
    body.innerHTML = projects[project];
    modal.style.display = "flex"; // Override with correct flex logic if using flex in CSS, otherwise block
    modal.style.alignItems = "center";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(e) {
    if (e.target === modal) closeModal();
};

// THEME LOGIC
const toggleBtn = document.getElementById("themeToggle");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.body.setAttribute("data-theme", savedTheme);
} else if (!prefersDark) {
    document.body.setAttribute("data-theme", "light");
}

toggleBtn.addEventListener("click", () => {
    const currentTheme = document.body.getAttribute("data-theme");
    if (currentTheme === "light") {
        document.body.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    }
});

// REVEAL ANIMATION
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    },
    { threshold: 0.1 }
);
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// DOCK NAV SCROLL HIGHLIGHT
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".dock-link");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});
