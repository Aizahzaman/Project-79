menu_list_array = ["Classic Pizza",
"Pepperoni Pizza",
"Veggie Pizza",
"Extra Cheese Pizza",
"Extra Pepperoni Pizza"];

function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort( );  
    for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<li>'+menu_list_array[i]+'</li>';
    }
    htmldata=htmldata="</ol>"
    document.getElementById("display_menu").innerHTML=menu_list_array;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
//Complete the code

}

function add_top(){
//Complete the code
}