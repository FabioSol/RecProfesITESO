
document.addEventListener('DOMContentLoaded', function() {
    // Check if a theme is stored in localStorage and apply it on load
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        document.documentElement.setAttribute('data-theme', storedTheme);
    } else {
        // If no theme is stored, set 'dark' as the default theme
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); // Store the default theme in localStorage
    }

    // Add event listener to the theme switch
    const themeSwitch = document.getElementById('themeSwitch');
    if (themeSwitch) {
        themeSwitch.addEventListener('change', switchTheme);
    }
});
function switchTheme() {
    const themeSwitch = document.getElementById('themeSwitch');
    const currentTheme = document.documentElement.getAttribute('data-theme');

    // Toggle between 'light' and 'dark' themes
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateLogoSource('dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        updateLogoSource('light');
    }

    // Store the current theme in localStorage
    localStorage.setItem('theme', document.documentElement.getAttribute('data-theme'));
}

function updateLogoSource(theme) {
    const logoImg = document.getElementById('logoImg');
    const logoSrc = theme === 'dark' ? 'img/ITESO_logo_dark.png' : 'img/ITESO_logo_light.png';
    logoImg.src = "/static/" + logoSrc;
}
