window.addEventListener("load",function(){
    var button = document.getElementById("add_tr");
    var table = document.getElementById('table');
    var delete_tr = document.getElementsByClassName("delete_tr");
    var diagrama = document.getElementById("diagrama");
    var block_for_diagrama = document.getElementsByClassName("block_for_diagrama");

    button.addEventListener('click',function(){
        var stud = prompt("Введіть студента");
        var sq = +prompt("Введіть бал 0-100");
        if(sq>100){
            alert("Ви ДЦП!!!");
        }
        else{
            var tr = document.createElement('tr');
        table.appendChild(tr);
        tr.classList.add("tr");//Добавляем стили из css
        tr.classList.add("tr:nth-child(2n)");//Добавляем стили из css

        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        tr.appendChild(td1);
        td1.classList.add("td");
        td1.innerHTML = "<button class='delete_tr'>Видалити</button>";//innerHTML считка  хтмл

        tr.appendChild(td2);
        td2.classList.add("td");
        td2.innerHTML = stud;

        tr.appendChild(td3);
        td3.classList.add("td");
        td3.innerHTML = sq;



        var block = document.createElement("div");//создание блоков
        diagrama.appendChild(block);
        block.classList.add("block_for_diagrama");
        block.style.height = sq + "%";
        block.setAttribute("title",sq + "%");

        var p = document.createElement("p");
        block.appendChild(p);
        p.innerText = stud;
        p.classList.add("rotate");//перевернуть текст

        for(let k=0;k<delete_tr.length;k++){
            delete_tr[k].addEventListener("click", function(){
                var row = delete_tr[k].parentNode.parentNode;
                row.parentNode.removeChild(row);//удаление строки
                diagrama.removeChild(block_for_diagrama[k]);//удаление блока в диаграме
            })
        }
        // for(let i=0;i<delete_tr.length;i++){
        //     delete_tr[i].addEventListener("click", function(){
        //         var row = delete_tr[i].parentNode.parentNode;
        //         row.parentNode.removeChild(row);
        //         diagrama.removeChild(block_for_diagrama[i]);
        //     })
        //}
        }

        
    })

    for(let i=0;i<delete_tr.length;i++){
        delete_tr[i].addEventListener("click", function(){
            var row = delete_tr[i].parentNode.parentNode;
            row.parentNode.removeChild(row);
            diagrama.removeChild(block_for_diagrama[i]);
        })
    }

})