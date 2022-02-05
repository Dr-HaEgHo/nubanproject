// selectors
const nameInput = document.querySelector('#name-input');
const jobInput = document.querySelector('#occupation');
const submit = document.querySelector('.submit-btn');

// event Listeners
submit.addEventListener('click', checkValues);
// submit.addEventListener('click', localStorageData);



// Functions


// localStorage.clear();

function checkValues(event) {
    
    let nameValue = nameInput.value;
    let jobValue = jobInput.options[jobInput.selectedIndex].innerText;
    
    let data = {
        Name: nameValue,
        Occupation: jobValue,
    };

    // Store to localStorage
    localStorageData(data);
    
    event.preventDefault();
}

function localStorageData(data) {
    
    console.log(data);
    localStorage.setItem('data', JSON.stringify(data));

}












// ----------------------------------------------------------------------------------------------

// localStorage.setItem('name', 'Occupation');
// console.log(localStorage);