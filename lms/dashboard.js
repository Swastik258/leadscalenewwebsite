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
        'Python and Data Science': {
            videos: [
                { title: 'Lesson 1', url: 'https://youtu.be/aVYqnRHgXLI' },
                { title: 'Lesson 2', url: 'https://youtu.be/iTE-0mqfh2E' },
                { title: 'Lesson 3', url: 'https://youtu.be/ih-97r6XxpY' },
                { title: 'Lesson 4', url: 'https://youtu.be/r8J8wZ4Yw5I' },
                { title: 'Lesson 5', url: 'https://youtu.be/j9YvIOvkZpw' },
                { title: 'Lesson 6', url: 'https://youtu.be/oojcHPaaUjQ' },
                { title: 'Lesson 7', url: 'https://youtu.be/4V-x1J5YYOs' },
                { title: 'Lesson 8', url: 'https://youtu.be/ZjEewLQzkak' },
                { title: 'Lesson 9', url: 'https://youtu.be/PMwjjLsZi5c' },
                { title: 'Lesson 10', url: 'https://youtu.be/WU73pRLRbZk' },
                { title: 'Lesson 11', url: 'https://youtu.be/hrRIUdDASD4' },
                { title: 'Lesson 12', url: 'https://youtu.be/ni8fuHrlaNk' },
                { title: 'Lesson 13', url: 'https://youtu.be/i3CtICuxb_M' },
                { title: 'Lesson 14', url: 'https://youtu.be/ikrpZP4b9Y0' },
                { title: 'Lesson 15', url: 'https://youtu.be/vT1KiuMBF_0' },
                { title: 'Lesson 16', url: 'https://youtu.be/7iYaW5-ZX1Y' },
               

            ],
            assignments: [
                { title: 'Assignment 1', url: 'https://example.com/math1' },
                { title: 'Assignment 2', url: 'https://example.com/math2' }
            ]
        },
        'Python': {
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
