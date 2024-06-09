const users = [
    { username: 'student1', password: 'password1', name: 'John Doe', email: 'john@example.com', courses: ['Math', 'Science'] },
    { username: 'student2', password: 'password2', name: 'Jane Smith', email: 'jane@example.com', courses: ['History', 'Art'] }
];

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const course = document.getElementById('course').value;

    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        if (user.courses.includes(course)) {
            localStorage.setItem('username', username);
            localStorage.setItem('course', course);
            localStorage.setItem('name', user.name);
            localStorage.setItem('email', user.email);
            showDashboard();
        } else {
            alert('Course not found for this user');
        }
    } else {
        alert('Invalid credentials');
    }
}
