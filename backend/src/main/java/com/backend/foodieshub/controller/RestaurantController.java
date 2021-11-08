package com.backend.foodieshub.controller;

import com.backend.foodieshub.model.Restaurant;
import com.backend.foodieshub.service.RestaurantService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import java.util.List;

@RestController
// @CrossOrigin(origins = "localhost:5001")
@CrossOrigin
public class RestaurantController {
    
    @Autowired
    private RestaurantService restaurantService;

    @PostMapping("/restaurant")
    public void addRestaurant(@RequestBody Restaurant restaurant) {
        restaurantService.saveRestaurant(restaurant);
    }

    @RequestMapping("/restaurants")
    public List<Restaurant> findAllRestaurants() {
        return restaurantService.getAllRestaurant();
    }

    @RequestMapping("restaurants/{id}")
    public Restaurant findRestaurantById(@PathVariable int id) {
        return restaurantService.getRestaurantById(id);
    }

    @PutMapping("/update")
    public void updateRestaurant(@RequestBody Restaurant restaurant) {
        restaurantService.updateRestaurant(restaurant);
    }

    @DeleteMapping("delete/{id}")
    public void deleteRestaurant(@PathVariable int id) {
        restaurantService.deleteRestaurant(id);
    }
    
}
