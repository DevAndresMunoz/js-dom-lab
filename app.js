const mainTitle = document.getElementById('main-title');

const paragraph = document.querySelector('#content p');

console.log(mainTitle);
console.log(paragraph);

mainTitle.textContent = 'DOM Manipulation with JavaScript';
paragraph.textContent = 'Hello, I am Andres and I am learning DOM manipulation!';

const newItem = document.createElement('li');
newItem.textContent = 'Newly added item';
const itemList = document.getElementById('item-list');
itemList.appendChild(newItem);

const addItemBtn = document.getElementById('add-item-btn');
addItemBtn.addEventListener('click', function() {
    const newItem = document.createElement('li');
    newItem.textContent = 'another new item';
    newItem.style.color = 'red';
    itemList.appendChild(newItem);
});

const highlightTitleBtn = document.getElementById('highlight-title-btn');
highlightTitleBtn.addEventListener('click', function() {
    mainTitle.classList.toggle('highlight');
});

function updateFooter() {
    const footer = document.getElementById('footer-text');
    const today = new Date().toLocaleDateString();
    footer.textContent = `DOM Manipulation Lab @ ${today}`;
}

updateFooter();
