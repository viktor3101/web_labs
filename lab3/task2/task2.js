window.addEventListener('load', function () {

    let n = +prompt("Скільки рядків трикутника Паскаля потрібно вивести?");
    let main = document.getElementById('triangle');
   

    function pascal(n, a) {

      if (n < 2) return a; 
      
      var prevRow = a[a.length-1];
      var curRow = [1];

      for (var i = 1; i < prevRow.length; i++) {
        curRow[i] = prevRow[i] + prevRow[i-1];
      }
      curRow.push(1);
      a.push(curRow);

      return pascal(n-1, a); 
    }


    var triangle = pascal(n, [[1]]);

    for(var i = 0; i < triangle.length; i++){
        var p = document.createElement('p');
        p.innerText = triangle[i].join(" ");
        p.style.margin= "0";
        p.style.marginBottom = "3vh";
        p.style.fontSize = "1.8vw";
        p.style.textAlign = "center";
        main.appendChild(p);
    }
 
})