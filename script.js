let a = true;
while (a === true) {
    console.log("Я загадал число от 1 до 10. Попробуй угадать его!");
    let secretNumber = Math.floor(Math.random() * 10) + 1
    let attempts = 5
    while (attempts > 0) {
        let userNumber = Number(prompt("Введите число:"));
        if (userNumber < secretNumber) {
            console.log("Секретное число больше");
            attempts--;
        } else if (userNumber > secretNumber) {
            console.log("Секретное число меньше");
            attempts--;
        } else {
            console.log("Вы угадали!");
            break;
        }
        console.log(`У вас осталось ${attempts} попыт.`);

        if (attempts === 0) {
            console.log("Вы проиграли!");
        }
    }
    a = confirm("Играть ещё раз?");
}

