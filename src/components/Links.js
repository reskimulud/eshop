import React from 'react';
import { Link } from 'react-router-dom';

function Links({ children, to, navbarBrand, className, btnPrimary, btnSuccess, btnDanger, btnOutlinePrimary, btnOutlineSuccess, btnOutlineDanger }) {
  let variant;

  if (btnPrimary) {
    variant = 'btn btn-primary';
  } else if (btnSuccess) {
    variant = 'btn btn-success';
  } else if (btnDanger) {
    variant = 'btn btn-danger';
  } else if (btnOutlinePrimary) {
    variant = 'btn btn-outline-primary';
  } else if (btnOutlineSuccess) {
    variant = 'btn btn-outline-success';
  } else if (btnOutlineDanger) {
    variant = 'btn btn-outline-danger';
  } else if (navbarBrand) {
    variant = 'navbar-brand';
  } else {
    variant = 'default';
  }

  return (
    <Link
      className={`${variant} ${className ? className : ''}`}
      to={to}
      style={(variant === 'default') ? { textDecoration: 'none', color: 'inherit' } : {}}
    >
      {children}
    </Link>
  );
}

export default Links;
