import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from './CustomLink';

// const setActive = ({isActive}) => isActive ? 'active-link' : ''

const Layout = () => {
    return (
        <div>
        <header>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/blog">Blog</CustomLink>
            <CustomLink to="/about">About us</CustomLink>
      </header>

      <main>
        <Outlet/>
      </main>

      <footer>
        Workshop React Router 6 ° 2022
      </footer>
        </div>
    );
};

export default Layout;