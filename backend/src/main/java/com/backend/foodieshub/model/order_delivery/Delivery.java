/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.backend.foodieshub.model.order_delivery;

import java.io.Serializable;
import java.sql.Time;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author marshmalow
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "delivery")
public class Delivery implements Serializable{
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int location_id;
    
    @ManyToOne
    @JoinColumn (name="delivery_method_id")
    private Delivery_method delivery_method_id;
    
    private double delivery_charge;
    private double net_amount;
    private Time delivery_time;
}
