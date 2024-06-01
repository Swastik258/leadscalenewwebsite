// login.js
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const course = document.getElementById('course').value;

    if (username === 'student' && password === 'password') { // Placeholder credentials
        localStorage.setItem('username', username);
        localStorage.setItem('course', course);
        showDashboard();
    } else {
        alert('Invalid credentials');
    }
}

function showDashboard() {
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('dashboardPage').classList.remove('hidden');
    
    const course = localStorage.getItem('course');
    document.getElementById('courseTitle').textContent = `Course: ${course}`;

    // Fetch and display videos (placeholder example)
    const videos = [
        { title: 'Lesson 1', url: 'https://example.com/video1' },
        { title: 'Lesson 2', url: 'https://example.com/video2' },
    ];

    const videoList = document.getElementById('videoList');
    videoList.innerHTML = '';
    videos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.classList.add('p-4', 'bg-white', 'shadow', 'rounded');
        videoItem.innerHTML = `
            <h3 class="font-bold">${video.title}</h3>
            <a href="${video.url}" class="text-blue-500" target="_blank">Watch Video</a>
        `;
        videoList.appendChild(videoItem);
    });
}
