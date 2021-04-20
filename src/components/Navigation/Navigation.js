import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <NavLink
        exact
        to={routes.home}
        className={s.link}
        activeClassName={s.link_active}
      >
        Home
      </NavLink>
      <NavLink
        to={routes.movies}
        className={s.link}
        activeClassName={s.link_active}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
