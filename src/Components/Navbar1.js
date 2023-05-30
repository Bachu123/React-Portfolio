import React from 'react'
import './navbar.css';
export default function navbar() {
  return (
<nav classname='Main'>
  <head>
  <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet"/>
 <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"/>
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    <link href='navbar.css' rel='stylesheet'></link>
  </head>

  <body>
    <input type="checkbox" id="active"/>
    <label for="active" class="menu-btn"><span></span></label>
    <label for="active" class="close"></label>
    <div class="wrapper">
      <ul>
<li><a href="#">Home</a></li>
<li><a href="#">About</a></li>
<li><a href="#">Skills</a></li>
<li><a href="#">Projects</a></li>
<li><a href="#">Contact</a></li>
</ul>
</div>

</body>
  </nav>
   )
}
