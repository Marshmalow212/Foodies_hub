package com.backend.foodieshub.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.foodieshub.model.FoodCategory;

public interface FoodCategoryRepository extends JpaRepository<FoodCategory,Integer>{
    
}
