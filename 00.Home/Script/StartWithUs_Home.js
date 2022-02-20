//a 태그에 이벤트 넣기 (classname은 배열형식이기 때문에 for문을 돌려서 이벤트를 하나씩 넣어줘야한다.)
var btn_category_on_click = function (ctrl){
	var id = ctrl.target.id;

	if (id == "btn_store"){
		$.ajax({
			url : "../03.Store/StartWithUs_Store.html",
			// url:"www.naver.com",
			dataType : "html",
			type : "post",  						  // post 또는 get
			data : {},   // 호출할 url 에 있는 페이지로 넘길 파라메터
			success : function(result){
					$("#div_layout_category_store").html(result);
			}
		});
	}
  else{
		document.getElementById("div_layout_category_store").style.display = "none";
	}
}

var a_category = document.getElementsByClassName("btn_category");

for (var ii = 0; ii < a_category.length; ii++) {
	var categroy_ctrl = a_category[ii];
	//element .addEventListener( event , function , useCapture )
	//useCapture란 ? 선택 과목. 이벤트 캡처 또는 버블 링 단계에서 실행할지 여부를 지정하는 부울 값.
	categroy_ctrl.addEventListener("click",btn_category_on_click,false);
}


function btn_category_mouseover(subCategory){
	if(document.getElementById){
		var el = document.getElementById(subCategory);
		var ar = document.getElementById("div_layout_category_sub_job");

		if(ar.style.display == "none"){
			ar.style.display = "block";
		}
		else{
			ar.style.display = "none";
		}
	}
}