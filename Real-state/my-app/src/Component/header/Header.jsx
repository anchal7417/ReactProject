import React, { useState } from "react";
import "./Header.css";
import { items } from "../Data";
import { Link } from "react-router-dom";
const Header = () => {
const [navList, setNavList] = useState(false);
return (
<>
<header>
<div className="container flex " style={{gap:"20px",justifyContent:"space-evenly"}}>
<div className="logo">
<img src="./image/logo.png" alt="Logo" />
</div>    
<div className="nav">
<ul className={navList ? "small" : "flex"}>
  {items.map((list, index) => (
<li key={index}>
<Link to="/">{list.text}</Link>
</li>
))}
</ul>
</div>
<div className="button flex">
<h4>
<span>2</span> My List
</h4>
<button className="btn1">
<i className="fa fa-sign-out"></i> Sign In
</button>
</div>
<div className="toggle">
<button onClick={() => setNavList(!navList)}>
{navList ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
</button>
</div>
</div>
</header>
</>
  );
};

export default Header;
