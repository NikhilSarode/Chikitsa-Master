package com.chikitsa.security;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.security.web.savedrequest.HttpSessionRequestCache;
import org.springframework.security.web.savedrequest.RequestCache;
import org.springframework.security.web.savedrequest.SavedRequest;
import org.springframework.util.StringUtils;

public class MySavedRequestAwareAuthenticationSuccessHandler  extends SimpleUrlAuthenticationSuccessHandler {

	 private RequestCache requestCache = new HttpSessionRequestCache();
	 
	    @Override
	    public void onAuthenticationSuccess(
	      HttpServletRequest request,
	      HttpServletResponse response, 
	      Authentication authentication) 
	      throws ServletException, IOException {
	  System.out.println("Authentication success");
	  UserDetails userDetails = (UserDetails)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
	  String userName = userDetails.getUsername();
	  response.addHeader("username", userName);	
	  response.addHeader("Access-Control-Allow-Methods","GET, POST, OPTIONS");
	  response.addHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization, username");
	  response.addHeader("Access-Control-Expose-Headers","username");
	 
	
	        SavedRequest savedRequest
	          = requestCache.getRequest(request, response);
	 
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
