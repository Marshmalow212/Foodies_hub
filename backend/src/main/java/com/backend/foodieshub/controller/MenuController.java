package com.backend.foodieshub.controller;

import com.backend.foodieshub.model.Menu;
import com.backend.foodieshub.service.MenuService;

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
public class MenuController {
    @Autowired
    private MenuService menuService;

    @PostMapping("/menu")
    public void addMenu(@RequestBody Menu menu) {
        menuService.saveMenu(menu);
    }

    @RequestMapping("/menu")
    public List<Menu> findAllMenu() {
        return menuService.getAllMenu();
    }

    @PutMapping("/menuupdate")
    public void updateMenu(@RequestBody Menu menu) {
        menuService.updateMenu(menu);
    }

    @DeleteMapping("menudelete/{id}")
    public void deleteMenu(@PathVariable int id) {
        menuService.deleteMenu(id);
    }
}
