const yearElement = document.getElementById("year");
const copyButton = document.getElementById("copy-button");
const installCommand = document.getElementById("install-command");
const revealTargets = document.querySelectorAll(".feature-card, .download-card, .guide-steps article, .hero-panel, .hero-copy");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

if (copyButton && installCommand) {
    copyButton.addEventListener("click", async () => {
        const command = installCommand.textContent.trim();

        try {
            await navigator.clipboard.writeText(command);
            copyButton.textContent = "Скопійовано";
            window.setTimeout(() => {
                copyButton.textContent = "Копіювати команду";
            }, 1800);
        } catch {
            copyButton.textContent = "Не вдалося скопіювати";
            window.setTimeout(() => {
                copyButton.textContent = "Копіювати команду";
            }, 1800);
        }
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.18
});

revealTargets.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
});