import React from "react";

const Header = () => {
  return (
    <>
      <header>
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>

  <div class="carousel-inner">
    <div class="item active">
      <img src="./images/image61.jpg" alt="Image 1"/>
      <div class="carousel-caption">
        <h3>Image 1</h3>
        <p>Description for Image 1</p>
      </div>
    </div>

    <div class="item">
      <img src="./images/image11.jpg" alt="Image 2"/>
      <div class="carousel-caption">
        <h3>Image 2</h3>
        <p>Description for Image 2</p>
      </div>
    </div>

    <div class="item">
      <img src="./images/image33.jpg" alt="Image 3"/>
      <div class="carousel-caption">
        <h3>Image 3</h3>
        <p>Description for Image 3</p>
      </div>
    </div>
  </div>

  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

        
      </header>
    </>
  );
};

export default Header;
