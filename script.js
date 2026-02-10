const modal = document.getElementById("modal");
const body = document.getElementById("modal-body");

const projects = {
    raas: `
        <h2>RAAS – Rewards as a Service</h2>
        <p>Enterprise SaaS platform for reward management.</p>
        <ul>
            <li>20+ global clients</li>
            <li>50K+ daily transactions</li>
            <li>99.8% uptime</li>
            <li>Tech: Python, Django, PostgreSQL, AWS, Docker</li>
        </ul>
    `,
    iot: `
        <h2>RaychemRPG – IoT Automation</h2>
        <p>Manufacturing automation using real-time IoT data.</p>
        <ul>
            <li>40% defect reduction</li>
            <li>50+ connected devices</li>
            <li>MQTT-based real-time monitoring</li>
            
        </ul>
        
    `,
    energy: `
        <h2>HikEMM – Energy Monitoring</h2>
        <p>Energy consumption analytics platform.</p>
        <ul>
            <li>10K+ sensor data points/min</li>
            <li>20–30% cost savings</li>
            <li>Real-time dashboards</li>
        </ul>
    `,
    dating: `
        <h2>Datesafe – Dating Platform</h2>
        <p>AI-powered matchmaking application.</p>
        <ul>
            <li>10K+ active users</li>
            <li>Secure authentication</li>
            <li>Real-time notifications</li>
        </ul>
    `
};

function openModal(project) {
    body.innerHTML = projects[project];
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(e) {
    if (e.target === modal) closeModal();
};
const toggleBtn = document.getElementById("themeToggle");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Load saved theme or system preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    toggleBtn.textContent = savedTheme === "light" ? "🌙" : "☀️";
} else if (!prefersDark) {
    document.documentElement.setAttribute("data-theme", "light");
    toggleBtn.textContent = "🌙";
}

// Toggle theme
toggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");

    if (currentTheme === "light") {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "☀️";
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "🌙";
    }
});
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal");
            }
        });
    },
    { threshold: 0.15 }
);

document.querySelectorAll(".card").forEach(card => {
    observer.observe(card);
});
