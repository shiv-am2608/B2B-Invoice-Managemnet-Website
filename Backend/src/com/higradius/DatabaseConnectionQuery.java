package com.higradius;

import java.io.BufferedReader;
import java.io.FileReader;
import java.sql.*;
import java.text.SimpleDateFormat;

public class DatabaseConnectionQuery {
	static final String csv_file = "C:/Users/KIIT/Desktop/HRC/Stage1/Mywork/1805428.csv";//to store file location
	public static void main(String args[]) {
		long start = System.currentTimeMillis();//to mark the beginning of process
		Connection conn=null;	
		int batchSize = 100;//batch size 
		try {
			int count = 0;//to keep a track to add in batches
			conn=DatabaseConnection.initialize();//to initialize sql connection
			String sql;
	        sql = "Insert into invoice_details values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";//to prepare the sql query
	        PreparedStatement statement = conn.prepareStatement(sql);  
	        BufferedReader lineReader = new BufferedReader(new FileReader(csv_file));//to read the csv file
	        String lineText = null;    
	        lineReader.readLine(); // skip header line
	        SimpleDateFormat temp2 = new SimpleDateFormat("dd-MM-yyyy");//to read dates in given format :- dd-MM-yyyy
	        SimpleDateFormat temp3 = new SimpleDateFormat("yyyyMMdd");//to read dates in given format:- yyyyMMdd
	        //loop to read our dataset line by line
	        while ((lineText = lineReader.readLine()) != null) { 
	        	count++;//increasing content in batch
	        	DatabaseConnectionPojo obj = new DatabaseConnectionPojo();//to create a new object containing all details
		        String[] data = lineText.split(",");//to split each rows as they are "Comma Separated Values(CSV)"
		        obj.setBusinessCode(data[0]);
		        obj.setCustomerNumber(data[1]);
		        obj.setNameCustomer(data[2]);
		        //to handle IllegealArgumentException which is arised when clear_date is null
		        try {
		        	obj.setClearDate(Timestamp.valueOf(data[3]));
		        }
		        catch(IllegalArgumentException e)
		        {
		        	obj.setClearDate(null);
		         }
		              obj.setBusinessYear((int)Double.parseDouble(data[4]));
		              obj.setDocId((long)Double.parseDouble(data[5]));
		              obj.setPostingDate(new java.sql.Date(temp2.parse(data[6]).getTime()));
		              obj.setDocumentCreateDate(new java.sql.Date( temp3.parse(data[8]).getTime()));
		              obj.setDueInDate(new java.sql.Date( temp3.parse(data[9]).getTime()));
		              obj.setInvoiceCurrency(data[10]);
		              obj.setDocumentType(data[11]);
		              obj.setPostingId((int)Double.parseDouble(data[12]));;
		              obj.setAreaBusiness(data[13].isEmpty() ? null : data[13]);//to assign null if empty else the data fetched from dataset
		              obj.setTotalOpenAmount(Double.parseDouble(data[14])); 
		              obj.setBaselineCreateDate(new java.sql.Date(temp3.parse((data[15])).getTime()));
		              obj.setCustomerPaymentTerms(data[16]);
		              //to handle NumberFormatException arised due to invoice id being null
		              try {
		            	  obj.setInvoiceId((long)Double.parseDouble(data[17]));
		              }catch(NumberFormatException e)
		              {
		            	  obj.setInvoiceId(-1);
		              }
		              obj.setIsOpen((int)Double.parseDouble(data[18]));
		              
		              //preparing the final SQL query for the row
		              statement.setString(1,    obj.getBusinessCode());
		              statement.setString(2,    obj.getCustomerNumber());
		              statement.setString(3,    obj.getNameCustomer());
		              statement.setTimestamp(4, obj.getClearDate());
		              statement.setInt(5,     	obj.getBusinessYear());
		              statement.setLong(6,   	obj.getDocId());
		              statement.setDate(7,    	obj.getPostingDate());
		              statement.setDate(8,    	obj.getDocumentCreateDate());
		              statement.setDate(9,    	obj.getDueInDate());
		              statement.setString(10, 	obj.getInvoiceCurrency());
		              statement.setString(11, 	obj.getDocumentType());
		              statement.setInt(12,    	obj.getPostingId());
		              statement.setString(13, 	obj.getAreaBusiness());
		              statement.setDouble(14, 	obj.getTotalOpenAmount());
		              statement.setDate(15,   	obj.getBaselineCreateDate());
		              statement.setString(16, 	obj.getCustomerPaymentTerms());
		              
		              //to set appropriate values in invoice_id
		              if(obj.getInvoiceId()!=-1)
		            	  statement.setLong(17, obj.getInvoiceId());
		              else
		            	  statement.setNull(17,Types.NULL);
		              statement.setInt(18, obj.getIsOpen());
		                 
		              statement.addBatch();			//to add the prepared query into the batch
		              if(count % batchSize == 0)	//to check if batch is full(that is it contains 100 values)
		            	  statement.executeBatch();	//to execute the entire batch
	          }
	
	          statement.executeBatch(); //to execute the remaining queries(case in which total no. of rows is not a multiple of 100)
	          lineReader.close();		//to close lineReader
	          conn.commit();			//to save changes before closing the connection
	          conn.close();				//to close the connection
        
        }
      catch(SQLException se) {se.printStackTrace();}
      catch(Exception e){e.printStackTrace();}
      finally{
      		try{
      			if(conn != null)
      			conn.close();//to close the connection if programs ends abruptly
      			}
      		catch(SQLException se){
      			se. printStackTrace();
      		}
		}
		long end = System.currentTimeMillis();//to find the ending time of process
		System.out.println("Your Data has been Populated!!!! \nTime:"+(end -start)/1000+"seconds");	//to display the total time taken to populate the data
		System.out.println("Good Bye!!! Have a Great Day!!!");
	}
}
