document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btttn').addEventListener('click', function () {

        const playlistObject = {
            name: 'My Playlist',
            songs: ['Song 1', 'Song 2', 'Song 3'],
        };


    
        document.getElementById('demo').textContent = `
        <p>Name: ${playlistObject.name} Genre: ${playlistObject.songs} </p>`;

        const iDiv = document.getElementById('i');
        const objectDiv = document.createElement('div');
        objectDiv.textContent = JSON.stringify(playlistObject);
        iDiv.appendChild(objectDiv);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('bbtn').addEventListener('click', function () {

document.body.style.backgroundColor = 'azure';
document.body.style.color = 'black';
//        document.getElementById('demo').style.backgroundColor = 'rgba(123, 26, 179, 0.9)';
document.getElementById('btttn').style.backgroundColor = '#120e1e';
//        document.getElementsByClassName(ssss).style.backgroundColor = 'red';
});
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('dbtn').addEventListener('click', function () {

document.body.style.backgroundColor = '#120e1e';
document.body.style.color = 'azure';
//        document.getElementById('demo').style.backgroundColor = 'rgba(123, 26, 179, 0.9)';
//document.getElementById('btttn').style.backgroundColor = 'purple';
//        document.getElementsByClassName(ssss).style.backgroundColor = 'red';
});
});


