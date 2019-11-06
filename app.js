// *function funkcja() {

//var x = document.getElementById("Input").value;

//var create = document.createElement("P");

//document.getElementById("demo").innerHTML = create.InnerText = x;

//}

function create(){

	var x = document.getElementById("Input").value;


var createstuff = document.createElement("p");
createstuff.innerHTML=x;
document.getElementById("container").appendChild(createstuff);
var utworz = document.createElement("button");
utworz.setAttribute("onclick","");





}

function destroy(){

var olddata=document.getElementById("container").lastChild;
document.getElementById("container").removeChild(olddata);

}
