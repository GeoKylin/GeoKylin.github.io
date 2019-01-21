<%--
  Created by IntelliJ IDEA.
  User: wangk
  Date: 2018/8/23
  Time: 10:21
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@ page import="geokylin.cn.test" %>
<!DOCTYPE HTML>
<html>
<head>
    <title>test</title>
</head>
<body>
<%
    test t = new test();
//    t.hello();

%>
<div>
    <p><%=t.hello()%></p>
</div>

</body>
</html>
