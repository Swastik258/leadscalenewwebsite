document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('username')) {
        showDashboard();
    }
});

function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('course');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    document.getElementById('dashboardPage').classList.add('hidden');
    document.getElementById('loginPage').classList.remove('hidden');
}

function showDashboard() {
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('dashboardPage').classList.remove('hidden');

    const course = localStorage.getItem('course');
    document.getElementById('courseTitle').textContent = `Course: ${course}`;

    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    document.getElementById('profileInfo').innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
    `;

    const courseContent = {
        'Math': {
            videos: [
                { title: 'Lesson 1', url: 'https://youtu.be/aVYqnRHgXLI' },
                { title: 'Lesson 2', url: 'https://example.com/video2' }
            ],
            assignments: [
                { title: 'Assignment 1', url: 'https://example.com/math1' },
                { title: 'Assignment 2', url: 'https://example.com/math2' }
            ]
        },
        'Science': {
            videos: [
                { title: 'Lesson 1', url: 'https://example.com/science1' },
                { title: 'Lesson 2', url: 'https://example.com/science2' }
            ],
            assignments: [
                { title: 'Assignment 1', url: 'https://example.com/science1' },
                { title: 'Assignment 2', url: 'https://example.com/science2' }
            ]
        },
        'History': {
            videos: [
                { title: 'Lesson 1', url: 'https://example.com/history1' },
                { title: 'Lesson 2', url: 'https://example.com/history2' }
            ],
            assignments: [
                { title: 'Assignment 1', url: 'https://example.com/history1' },
                { title: 'Assignment 2', url: 'https://example.com/history2' }
            ]
        },
        'Art': {
            videos: [
                { title: 'Lesson 1', url: 'https://example.com/art1' },
                { title: 'Lesson 2', url: 'https://example.com/art2' }
            ],
            assignments: [
                { title: 'Assignment 1', url: 'https://example.com/art1' },
                { title: 'Assignment 2', url: 'https://example.com/art2' }
            ]
        }
    };

    const content = courseContent[course] || { videos: [], assignments: [] };

    const videoList = document.getElementById('videoList');
    videoList.innerHTML = '';
    content.videos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.classList.add('p-4', 'bg-white', 'shadow', 'rounded');
        videoItem.innerHTML = `
            <h3 class="font-bold">${video.title}</h3>
            <a href="${video.url}" class="text-blue-500" target="_blank">Watch Video</a>
        `;
        videoList.appendChild(videoItem);
    });

    const assignmentList = document.getElementById('assignmentsList');
    assignmentList.innerHTML = '';
    content.assignments.forEach(assignment => {
        const assignmentItem = document.createElement('li');
        assignmentItem.innerHTML = `
            ${assignment.title}: <a href="${assignment.url}" class="text-blue-500" target="_blank">Download</a>
        `;
        assignmentList.appendChild(assignmentItem);
    });
}

function toggleTheme() {
    document.body.classList.toggle('black');
    document.getElementById('dashboardPage').classList.toggle('black');
}
