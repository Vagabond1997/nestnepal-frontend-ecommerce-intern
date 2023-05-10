import React from "react";

const Footer = () => {
    return <>
     <footer>
    <div className="container">
        <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
                <div className="row datainputs">
                    <div className="col-6 col-lg-3">
                      <div className="row">
                        <div className="col-3 mx-auto ">
                            <a href="#">
                                <i className="fab fa-facebook-f fontawesome-style"></i>
                            </a>
                        </div>
                        <div className="col-3 mx-auto ">
                            <a href="#">
                                <i className="fab fa-instagram fontawesome-style"></i>
                            </a>
                        </div>
                        <div className="col-3 mx-auto ">
                            <a href="#">
                                <i className="fab fa-youtube fontawesome-style"></i>
                            </a>
                        </div>
                      </div>
                    </div>
                   

                </div>
                {/* <hr/> */}
               <div className="mt-5">
                <p className="main-hero-para text-center w-100">Copyright @2023 Ecommerce. All rights reserved.</p>
               </div>
            </div>
        </div>
    </div>
   </footer>
    </>;
};

export default Footer;