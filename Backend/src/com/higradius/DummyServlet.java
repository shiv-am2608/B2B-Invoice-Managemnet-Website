package com.higradius;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson;


/**
 * Servlet implementation class dummyServlet
 */
@WebServlet("/dummyServlet")
public class DummyServlet extends HttpServlet {
	 Connection conn=null;
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DummyServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();  
//        response.setContentType("text/html");  
//        out.println("<html><body>");  
        try 
        {  
        
        	ResultSet rs=null;
            Class.forName("com.mysql.jdbc.Driver");  
            conn = DriverManager.getConnection("jdbc:mysql://localhost/h2h_internship","root","root");  
            Statement stmt = conn.createStatement();
            String method = request.getParameter("method");
            int page=Integer.parseInt(request.getParameter("page"));
            int total=15;
            if(page==0) {}
            else
            {
            	page=page*total+1;
            }
            if(method.equals("display"))
            rs = stmt.executeQuery("select * from invoice_details limit "+page+","+total);
            else if(method.equals("search"))
            {
              	
              long  invoice_no = Long.valueOf(request.getParameter("invoice_no"));
              String sql="select * from invoice_details where doc_id = ? limit "+page+","+total;
              PreparedStatement statement = conn.prepareStatement(sql);
              statement.setLong(1,    invoice_no);
              rs = statement.executeQuery();
              
              
            }

            Gson gson = new Gson();
            
            response.setContentType("application/json");
     		response.setCharacterEncoding("UTF-8");
     		//Creating a JSONObject object
     		ArrayList<DatabaseConnectionPojo> al = new ArrayList<DatabaseConnectionPojo>();
     		
     		
            while (rs.next()) 
            {  
            
            	DatabaseConnectionPojo res = new DatabaseConnectionPojo();
            	res.setNameCustomer(rs.getString("name_customer"));
            	res.setCustomerNumber(rs.getString("cust_number"));
            	res.setDocId(rs.getLong("doc_id"));
            	res.setTotalOpenAmount(rs.getDouble("total_open_amount"));
                res.setDueInDate(rs.getDate("due_in_date"));
                al.add(res);
                    
            }  
            String data = gson.toJson(al);
            out.write(data);
            
            conn.close();  
           }  
            catch (Exception e) 
           {  
            out.println(e);  
        }  
    }  
	

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}