class Calc {
    sum(a, b) {
        return a + b;
    }

    diff(a, b) {
        return a - b;
    }

    div(a, b) {
        if (!b || !isFinite(b)) {
            b = 1;
        }

        return a / b;
    }
}

module.exports = Calc;

const calc = new Calc();

if (calc.sum(4, 6) !== 10) {
    throw new Error('Сложение - Не работает');
}

if (calc.diff(4, 6) !== -2) {
    throw new Error('Вычитание - Не работает');
} 

if (calc.div(10, 5) !== 2) {
    throw new Error('Деление - Не работает');
} 

if (calc.div(10, 0) !== 10) {
    throw new Error('Деление на ноль - Не работает');
} 

if (calc.div(10) !== 10) {
    throw new Error('Деление без второго аргумента - Не работает');
} 
