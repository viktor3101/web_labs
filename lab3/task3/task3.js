window.addEventListener('load', function () {

    let n = +prompt("Скільки пляшок лишилося на стіні?");
    let bottle = 1;
    for (let i = n; i >= 1; i--) {
            var p = document.createElement('p');
            document.body.appendChild(p);
            p.innerText = i + " пляшок стоїть на стіні, одна упала і залишилось " + (n - bottle) + ".";
            p.style.width = "100%";
            p.style.height = "5vh";
            p.style.margin = "0";
            p.style.fontSize = "20px";
        bottle++;
    }
    var p = document.createElement('p');
    document.body.appendChild(p);
    p.innerText = "Жодної";
    p.style.width = "100%";
    p.style.height = "5vh";
    p.style.margin = "0";
    p.style.fontSize = "20px";
})