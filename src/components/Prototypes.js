import React from 'react'

export default function Prototypes() {
  return (
    <div>
        <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="/assets/proto1.jpeg" alt="First slide"/>
      <div className="carousel-caption d-none d-md-block">
    <h5>Login Page</h5>
  </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="/assets/proto2.jpeg" alt="Second slide"/>
      <div className="carousel-caption d-none d-md-block">
    <h5>About Page</h5>
  </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="/assets/proto3.jpeg" alt="Third slide"/>
      <div className="carousel-caption d-none d-md-block">
    <h5>Register Page</h5>
  </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="/assets/proto4.jpeg" alt="fourth slide"/>
      <div className="carousel-caption d-none d-md-block">
    <h5>Guest Home page</h5>
  </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="/assets/proto5.jpeg" alt="fifth slide"/>
      <div className="carousel-caption d-none d-md-block">
    <h5>Services page</h5>
  </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="/assets/proto6.jpeg" alt="sixth slide"/>
      <div className="carousel-caption d-none d-md-block">
    <h5>User Home page</h5>
  </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>
</div>
  )
}

