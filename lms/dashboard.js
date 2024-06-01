// dashboard.js
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('username')) {
        showDashboard();
    }
});

function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('course');
    document.getElementById('dashboardPage').classList.add('hidden');
    document.getElementById('loginPage').classList.remove('hidden');
}
