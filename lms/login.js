const users = [
    { username: 'sohamsawalakhe@gmail.com', password: '7558496659', name: 'Soham Manish Sawalakhe', email: 'sohamsawalakhe@gmail.com', courses: ['PYAIDS', 'Python'] },
    { username: 'kanishklaptop1@gmail.com', password: '8855055725', name: 'Kanishk Butle ', email: 'kanishklaptop1@gmail.com', courses: ['PYAIDS', 'Python'] },
    { username: 'keerthikeerthana16074@gmail.com', password: '9344657858', name: 'Keerthana s', email: 'keerthikeerthana16074@gmail.com', courses: ['PYAIDS', 'Python'] },


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
