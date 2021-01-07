import React from 'react'

const MainCarousel = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://picsum.photos/seed/150/900" className="d-block w-100 h" alt="gambar" height="400px"/>
        </div>
        <div className="carousel-item">
          <img src="https://picsum.photos/seed/151/900" className="d-block w-100" alt="gambar" height="400px" />
        </div>
        <div className="carousel-item">
          <img src="https://picsum.photos/seed/155/900" className="d-block w-100" alt="gambar" height="400px" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </a>
    </div>

    

  )
}

export default MainCarousel;