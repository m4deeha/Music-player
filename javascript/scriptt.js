document.getElementById('myid').addEventListener('click', function(){
    // Change background color of the button with ID "myid"
    let x = document.getElementById('sresult');
    x.style.backgroundColor = "black";
console.log('hello');
    let targetitems = document.getElementsByClassName('inp');
    let found = null;

    let objmusic = {
        singer1: {
          name: "Adele",
          songs: ["Rolling in the Deep", "Someone Like You", "Hello"],
          genre: "Pop"
        },
        singer2: {
          name: "EdSheeran",
          songs: ["Shape of You", "Thinking Out Loud", "Photograph"],
          genre: "Pop"
        },
        singer3: {
          name: "Beyoncé",
          songs: ["Single Ladies", "Halo", "Crazy in Love"],
          genre: "R&B"
        },
      };
      
      
      
    for (let i = 0; i < targetitems.length; i++) {
        let targetTitles = targetitems[i].value.toLowerCase().split(',');

        for (let j = 0; j < targetTitles.length; j++) {
            let currentTitle = targetTitles[j];

            for (let key in objmusic) {
                if (objmusic[key].name.toLowerCase() === currentTitle) {
                    found = objmusic[key];
                    var newdiv = document.createElement('div');
                    newdiv.style.backgroundColor = 'blue';
                    newdiv.innerHTML = `
                    <p>Name: ${found.name} Genre: ${found.genre} </p>
                    <p>Songs: ${found.songs.join(', ')}</p>
                `;
                    var outputContainer = document.getElementById('sresult');
                    outputContainer.appendChild(newdiv);
                    outputContainer.innerHTML = `
                    <p>Name: ${found.name} Genre: ${found.genre} </p>
                    <p>Songs: ${found.songs.join(', ')}</p>
                `;
                    console.log(found);
                    break;
                }
            }

            if (found) {
                break;
            }
        }

        if (found) {
            break;
        }
    }
});

        

              document.addEventListener('DOMContentLoaded', function () {
            const sliderContainer = document.querySelector('.slider-container');
            const navbox = document.querySelector('.navbox');
            const arrows = document.querySelectorAll('.arrow');

            let currentIndex = 0;

            arrows.forEach(arrow => {
                arrow.addEventListener('click', function () {
                    if (this.classList.contains('left-arrow')) {
                        currentIndex = Math.max(currentIndex - 1, 0);
                    } else if (this.classList.contains('right-arrow')) {
                        currentIndex = Math.min(currentIndex + 1, document.querySelectorAll('.first').length - 1);
                    }

                    updateSlider();
                });
            });

            function updateSlider() {
                const itemWidth = document.querySelector('.first').offsetWidth;
                const newPosition = -currentIndex * itemWidth;
                navbox.style.transform = `translateX(${newPosition}px)`;
            }
        });

        document.addEventListener('DOMContentLoaded', function () {
            const sliderContainer = document.querySelector('.slidert-container');
            const navbox = document.querySelector('.trending');
            const arrows = document.querySelectorAll('.arrow');

            let currentIndex = 0;

            arrows.forEach(arrow => {
                arrow.addEventListener('click', function () {
                    if (this.classList.contains('leftt-arrow')) {
                        currentIndex = Math.max(currentIndex - 1, 0);
                    } else if (this.classList.contains('rightt-arrow')) {
                        currentIndex = Math.min(currentIndex + 1, document.querySelectorAll('.trend').length - 1);
                    }

                    updateSlider();
                });
            });

            function updateSlider() {
                const itemWidth = document.querySelector('.trend').offsetWidth;
                const newPosition = -currentIndex * itemWidth;
                navbox.style.transform = `translateX(${newPosition}px)`;
            }
        });