// --- THEME ---
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    drawCharts(); // Redraw charts to update text colors
}

// Auto-detect system dark mode on load
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
}
