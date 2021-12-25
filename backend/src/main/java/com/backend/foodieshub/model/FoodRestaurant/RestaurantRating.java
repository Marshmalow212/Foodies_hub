package com.backend.foodieshub.model.FoodRestaurant;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RestaurantRating {
    private int id;

    private int restaurantId;

    private double restaurantRatings;
    private String restaurantReviews;
    
}
