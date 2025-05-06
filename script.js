// Button Click Animation
document.getElementById("animatedButton").addEventListener("click", function() {
    this.style.transform = "rotate(10deg)";
    setTimeout(() => {
        this.style.transform = "rotate(0deg)";
    }, 300);
});

// Image Visibility Toggle
document.getElementById("animatedImage").addEventListener("click", function() {
    this.classList.toggle("hidden");
});

// Store and Retrieve User Preferences
document.getElementById("preferencesForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let selectedTheme = document.getElementById("theme").value;

    localStorage.setItem("themePreference", selectedTheme);
    applyTheme(selectedTheme);
});

// Apply Theme on Page Load
function applyTheme(theme) {
    document.body.style.backgroundColor = theme === "dark" ? "#333" : "#fff";
}

// Load Stored Theme Preference
window.addEventListener("load", function() {
    let storedTheme = localStorage.getItem("themePreference");
    if (storedTheme) {
        document.getElementById("theme").value = storedTheme;
        applyTheme(storedTheme);
    }
});
