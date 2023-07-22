import React from 'react'

import { Link} from 'react-router-dom'
import './home.css'
const Home = () => {
  return (
    <div>
      
      <div className='d-flex m-5'>
        <section className='w-50 pt-5 home-section'>
          <h1 id='homeh1'>A house of quality food</h1>
          <p className='pt-4'>TSC-food corner is your ultimate online food delivery destination, offering a diverse menu of delicious dishes. Savor the convenience of ordering from the comfort of your home and experience a delightful culinary journey delivered right to your doorstep.Savor the convenience of ordering from the comfort of your home and experience a delightful culinary journey delivered right to your doorstep.</p>
          <button className='btn btn-lg button-style'><Link id="orderbutton">Order Now</Link></button>
        </section>
        <section className='w-50 home-section'>
          <div className='carousel-container'>
            <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
              <div class="carousel-inner">
                <div class="carousel-item active" >
                  <img src="/Images/ForHome/1.jpg" class="d-block w-100 carousel-image" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="/Images/ForHome/4.jpg" class="d-block w-100 carousel-image" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="/Images/ForHome/2.jpg" class="d-block w-100 carousel-image" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="/Images/ForHome/3.jpg" class="d-block w-100 carousel-image" alt="..." />
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>

        </section>
      </div>
    </div>
  )
}

export default Home
