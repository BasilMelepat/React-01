import React from 'react';
import './Footer.css';

function Footer (){
return (
    <footer className="footer bg-dark text-white">

        <div className="container mt-4">
            <div className="row">
                <div className="col-md-5">
                    <h5>About Us</h5>
                    <p>We are a leading online store offering a wide range of books and bags. Our mission is to provide customers with the best shopping experience.</p>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-3">
                    <h5>Contact Us</h5>
                    <ul className="list">
                        <li>Email: <a href="mailto:info@store.com">info@store.com</a></li>
                        <li>Phone: <a href="callto:+1234567890">+123 456 7890</a></li>
                    </ul>
                </div>
            </div>
            <div className="text-center">
                <p>&copy; 2024 MyApp. All Rights Reserved.</p>
            </div>
        </div>

    </footer>
  );
}

export default Footer;