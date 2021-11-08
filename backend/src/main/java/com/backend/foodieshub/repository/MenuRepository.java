package com.backend.foodieshub.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.foodieshub.model.Menu;

public interface MenuRepository extends JpaRepository<Menu,Integer>{
}
