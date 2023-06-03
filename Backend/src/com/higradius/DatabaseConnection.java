package com.higradius;
import java.sql.*;

public class DatabaseConnection {
	// JDBC driver name and database URL
	static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
	static final String DB_URL = "jdbc:mysql://localhost/h2h_internship";
	// Database credentials
    static final String USER = "root"; 
	static final String PASS = "root";
	
	public static Connection initialize()throws SQLException,ClassNotFoundException{
			Connection conn = null; 
			//Register JDBC driver 
	        Class.forName("com.mysql.jdbc.Driver");
			//Open a connection
	        conn = DriverManager.getConnection(DB_URL,USER, PASS);
	        conn.setAutoCommit(false);
	        return conn;
	}
}