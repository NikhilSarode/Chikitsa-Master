package com.chikitsa.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.chikitsa.beans.Hateos;
import com.chikitsa.beans.Users;
import com.chikitsa.dao.UsersDAO;


@RestController
@RequestMapping("/users")
public class UserControllers {
	
	@Autowired
	UsersDAO ud;
	
	
	/**
	 * @return
	 */
	@RequestMapping(value="",method=RequestMethod.GET)
	public @ResponseBody List<Hateos> getLinks() {
		Hateos h1=new Hateos();
		
		String loginUrl=ServletUriComponentsBuilder.fromCurrentRequest().path("/login").toUriString();
		h1.setRel("login");
		h1.setHref(loginUrl);
		
		Hateos h2=new Hateos();
		String signupUrl=ServletUriComponentsBuilder.fromCurrentRequest().path("/signup").toUriString();
		h2.setRel("signup");
		h2.setHref(signupUrl);
		
		List<Hateos> harr=new ArrayList<Hateos>();
		harr.add(h1);
		harr.add(h2);
		return harr ;
	}
	
	@RequestMapping(value="/signup",method=RequestMethod.POST)
	public ResponseEntity<String> registerUser(@RequestBody Users user) {
 
		int result=ud.createUser(user);
		if(result==0) {
			return new ResponseEntity<String>("{\"status\":\"failed\",\"msg\":\"Something went wrong!!! Please retry\"}",HttpStatus.CREATED);
		}else {
			return new ResponseEntity<String>("{\"status\":\"success\",\"msg\":\"User registered successfully\"}",HttpStatus.CREATED);
		}
		
	}

}
