// script.js
let friends = [];

function addFriend() {
    const input = document.getElementById('friendName');
    const name = input.value.trim();
    
    // Validación de entrada
    if (name === '') {
        alert('Por favor, ingresa un nombre válido');
        return;
    }

    // Agregar nombre al array y actualizar lista
    friends.push(name);
    updateFriendsList();
    
    // Limpiar input
    input.value = '';
}

function updateFriendsList() {
    const list = document.querySelector('.friends-list ul');
    list.innerHTML = '';
    
    friends.forEach(friend => {
        const li = document.createElement('li');
        li.textContent = friend;
        list.appendChild(li);
    });
}

function drawSecretFriend() {
    // Verificar que haya al menos un amigo
    if (friends.length === 0) {
        alert('Agrega al menos un amigo antes de sortear');
        return;
    }

    // Seleccionar amigo secreto aleatoriamente
    const randomIndex = Math.floor(Math.random() * friends.length);
    const secretFriend = friends[randomIndex];
    
    // Mostrar resultado
    const resultElement = document.getElementById('secretFriend');
    resultElement.textContent = secretFriend;
    
    // Resaltar el resultado
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
}

document.getElementById('friendName').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addFriend();
    }
});