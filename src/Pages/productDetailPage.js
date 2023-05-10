import React, { useContext, useState, useEffect } from "react";
import Navbar from "../component/navbar";
import Footer from "../component/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  TbTruck,
  TbTruckDelivery,
  TbReplace,
  TbColorSwatch,
} from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Routes, Route, useNavigate } from "react-router-dom";

function ProductDetail() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    color: "",
    size: "",
    phone: "",
    remarks: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.address) {
      errors.address = "Address is required !";
    }
    if (!formData.color) {
      errors.color = "Color is required !";
    }
    if (!formData.size) {
      errors.size = "Size is required !";
    }
    if (!formData.phone) {
      errors.phone = "Phone is required !";
    }
    if (!formData.remarks) {
      errors.remarks = "Remarks is required !";
    }
    return errors;
  };

  const { id } = useParams();

  const [number, setNumber] = useState(1);

  const handleAdd = () => {
    setNumber(number + 1);
  };

  const handleSubtract = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  const colors = ["red", "black", "blue"];
  const size = ["M", "L", "XL", "XXL"];

  const baseAPI = `https://fakestoreapi.com/products/${id}`;
  const [productOrder, setproductOrder] = useState({
    name: "",
    email: "",
    address: "",
    color: "",
    size: "",
    phone: "",
    quantity: "",
    remarks: "",
  });

  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(e.target.name);
    setproductOrder({ ...productOrder, [name]: value });
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateForm();
  };

  const API = `https://fakestoreapi.com/products/${id}`;
  console.log("API", API);

  const [loading, setLoading] = useState(true);
  const [productData, setproductData] = useState([]);
  const [productColor, setproductColor] = useState([]);
  const [productSize, setproductSize] = useState([]);

  // const merchImages = [];

  // on page load called
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(API);
        console.log("data", response);
        setproductData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5">
              <img src={productData.image} alt="aboutusImg" />
            </div>
            <div className="col-12 col-lg-7 our-services-list ">
              <div className="row our-services-info ">
                <div className="product-data-price">
                  <h2>{productData.title}</h2>
                  <p> Category: {productData.category}</p>
                  <p>Amount: {productData.price}</p>
                </div>
                <p>Description: {productData.description}</p>
                <div className="row product-data-warranty">
                  <div className="pro-data col-12 col-lg-3">
                    <TbTruckDelivery className="warranty-icon" />
                    <p>free delivery</p>
                  </div>
                  <div className="pro-data col-12 col-lg-3">
                    <TbReplace className="warranty-icon" />
                    <p>30 Days Replacement</p>
                  </div>
                  <div className=" pro-data col-12 col-lg-3">
                    <TbTruckDelivery className="warranty-icon" />
                    <p>Parcel Delivered</p>
                  </div>
                  <div className=" pro-data col-12 col-lg-3">
                    <MdSecurity className="warranty-icon" />
                    <p>Year Warranty</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1">
                    <p>Colors:</p>
                  </div>
                  <div className="col-10 inputs">
                    <select
                      name="color"
                      id="color"
                      value={productOrder.color}
                      onChange={handleInputs}
                    >
                      {colors.length > 0 &&
                        colors.map((item) => (
                          <option value={item}>{item}</option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1">
                    <p>Size:</p>
                  </div>
                  <div className="col-10 inputs">
                    <select
                      name="size"
                      id="size"
                      value={productOrder.size}
                      onChange={handleInputs}
                    >
                      {size.length > 0 &&
                        size.map((item) => (
                          <option value={item}>{item}</option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="btn-st">
                  <button onClick={handleSubtract}>
                    <FaMinus />
                  </button>
                  <h1>{number}</h1>
                  <button onClick={handleAdd}>
                    <FaPlus />
                  </button>
                </div>
              </div>
              <button
                type="button"
                class=".btn-style btn-style-border"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
              >
                BOOK NOW
              </button>

              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Product Order Page
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <form onSubmit={handleSubmit}>
                        <div class="mb-1">
                          <label for="recipient-name" class="col-form-label">
                            Name:
                            <span className="error-message">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={productOrder.name}
                            onChange={handleInputs}
                            class="form-control"
                            id="recipient-name"
                          />
                          {errors.name && (
                            <span className="error-message">{errors.name}</span>
                          )}
                        </div>
                        <div class="mb-1">
                          <label for="recipient-name" class="col-form-label">
                            Email:
                          </label>
                          <input
                            type="text"
                            name="email"
                            value={productOrder.email}
                            onChange={handleInputs}
                            class="form-control"
                            id="recipient-email"
                          />
                          {errors.email && (
                            <span className="error-message">
                              {errors.email}
                            </span>
                          )}
                        </div>
                        <div class="mb-1">
                          <label for="recipient-name" class="col-form-label">
                            Address:
                          </label>
                          <input
                            type="text"
                            name="address"
                            value={productOrder.address}
                            onChange={handleInputs}
                            class="form-control"
                            id="recipient-address"
                          />
                          {errors.address && (
                            <span className="error-message">
                              {errors.address}
                            </span>
                          )}
                        </div>
                        <div class="mb-1">
                          <label for="recipient-name" class="col-form-label">
                            Color:
                          </label>
                          <input
                            type="text"
                            name="color"
                            value={productOrder.color}
                            onChange={handleInputs}
                            class="form-control"
                            id="recipient-color"
                          />
                          {errors.color && (
                            <span className="error-message">
                              {errors.color}
                            </span>
                          )}
                        </div>
                        <div class="mb-1">
                          <label for="recipient-name" class="col-form-label">
                            Size:
                          </label>
                          <input
                            type="text"
                            name="size"
                            value={productOrder.size}
                            onChange={handleInputs}
                            class="form-control"
                            id="recipient-size"
                          />
                          {errors.size && (
                            <span className="error-message">{errors.size}</span>
                          )}
                        </div>
                        <div class="mb-1">
                          <label for="message-text" class="col-form-label">
                            Phone:
                          </label>
                          <textarea
                            class="form-control"
                            name="phone"
                            value={productOrder.phone}
                            onChange={handleInputs}
                            id="message-phone"
                          ></textarea>
                          {errors.phone && (
                            <span className="error-message">
                              {errors.phone}
                            </span>
                          )}
                        </div>
                        <div class="mb-1">
                          <label for="recipient-name" class="col-form-label">
                            Remarks:
                          </label>
                          <input
                            type="text"
                            name="remarks"
                            value={productOrder.remarks}
                            onChange={handleInputs}
                            class="form-control"
                            id="recipient-address"
                          />
                          {errors.remarks && (
                            <span className="error-message">
                              {errors.remarks}
                            </span>
                          )}
                        </div>

                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="submit" class="btn btn-primary">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default ProductDetail;
