'use strict';

$(function(){
	
	$('button').on('click', function(){
		
		//ajax(�񵿱����) : ȭ�鰻�ž��� �ʿ��� �����͸��� ��û/�����ϴ� ���
		//ajax�⺻���� ___ �Ʒ�.. ���� �Ӽ���..
		//url: ��û�� ������ �ּ�
		//success: ������ ��û�� �������� �� �����ϴ� �޼ҵ�
		//data: ��û�� �� ������ ���� ������
		//dataType: ������� �������� ���� ����(xml, plain(�ܼ��ؽ�Ʈ�� �ްڴ�), json, html, ...)
		//error: ��û�� �������� �� �����ϴ� �޼ҵ�
		//type: ������ ���۹�� ����(GET/POST)
		$.ajax({
			url:'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e&targetDt=20200914',
			success: function(res){
				//������� �����͸� ������ �� function()�� �Ű������� �������� ��!
		   		 console.log(res);
		         console.log(res.boxOfficeResult);
		         console.log(res.boxOfficeResult.dailyBoxOfficeList);
		         console.log('���� ��û ����!');
		
		         let movieList = res.boxOfficeResult.dailyBoxOfficeList;
		         
		         movieList.forEach(function(movie){
		            console.log(movie.movieNm);//��ȭ�̸��� ���
		         });

			}
			
		});	//end ajax
	});	//end on()
});	//end function()