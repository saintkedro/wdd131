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






// button.addEventListener('click', function () {
//     if (input.value.trim() !== '') {
//         // 1. Store input value
//         const chapter = input.value.trim();

//         // 2. Create elements
//         const li = document.createElement('li');
//         const deleteButton = document.createElement('button');

//         // 3. Set content
//         li.textContent = chapter;
//         deleteButton.textContent = '❌';
//         deleteButton.setAttribute('aria-label', 'Remove chapter');

//         // 4. Append button to li
//         li.append(deleteButton);

//         // 5. Append li to list
//         list.append(li);

//         // 6. Add delete functionality
//         deleteButton.addEventListener('click', function () {
//             list.removeChild(li);
//         });

//         // 7. Clear and refocus input
//         input.value = '';
//         input.focus();
//     } else {
//         input.focus();
//     }
    
// });