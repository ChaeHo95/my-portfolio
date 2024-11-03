'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppBar, Button, Drawer, IconButton, List, ListItemButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <AppBar position="static" elevation={0} className="bg-transparent shadow-none">
      <Toolbar className="flex justify-between">
        {/* 로고 */}
        <Typography
          variant="h6"
          className="cursor-pointer text-lg font-bold no-underline"
          component={Link}
          href="/"
          color="textPrimary"
        >
          My Portfolio
        </Typography>

        {/* 데스크탑 메뉴 */}
        <div className="hidden gap-4 md:flex">
          <Button component={Link} href="/projects">
            Projects
          </Button>
          <Button component={Link} href="/about">
            About
          </Button>
          <Button component={Link} href="/contact">
            Contact
          </Button>
        </div>

        {/* 모바일 메뉴 아이콘 */}
        <IconButton edge="end" aria-label="menu" className="block md:hidden" onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>

        {/* 모바일 드로어 메뉴 */}
        <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerToggle}>
          <List className="w-48 p-4">
            <ListItemButton component={Link} href="/projects" onClick={handleDrawerToggle}>
              Projects
            </ListItemButton>
            <ListItemButton component={Link} href="/about" onClick={handleDrawerToggle}>
              About
            </ListItemButton>
            <ListItemButton component={Link} href="/contact" onClick={handleDrawerToggle}>
              Contact
            </ListItemButton>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
