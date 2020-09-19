package com.ajax;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/Ajax")
public class AjaxTest extends HttpServlet {
	
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String num = request.getParameter("num");
		String alpha = request.getParameter("alpha");
		String hangul = request.getParameter("hangul");
		
		System.out.println(num);
		System.out.println(alpha);
		System.out.println(hangul);
		
		System.out.println("ajax_basic2.html로부터 요청이 들어옴..");
		
		//사용자에게 응답데이터를 전달 : out객체 활용
		response.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
//		out.print(num);
//		
//		//alpha와 hangul 데이터를 out객체를 이용해서 전달하시오.
//		out.print(alpha);
//		out.print(hangul);
		out.print("{\"name\":\"오송민\"}");
		
	}

}
