// 1. Data Structures (Requirement: Objects, Arrays)
const clubInfo = {
    name: "Uyo Smash Club",
    location: "Ultrafit Sports Center",
    operatingHours: { open: 6, close: 19 } // 6 AM to 7 PM
};

const memberships = [
    { id: "jjc", name: "JJC (Beginner)" },
    { id: "sk", name: "Street King (Intermediate)" },
    { id: "pro", name: "Pro Circuit (Elite)" }
];

const academyCoaches = [
    { name: "Coach Essi", bio: "National Pro. Expert in power-serving.", img: "images/coach1.webp" },
    { name: "Coach Bassey", bio: "Junior development specialist with 10+ years experience.", img: "images/coach2.webp" },
    { name: "Coach Aniefiok", bio: "Technical analyst focusing on backhand play.", img: "images/coach3.webp" }
];

const topPlayers = [
    { rank: 1, name: "Emeka U.", points: 1250 },
    { rank: 2, name: "Iboro O.", points: 1180 },
    { rank: 3, name: "Samuel E.", points: 1120 },
    { rank: 4, name: "David A.", points: 1050 },
    { rank: 5, name: "Victor W.", points: 990 },
    { rank: 6, name: "Ekene K.", points: 940 },
    { rank: 7, name: "Prince I.", points: 880 },
    { rank: 8, name: "Faith B.", points: 820 },
    { rank: 9, name: "Tunde R.", points: 790 },
    { rank: 10, name: "Uwem S.", points: 750 }
];

// 2. Court Status Function (Requirement: Conditional Branching & Template Literals)
function checkCourtStatus() {
    const statusElement = document.querySelector('#status-box');
    if (!statusElement) return; 

    const currentHour = new Date().getHours();
    let statusMessage;
    let statusClass;

    if (currentHour >= clubInfo.operatingHours.open && currentHour < clubInfo.operatingHours.close) {
        statusMessage = "🎾 Courts are currently OPEN. Come down and play!";
        statusClass = "open";
    } else {
        statusMessage = "🌙 Courts are currently CLOSED. See you at 6:00 AM!";
        statusClass = "closed";
    }

    statusElement.innerHTML = `
        <h2 class="${statusClass}">Current Status</h2>
        <p>${statusMessage}</p>
        <p><strong>Location:</strong> ${clubInfo.location}</p>
    `;
}

// 3. Populate Academy and Ladder Data (Requirement: Array Methods & DOM Manipulation)
function populateAcademyData() {
    const proGrid = document.querySelector('#pro-grid');
    const ladderBody = document.querySelector('#ladder-body');

    // Populate Coaches (Requirement: forEach method)
    if (proGrid) {
        academyCoaches.forEach(coach => {
            const coachCard = document.createElement('div');
            coachCard.className = 'card';
            coachCard.innerHTML = `
                <img src="${coach.img}" alt="${coach.name}" class="coach-img" loading="lazy">
                <h3>${coach.name}</h3>
                <p>${coach.bio}</p>
            `;
            proGrid.appendChild(coachCard);
        });
    }

    // Populate Ladder (Requirement: map method & Template Literals)
    if (ladderBody) {
        ladderBody.innerHTML = topPlayers.map(player => `
            <tr>
                <td>${player.rank}</td>
                <td>${player.name}</td>
                <td>${player.points}</td>
            </tr>
        `).join('');
    }
}

// 4. Global Initializer
function initializeGlobalElements() {
    // Dynamic Footer
    const yearSpan = document.querySelector("#currentyear");
    const lastModSpan = document.querySelector("#lastModified");

    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    if (lastModSpan) lastModSpan.textContent = `${document.lastModified}`;

    // Populate Membership Dropdown
    const menu = document.querySelector("#membership");
    if (menu) {
        memberships.forEach(item => {
            let opt = document.createElement("option");
            opt.value = item.id;
            opt.textContent = item.name;
            menu.appendChild(opt);
        });
    }

    // Background Storage Counter (Requirement: localStorage)
    if (window.location.pathname.includes("thanks.html")) {
        let count = Number(localStorage.getItem("totalReg")) || 0;
        localStorage.setItem("totalReg", count + 1);
    }
}

// 5. Initialize All Functions
document.addEventListener('DOMContentLoaded', () => {
    checkCourtStatus();
    populateAcademyData();
    initializeGlobalElements();
});