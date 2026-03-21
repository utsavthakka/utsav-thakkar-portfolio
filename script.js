// MODAL LOGIC
const modal = document.getElementById("modal");
const body = document.getElementById("modal-body");

const projects = {
    raas: `
        <h2>RAAS – Employee Engagement Platform</h2>
        <p>Enterprise SaaS powering flagship products like <strong>Cerra Applause</strong>, <strong>Cerra Flex</strong>, and <strong>Supr</strong> for global employee recognition and benefits.</p>
        <ul class="clean-list list-styled mt-4">
            <li><strong>Scale:</strong> Drives employee engagement for 20+ enterprise clients, processing 50K+ daily transactions.</li>
            <li><strong>Architecture:</strong> Multi-tenant backend featuring robust RBAC and 99.8% uptime.</li>
            <li><strong>Stack:</strong> Python, Django, PostgreSQL, Redis, Docker, AWS.</li>
            <li><strong>Impact:</strong> Optimized APIs reduced latency by 35% across all core Rewardz products.</li>
        </ul>
    `,
    iot: `
        <h2>RaychemRPG – IIoT Automation</h2>
        <p>Industrial IoT (IIoT) smart machine monitoring and manufacturing automation system.</p>
        <ul class="clean-list list-styled mt-4">
            <li><strong>Capabilities:</strong> Manages 50+ industrial devices via advanced MQTT real-time data pipelines.</li>
            <li><strong>Core Features:</strong> Live telemetry processing, automated equipment alerts, and predictive reporting.</li>
            <li><strong>Stack:</strong> Python, Django, IoT protocols (MQTT), Time-Series Data.</li>
            <li><strong>Impact:</strong> Achieved a 40% reduction in manufacturing defects through immediate data feedback loops.</li>
        </ul>
    `,
    energy: `
        <h2>HikEMM – Smart Machine Monitoring</h2>
        <p>High-load IIoT energy consumption and industrial analytics platform.</p>
        <ul class="clean-list list-styled mt-4">
            <li><strong>Scale:</strong> Securely processes over 10K+ hardware sensor data points per minute.</li>
            <li><strong>Architecture:</strong> Spearheaded asynchronous processing engines utilizing Celery & Redis.</li>
            <li><strong>Stack:</strong> Python, Fast REST APIs, AWS, PostgreSQL, React (Frontend).</li>
            <li><strong>Impact:</strong> Custom real-time dashboards directly led to 20–30% in measurable cost savings.</li>
        </ul>
    `,
    dating: `
        <h2>DateSafe – AI Dating Platform</h2>
        <p>AI-powered matchmaking and real-time social application designed for secure dating.</p>
        <ul class="clean-list list-styled mt-4">
            <li><strong>Scale:</strong> Actively supports and securely matches over 10,000 users.</li>
            <li><strong>Core Features:</strong> Engineered highly available low-latency real-time notification websockets and AI compatibility scoring.</li>
            <li><strong>Security:</strong> strict JWT authentication and end-to-end data encryption.</li>
            <li><strong>Stack:</strong> Python, Django REST, WebSockets, PostgreSQL.</li>
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
