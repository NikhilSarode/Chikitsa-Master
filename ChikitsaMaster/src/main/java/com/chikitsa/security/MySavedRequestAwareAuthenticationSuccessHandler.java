package com.chikitsa.security;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.security.web.savedrequest.HttpSessionRequestCache;
import org.springframework.security.web.savedrequest.RequestCache;
import org.springframework.security.web.savedrequest.SavedRequest;
import org.springframework.util.StringUtils;
import com.chikitsa.beans.LoggedInUserDetails;
import com.google.gson.Gson;

public class MySavedRequestAwareAuthenticationSuccessHandler  extends SimpleUrlAuthenticationSuccessHandler {

	 private RequestCache requestCache = new HttpSessionRequestCache();
	 private Gson gson = new Gson();
	 
	    @Override
	    public void onAuthenticationSuccess(
	      HttpServletRequest request,
	      HttpServletResponse response, 
	      Authentication authentication) 
	      throws ServletException, IOException {
	  System.out.println("Authentication success");
	  UserDetails userDetails = (UserDetails)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
	  String userName = userDetails.getUsername();
	  LoggedInUserDetails loggedInUserDetails=new LoggedInUserDetails();
	  loggedInUserDetails.setUsername(userName);
      String loggedInUser = this.gson.toJson(loggedInUserDetails);

      PrintWriter out = response.getWriter();
      response.setContentType("application/json");
      response.setCharacterEncoding("UTF-8");
      out.print(loggedInUser);
      out.flush(); 
	
	        SavedRequest savedRequest
	          = requestCache.getRequest(request, response);
	 System.out.println("After response.close()");
	        if (savedRequest == null) {
	            clearAuthenticationAttributes(request);
	            return;
	        }
	        String targetUrlParam = getTargetUrlParameter();
	        if (isAlwaysUseDefaultTargetUrl()
	          || (targetUrlParam != null
	          && StringUtils.hasText(request.getParameter(targetUrlParam)))) {
	            requestCache.removeRequest(request, response);
	            clearAuthenticationAttributes(request);
	            return;
	        }
	 
	        clearAuthenticationAttributes(request);
	        System.out.println("Authentication success ends");
	    }
	 
	    public void setRequestCache(RequestCache requestCache) {
	        this.requestCache = requestCache;
	    }
}
