package com.chikitsa.dao;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.chikitsa.beans.Users;

@Component
public class UsersDAO {
	@Autowired
	DataSource dataSource;
	@Autowired
	private PasswordEncoder bcryptEncoder;
	
	 public int createUser(Users user) {
		 String query = "insert into users (first_name,last_name,aadhar_ID,email,password,phone) values (?,?,?,?,?,?)";
		 int i=0;
		 try {
		 JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
	        Object[] inputs = new Object[] {user.getFname(),user.getLname(),user.getAadharID(),user.getEmail(),bcryptEncoder.encode(user.getPassword()),user.getPhone()};
	        i=jdbcTemplate.update(query, inputs);
		 }catch(Exception e) {
			 e.printStackTrace();
		 }
	       return i;
	       
	        
	 }
}
