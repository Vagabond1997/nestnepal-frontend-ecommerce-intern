import React, {useState,useEffect} from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const navigatetoCategoryDetailsPage = (id) => {
    navigate(`/category/${id}`,{ replace: true });
  };
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [productCategory, setProductCategory] = useState([]);

const API = "https://fakestoreapi.com/products/categories";
 useEffect(() => {
  console.log('API',API);
  const fetchData = async () =>{
    setLoading(true);
    try {
      const {data: response} = await axios.get(API);
      console.log('response',response);
      setProductCategory(response);
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
  }

  fetchData();
}, []);

  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand" href="#">
            <img src="././images/ecommerce.png" alt="logo" className="img-fluid"/>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            //   onClick={() => setShow(!show)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                {
                productCategory.map((item) => {
                 return (
                 <> 
                   <li className="nav-item">
                <a className="nav-link active category-menu" href="#" onClick={ () =>navigatetoCategoryDetailsPage(item)}>
                  {item}
                  </a>
                </li>
                 </>
                 )
                })}
              
                <li className="nav-item" game="rese">
                  <a className="nav-link" game="rese" href="/aboutus">
                 
                  </a>
                </li>
                <li className="nav-item" game="rese">
                  <a className="nav-link" href="/contact">
                
                  </a>
                </li>
                <li className="nav-item" game="rese">
                  <a className="nav-link" href="/contact">
                
                  </a>
                </li>
              </ul>
              <form className="d-flex">
              <a href="#" target="_blank">
                                <i className="fab fa-facebook-f fontawesome-style"></i>
                            </a>
                            <a href="#"  target="_blank">
                                <i className="fab fa-youtube fontawesome-style"></i>
                            </a>
                            <a href="#"  target="_blank">
                                <i className="fab fa-instagram fontawesome-style"></i>
                            </a>

              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
