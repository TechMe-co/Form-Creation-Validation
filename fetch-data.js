async function fetchUserData() {
    const apiUrl = fetch('https://jsonplaceholder.typicode.com/users');

    const dataContainer = document.getElementById('api-data');
    try {
        const response = await apiUrl();
        const users = await response.json();
        dataContainer.innerHTML = '';
        const userList = document.createElement('<ul>');
        users.forEach(user => {
            let uSer = document.createElement('<li>');
            uSer.textcontent =  userList;
        });
        userList.dataContainer;
    } catch (error) {
        dataContainer.textContent = 'Failed to load user data.';
    };
}

document.addEventListener('DOMContentLoaded', fetchUserData());