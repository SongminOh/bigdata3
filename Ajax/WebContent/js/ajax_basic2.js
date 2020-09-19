'use strict';

$(function(){
	
	$('button').on('click', function(){
		
		let obj = {
			num: 123,
			alpha: 'Hello',
			hangul:'안녕'
		};
		
		// /Ajax?num=123&alpha=Hello&hangul=16진수형태 <<로 전달됨(한글은 16진수형태로 변형되어 전달)
		$.ajax({
			url :'Ajax',
			data: obj,		//'num=123',
			dataType:'json',
			success: function(res){
				//h1요소의 값을 변경
				//res에는 {name: "오송민"} 데이터가 담겨있기 때문에 .name으로 접근
				$('h1').html(res.name);
				
				console.log(res);
				console.log('서버요청성공!');
			}
			
		});	//end ajax
	});	//end on()
});	//end function()