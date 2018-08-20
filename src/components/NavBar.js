import React from 'react';


export default function NavBar() {
  return (
    <div>
      <nav role="naviagtion">
        <i class="fas fa-bars"></i>
        <ul>
          <li><a href="#">Login</a></li>
          <li><a href="dashboard.html">Home</a></li>
        </ul>
      </nav>
    </div>
  );
}