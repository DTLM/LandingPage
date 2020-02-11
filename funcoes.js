function chamar() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse(this.responseText);
        var result= "";
        for(var i = 0; i < obj.length; i++){
            result = result + obj[i].name + "<br>";
        }
        document.getElementById("retorno").innerHTML = result;
      }
    };
    xhttp.open("GET", "https://api.github.com/users/DTLM/repos", true);
    xhttp.send();
}