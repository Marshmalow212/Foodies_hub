package com.backend.foodieshub.service;

import com.backend.foodieshub.repository.FoodCategoryRepository;
import com.backend.foodieshub.repository.FoodTypeRepository;
import com.backend.foodieshub.repository.MenuRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.foodieshub.model.Menu;

import java.util.List;

@Service
public class MenuService {
    @Autowired
    private MenuRepository menuRepository;
    private FoodCategoryRepository foodCategoryRepository;
    private FoodTypeRepository foodTypeRepository;

    // GET METHOD------------------------------
    public List<Menu> getAllMenu() {
        return menuRepository.findAll();
    }

    // POST METHOD------------------------------------------
    public void saveMenu(Menu menu) {
        menuRepository.save(menu);
    }

    // DELETE METHOD---------------------
    public void deleteMenu(int id) {
        menuRepository.deleteById(id);
    }

    // UPDATE METHOD----------------
    public void updateMenu(Menu menu) {
        menuRepository.save(menu);
    }
}
