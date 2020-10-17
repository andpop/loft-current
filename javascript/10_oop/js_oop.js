function inherit(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor =   child;
    child.prototype.parent = parent;
}


var F = function(name) {
    this.setName(name);
};

var F2 = function(name, age) {
    this.setName(name);
    this.setAge(age);
};

F.prototype.setName = function(name) {
    this.name = name;
};

F.prototype.getName = function() {
    return this.name;
};

inherit(F2, F);

F2.prototype.setAge = function(age) {
    this.age = age;
}

F2.prototype.getAge = function() {
    return this.age;
};

F2.prototype.setName = function(name) {
    this.parent.prototype.setName.call(this, name);

    console.log('Новое имя установлено');
};

var obj1 = new F('Сергей'),
    obj2 = new F2('Андрей', 30);

obj2.setAge(26);

// console.log(obj1.getName(), obj1.getAge());   // Сергей 26
// console.log(obj2.getName(), obj2.getAge());   // Андрей 30

// F.prototype = {
//     setName: function() { ... },
//     getName: function() { ... }
// }

// F2.prototype = {
//     setAge: function() { ... },
//     getAge: function() { ... },
//     __proto__: {
//         constructor: F,
//         setName: function() { ... },
//         getName: function() { ... }
//     }
// }

// obj2 = {
//     name: 'Андрей',
//     age: 30,
//     __proto__: {
//         setAge: function() { ... },
//         getAge: function() { ... },
//         __proto__: {
//             constructor: F,
//             setName: function() { ... },
//             getName: function() { ... }
//         }
//     }
// }