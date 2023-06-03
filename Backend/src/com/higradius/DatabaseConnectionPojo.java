package com.higradius;
import java.sql.Timestamp; //used for Clear_date

public class DatabaseConnectionPojo {
	//declaration of required variables
	private String  business_code;
    private String  cust_number;
    private String  name_customer;
    private Timestamp  clear_date;
    private int business_year;
    private long doc_id;
    private java.sql.Date posting_date;
    private java.sql.Date  document_create_date;
    private java.sql.Date  due_in_date;
    private String  invoice_currency ;
    private String  document_type;
    private int  posting_id ;
    private String  area_business;
    private double  total_open_amount;
    private java.sql.Date  baseline_create_date;
    private String  cust_payment_terms ;
    private long invoice_id;
    private int  isOpen; 
	
    //defining all getters and setters
	public String getBusinessCode() {
		return business_code;
	}
	public void setBusinessCode(String business_code) {
		this.business_code = business_code;
	}
	public String getCustomerNumber() {
		return cust_number;
	}
	public void setCustomerNumber(String cust_number) {
		this.cust_number = cust_number;
	}
	public String getNameCustomer() {
		return name_customer;
	}
	public void setNameCustomer(String name_customer) {
		this.name_customer= name_customer;
	}
	public Timestamp getClearDate() {
		return clear_date;
	}
	public void setClearDate(Timestamp clear_date) {
		this.clear_date= clear_date;
	}
	public int getBusinessYear() {
		return business_year;
	}
	public void setBusinessYear(int business_year) {
		this.business_year = business_year;
	}
	public long getDocId() {
		return doc_id;
	}
	public void setDocId(long doc_id) {
		this.doc_id = doc_id;
	}
	public java.sql.Date getPostingDate() {
		return posting_date;
	}
	public void setPostingDate(java.sql.Date posting_date) {
		this.posting_date = posting_date;
	}
	public java.sql.Date getDocumentCreateDate() {
		return document_create_date;
	}
	public void setDocumentCreateDate(java.sql.Date document_create_date) {
		this.document_create_date = document_create_date;
	}
	public java.sql.Date getDueInDate() {
		return due_in_date;
	}
	public void setDueInDate(java.sql.Date due_in_date) {
		this.due_in_date = due_in_date;
	}
	public String getInvoiceCurrency() {
		return invoice_currency;
	}
	public void setInvoiceCurrency(String invoice_currency) {
		this.invoice_currency = invoice_currency;
	}
	public String getDocumentType() {
		return document_type;
	}
	public void setDocumentType(String document_type) {
		this.document_type = document_type;
	}
	public int getPostingId() {
		return posting_id;
	}
	public void setPostingId(int posting_id) {
		this.posting_id = posting_id;
	}
	public String getAreaBusiness() {
		return area_business;
	}
	public void setAreaBusiness(String area_business) {
		this.area_business = area_business;
	}
	public double getTotalOpenAmount() {
		return total_open_amount;
	}
	public void setTotalOpenAmount(double total_open_amount) {
		this.total_open_amount = total_open_amount;
	}
	public java.sql.Date getBaselineCreateDate(){
		return baseline_create_date;
	}
	public void setBaselineCreateDate(java.sql.Date baseline_create_date) {
		this.baseline_create_date = baseline_create_date;
	}
	public String getCustomerPaymentTerms() {
		return cust_payment_terms;
	}
	public void setCustomerPaymentTerms(String cust_payment_terms) {
		this.cust_payment_terms = cust_payment_terms;
	}
	public long getInvoiceId(){
		return invoice_id;
	}
	public void setInvoiceId(long invoice_id) {
		this.invoice_id = invoice_id;
	}
	public int getIsOpen() {
		return isOpen;
	}
	public void setIsOpen(int isOpen) {
		this.isOpen = isOpen;
	}

}