package com.backend.foodieshub.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.foodieshub.model.Restaurant;

public interface RestaurantRepository extends JpaRepository<Restaurant,Integer>{
    //Restaurant findByAnother(String Another)
}
