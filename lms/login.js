const users = [
    { username: 'sohamsawalakhe@gmail.com', password: '7558496659', name: 'Soham Manish Sawalakhe', email: 'sohamsawalakhe@gmail.com', courses: ['PYAIDS', 'Python'] },
    { username: 'kanishklaptop1@gmail.com', password: '8855055725', name: 'Kanishk Butle ', email: 'kanishklaptop1@gmail.com', courses: ['PYAIDS', 'Python'] },
    { username: 'keerthikeerthana16074@gmail.com', password: '9344657858', name: 'Keerthana s', email: 'keerthikeerthana16074@gmail.com', courses: ['PYAIDS', 'Python'] },
    { username: 'patturisindhuja2003@gmail.com', password: '6303513389', name: 'Sindhuja', email: 'patturisindhuja2003@gmail.com', courses: ['PYAIDS', 'Python'] },
    { username: 'himanshusah1211@gmail.com', password: '9910986719', name: 'Himanshu Sah', email: 'himanshusah1211@gmail.com', courses: ['PYAIDS', 'Python'] },
    { username: 'rakshitharakshithacm@gmail.com', password: '9019056966', name: 'RAKSHITHA C M ', email: 'rakshitharakshithacm@gmail.com', courses: ['PYAIDS', 'Python'] },
    { username: 'bhanothyaswanth2801@gmail.com', password: '9110723142', name: 'Bhanoth Yaswanth Sai ', email: 'bhanothyaswanth2801@gmail.com', courses: ['PYAIDS', 'Python'] },
    { username: 'hk.sneha27@gmail.com', password: '7303054993', name: 'sneha', email: 'hk.sneha27@gmail.com', courses: ['PYAIDS', 'Python'] },
    { username: 'aadhithsekar@gmail.com', password: '9360650158', name: 'Adith.S', email: 'aadhithsekar@gmail.com', courses: ['PYAIDS', 'Python'] },
    { username: 'umesh_kumar.ug22@nsut.ac.in', password: '7340423590', name: 'UMESH KUMAR', email: 'umesh_kumar.ug22@nsut.ac.in', courses: ['PYAIDS', 'Python'] },
    { username: 'rohanrockstar97.rb@gmail.com', password: '8999971936', name: 'Rohan Bambolkar', email: 'rohanrockstar97.rb@gmail.com', courses: ['BA', 'Business Analyst'] },
    { username: 'himanshusah1211@gmail.com', password: '9910986719', name: 'Himanshu Sah', email: 'himanshusah1211@gmail.com', courses: ['PYAIDS', 'Python'] },
    { username: 'rishi44shah@gmail.com', password: '9339436955', name: 'Rishi', email: 'rishi44shah@gmail.com', courses: ['BA', 'Business Analyst'] },


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
