
// $(".form").submit(e => {
//     e.preventDefault();

//     $.fancybox.open({
// 		src: '#modal',
// 		type: 'inline'
// 	});
// });

// $(".app-submit-btn").click(e => {
//     e.preventDefault();

//     $.fancybox.close();
// })



// Запрос на JS


// Открытие модального окна
var modal = document.getElementById('modal');
var btn = document.getElementById("ordersbtn");
var span = document.getElementsByClassName("app-submit-btn")[0];

btn.onclick = function (){
    modal.style.display = "block";
    return false;
}

span.onclick = function (){
    
    modal.style.display = "none";
}


window.onclick =function (event) {
 if(event.target == modal) {
     modal.style.display = "none";
 }
}