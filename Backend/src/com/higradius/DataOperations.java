package com.higradius;
import java.io.*;
import java.sql.*;
import java.text.SimpleDateFormat;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson;

public class DataOperations extends  HttpServlet {
	 Connection conn=null;
		private static final long serialVersionUID = 1L;
	    public DataOperations() {
	        super();
	    }

		protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			PrintWriter out = response.getWriter();    
	        try 
	        {  
	            Class.forName("com.mysql.jdbc.Driver");  
	            conn = DriverManager.getConnection("jdbc:mysql://localhost/h2h_internship","root","root");  	           
	            String method = request.getParameter("method");
	            if(method.equals("add"))
	            {
	            	 
	            	 SimpleDateFormat temp  = new SimpleDateFormat("yyyyMMdd");
	            	 String sql;
	            	 String cust_name = request.getParameter("cust_name");
	            	 String cust_no = request.getParameter("cust_no");
	            	 long  invoice_no = Long.parseLong(request.getParameter("invoice_no"));
	            	 Date due_date = new java.sql.Date(temp.parse(request.getParameter("due_date")).getTime());
	            	 double invoice_amount = Double.parseDouble(request.getParameter("invoice_amount"));
	    	         sql = "Insert into invoice_details values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
	    	         PreparedStatement stmt = conn.prepareStatement(sql);
	    	          stmt.setString(1,    null);
		              stmt.setString(2,    cust_no);
		              stmt.setString(3,    cust_name);
		              stmt.setTimestamp(4, null);
		              stmt.setNull(5,    Types.NULL);
		              stmt.setLong(6,    invoice_no);
		              stmt.setDate(7,    null);
		              stmt.setDate(8,    null);
		              stmt.setDate(9,    due_date);
		              stmt.setString(10, null);
		              stmt.setString(11, null);
		              stmt.setNull(12,    Types.NULL);
		              stmt.setString(13, null);
		              stmt.setDouble(14, invoice_amount);
		              stmt.setDate(15,   null);
		              stmt.setString(16, null);
		              stmt.setNull(17,Types.NULL);
		              stmt.setNull(18, Types.NULL);
                      stmt.executeUpdate();
	    	     }
	            else if(method.equals("edit"))
	            {
	            	String sql;
	            	long  invoice_no = Long.parseLong(request.getParameter("invoice_no"));
	            	double invoice_amount = Double.parseDouble(request.getParameter("invoice_amount"));
	    	        sql = "update invoice_details set total_open_amount=? where doc_id = ?";
	    	        PreparedStatement stmt = conn.prepareStatement(sql);
	    	        stmt.setDouble(1,    invoice_amount);
	    	        stmt.setLong(2,    invoice_no);
            	    stmt.executeUpdate();
	            }
            else if(method.equals("delete"))
            {
            	String sql;
       	        long  invoice_no = Long.parseLong(request.getParameter("invoice_no"));
	            sql = "delete from invoice_details where doc_id = ?";
	            PreparedStatement stmt = conn.prepareStatement(sql);
	            stmt.setLong(1,    invoice_no);
   	            stmt.executeUpdate();
	         
            }
	            conn.close();
            
	           }  
	            catch (Exception e) 
	           {  
	            out.println(e);  
	        }  
	    }  
		protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			doGet(request, response);
		}

	}