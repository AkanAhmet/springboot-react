package com.akan.controller;

import com.akan.model.LoremIpsum;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestController {

	@Cacheable(cacheNames = "user_anasayfa_metin")
	@GetMapping("/all")
	public String allAccess() {
		return LoremIpsum.getlorem_ipsum();
	}


	@Cacheable(cacheNames = "user_profil_metin")
	@GetMapping("/user")
	@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
	public String userAccess() {
		return LoremIpsum.getlorem_ipsum();
	}

	@Cacheable(cacheNames = "moderator_metin")
	@GetMapping("/mod")
	@PreAuthorize("hasRole('MODERATOR')")
	public String moderatorAccess() {
		return "Moderator Paneli.";
	}

	@Cacheable(cacheNames = "admin_metin")
	@GetMapping("/admin")
	@PreAuthorize("hasRole('ADMIN')")
	public String adminAccess() {
		return "Admin Paneli.";
	}
}