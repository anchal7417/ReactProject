import React from 'react';
import './Footer.css';
import { footer } from '../Data'
export default function Footer() {
  return (
<footer>
<section className="footerContact" >
  <div className="send flex">
            <div className="text" >
              <h1 style={{color:"white"}}>Do You Have Questions?</h1>
              <p style={{color:"white"}}>We'll help you grow your career and achieve your goals.</p>
            </div>
            <div><button className="btn5">Contact Us Today</button></div>
          </div>
      </section>
      <div className="container subscription">
        <div className="box">
          <div className="logo">
            <img src="../Image/logo.png" alt="Company Logo" />
            <h2>Do You Need Help With Anything?</h2>
            <p style={{color:"white"}}>
              Receive updates, hot deals, tutorials, and discounts sent straight to your inbox every month.
            </p>
            <div className="input flex">
              <input type="email" placeholder="Email Address" aria-label="Email Address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        {footer.map((val) => (
          <div className='box'>
            <h3>{val.title}</h3>
            <ul>
              {val.text.map((items) => (
                <li>{items.list}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
