window.addEventListener('load', function () {

    let year = +prompt("Скільки вам років?");
    let education = +prompt("Яка ваша освіта?(вкажіть цифру)  1.Технічна 2.Економічна" + "3.Педагогічна 4.Юридична 5.Інша");
    let gender = +prompt("Ви чоловік(напишіть 1) чи жінка(напишіть 2)?");
    let number = +prompt("Виберіть число від 1 до 100");

    let children = [1, 2, 3, 4, 5];
    let job = ["Вчитель", "Економіст", "Кухар", "Програміст", "Юрист"];
    let partner_man = ["Андрій", "Володимир", "Олег", "Хуан", "Брюс"];
    let partner_woman = ["Хуаніта", "Соіфія", "Ольга", "Соломія", "Катерина"];
    let country = ["Україна", "США", "КНДР", "Іьалія", "Ямайка"];

    var part1,
        part2,
        part3,
        part4;

    if (year > 0 && year < 19) {
        part1 = children[4];
    } else if (year > 18 && year < 23) {
        part1 = children[3];
    } else if (year > 22 && year < 30) {
        part1 = children[2];
    } else if (year > 29 && year < 40) {
        part1 = children[1];
    } else {
        part1 = children[0];
    }

    switch (education) {
        case 1:
            part2 = job[3];
            break;
        case 2:
            part2 = job[1];
            break;
        case 3:
            part2 = job[0];
            break;
        case 4:
            part2 = job[4];
            break;
        case 5:
            part2 = job[2];
            break;
        default:
            part2 = "Безробітний";
            break;
    }

    if (number > 0 && number < 21) {
        part4 = country[3];
        switch (gender) {
            case 1:
                part3 = partner_woman[3];
                break;
            case 2:
                part3 = partner_man[3];
                break;
            default: 
                part3="Хуліо";
                break;    
        }
    } else if (number > 20 && number < 41) {
        part4 = country[4];
        switch (gender) {
            case 1:
                part3 = partner_woman[4];
                break;
            case 2:
                part3 = partner_man[4];
                break;
            default: 
                part3="Хуліана"
                break;    
        }
    } else if (number > 40 && number < 61) {
        part4 = country[2];
        switch (gender) {
            case 1:
                part3 = partner_woman[2];
                break;
            case 2:
                part3 = partner_man[2];
                break;
            default: 
                part3="Хуліан";
                break;    
        }
    } else if (number > 60 && number < 81) {
        part4 = country[1];
        switch (gender) {
            case 1:
                part3 = partner_woman[1];
                break;
            case 2:
                part3 = partner_man[1];
                break;
            default: 
                part3="Хуліо";
                break;    
        }
    } else {
        part4 = country[0];
        switch (gender) {
            case 1:
                part3 = partner_woman[0];
                break;
            case 2:
                part3 = partner_man[0];
                break;
            default: 
                part3="Хуліо";
                break;    
        }
    }


    alert("Ви укладете шлюб з "+part3+" та у вас буде "+part1+" дітей. "+"Ви переїдете до країни - "
    +part4+" на посаду "+part2+".");
})