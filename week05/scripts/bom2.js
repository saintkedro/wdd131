const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

const STORAGE_KEY = 'myFavBOMList';

let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value.trim() != '') { // check that input is not empty
        displayList(input.value); // call the function that outputs the submitted chapter
        chaptersArray.push(input.value); // add chapter to the array
        setChapterList(); // update the localStorage with the new array
        input.value = ''; // clear the input
        input.focus(); // set the focus back to the input
    }
});

function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(item);
        input.focus();
    });

}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Call the setChapterList function to update the localStorage item
function deleteChapter(chapter) {
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

