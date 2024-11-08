import { backend } from 'declarations/backend';

document.addEventListener('DOMContentLoaded', async () => {
    const tipsList = document.getElementById('tipsList');
    const techniquesList = document.getElementById('techniquesList');
    const songsList = document.getElementById('songsList');
    const songModal = new bootstrap.Modal(document.getElementById('songModal'));

    try {
        const tips = await backend.getTips();
        const techniques = await backend.getTechniques();
        const songs = await backend.getSongs();

        displayList(tips, tipsList);
        displayList(techniques, techniquesList);
        displaySongs(songs);

        setupPrintButton();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

function displayList(items, element) {
    items.forEach(item => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = item;
        element.appendChild(li);
    });
}

function displaySongs(songs) {
    const songsList = document.getElementById('songsList');
    songs.forEach(song => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-3';
        col.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${song.title}</h5>
                    <p class="card-text">Difficulty: ${song.difficulty}</p>
                    <button class="btn btn-primary view-song" data-title="${song.title}" data-notes="${song.notes}" data-difficulty="${song.difficulty}">View Song</button>
                </div>
            </div>
        `;
        songsList.appendChild(col);
    });

    document.querySelectorAll('.view-song').forEach(button => {
        button.addEventListener('click', (e) => {
            const song = e.target.dataset;
            document.querySelector('#songModal .modal-title').textContent = song.title;
            document.getElementById('songNotes').textContent = song.notes;
            document.getElementById('songDifficulty').textContent = song.difficulty;
            songModal.show();
        });
    });
}

function setupPrintButton() {
    document.getElementById('printSong').addEventListener('click', () => {
        const title = document.querySelector('#songModal .modal-title').textContent;
        const notes = document.getElementById('songNotes').textContent;
        const difficulty = document.getElementById('songDifficulty').textContent;

        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <html>
                <head>
                    <title>${title}</title>
                    <style>
                        body { font-family: Arial, sans-serif; }
                        h1 { color: #333; }
                        p { margin-bottom: 10px; }
                    </style>
                </head>
                <body>
                    <h1>${title}</h1>
                    <p><strong>Notes:</strong> ${notes}</p>
                    <p><strong>Difficulty:</strong> ${difficulty}</p>
                </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.print();
    });
}
