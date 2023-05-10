import React, { useContext, useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../component/navbar";
import Footer from "../component/Footer";

const Category = () => {
  const navigate = useNavigate();
  const navigateToProductDetailsPage = (id) => {
    console.log(id);
    navigate(`/productdetails/${id}`);
  };

  const { category } = useParams(); 
  const API = `https://fakestoreapi.com/products/category/${category}`;
  const [loading, setLoading] = useState(true);
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    console.log("API", API);
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(API);
        console.log("response", response);
        setCategoryData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <section className="service-main-container">
        <div className="container service-container">
          <h1 className="main-heading text-center fw-bold">Product List</h1>
          <div className="row">
            {categoryData.map((item) => {
              return (
                <>
                  <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv">
                    <img
                      src={item.image}
                      alt="pic"
                      className="img-fluid"
                      onClick={() => navigateToProductDetailsPage(item.id)}
                    />
                    <h2>{item.category}</h2>
                    <h2>{item.title}</h2>
                    <h2>Price: {item.price}</h2>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Category;
