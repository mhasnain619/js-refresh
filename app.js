let mydiv = document.querySelector('.mydiv');

let newBtn = document.createElement('button');
newBtn.textContent = 'New Button';

// newBtn.style.color = 'green'
mydiv.appendChild(newBtn);
newBtn.addEventListener('click', function () {
    newBtn.style.padding = '10px 20px'
    newBtn.style.margin = '10px'
    newBtn.style.borderRadius = '10px'
    newBtn.style.backgroundColor = 'blue'
    newBtn.style.color = 'white'

    newBtn.style.border = 'none'
    mydiv.style.backgroundColor = 'yellow';  // Corrected the typo here
});
let newHeading = document.createElement('h1')
newHeading.textContent = 'New Heading';
newHeading.style.color = 'aqua'
newHeading.style.fontSize = '40px'
newHeading.style.fontWeight = '80px'
mydiv.before(newHeading)

// console.log(newBtn);
