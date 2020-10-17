const cookies = document.cookie.split('; ').reduce((prev, current) => {
    const [name, value] = current.split('=');
    prev[name] = value;
    return prev;
}, {});

let user = {
    name: 'Сергей',
    lastName: 'Иванов',
    age: 30
}