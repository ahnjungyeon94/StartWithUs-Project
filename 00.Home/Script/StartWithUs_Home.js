//a 태그에 이벤트 넣기 (classname은 배열형식이기 때문에 for문을 돌려서 이벤트를 하나씩 넣어줘야한다.)

// var btn_category_on_click = function(){
// 	if (a_category.id == "btn_store"){
// 		document.getElementById("div_layout_category_store").style.display ="block"
// 	}
// 	else{
// 		alert(a_category.id);
// 	}
// }

var a_category = document.getElementsByClassName("btn_category");

for (var ii = 0; ii < a_category.length; ii++) {
	var categroy_ctrl = a_category[ii];
	
	categroy_ctrl.addEventListener("click",btn_category_on_click(categroy_ctrl.id),false);
}

function btn_category_on_click(id){
	if (id == "btn_store"){
		document.getElementById("div_layout_category_store").style.display ="block"
	}
	else{
		alert(id);
	}
}

// fruits.forEach(function(item,index,arry){
// 	console.log(item,index);
// });

// a_category.forEach(a_category => {
// 	console.log(a_category.id);
// 	// a_category.addEventListener("click",function(){
// 	// 	// alert(a_category.value);	
// 	// 	console.log(a_category.id);
// 	// });
// });


// a_category.addEventListener("click",function(){
// 	alert(a_category.value);
// });

// var btnEle = document.getElementById("btn_store");
// btnEle.addEventListener("click", function() {
//   alert("Click!");
// });