const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        // 1. Store input value
        const chapter = input.value.trim();

        // 2. Create elements
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        // 3. Set content
        li.textContent = chapter;
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', 'Remove chapter');

        // 4. Append button to li
        li.append(deleteButton);

        // 5. Append li to list
        list.append(li);

        // 6. Add delete functionality
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
        });

        // 7. Clear and refocus input
        input.value = '';
        input.focus();
    } else {
        input.focus();
    }
    
});