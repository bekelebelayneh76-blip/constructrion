import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import boutImage from '../.././assets/images/about-us.jpg';
import Header from '../common/header';
import Footer from '../common/footer';
import ServiceImag from '../../assets/images/construction2.jpg'
import ConstructionImag from '../../assets/images/construction1.jpg'
import ConstructionImage1 from '../../assets/images/construction3.jpg'
import ConstructionImage2 from '../../assets/images/construction1212.jpg'






const home = () => {
  return (
    <>
  

     <Header />
       
   <main>
    {/* Welcome Amazing Constructions */}
<section className='section-1'>
    <div className='hero d-flex align-items-center'>
       <div className='container-fluid'>
        <div className='text-center'>
          <span>Welcome Amazing Constructions</span>
          <h1>Crafting dreams with <br/>
precision and excellence.</h1>
<p>We excel at transforming visions into reality through outstanding craftsmanship and precise <br/>
attention to detail. With years of experience and a dedication to quality.</p>
     <div className=' mt-4'>
      <button className='btn btn-primary'>contact now</button>
      <button className='btn btn-secondary ms-2'>view projects</button>
      </div>
        </div>
        </div>  
      </div>
</section>


{/* ....................................................................................................... */}
{/* about section */}

<section className='section-2 py-5'>
<div  className='container py-5'>
  <div className='row'>

    <div className='col-md-6'>
<img src={boutImage} alt='About Us' className='w-100' />
      </div>
      <div className='col-md-6'>

        <span className='about'>about us</span>

        <h2>Crafting structures that last a lifetime</h2>
        <p>Building enduring structures requires a comprehensive approach that combines advanced materials, resilient design, routine maintenance, and sustainable practices. By drawing on historical insights and utilizing modern technology.

</p>
<p>
  Designing structures that stand the test of time involves a seamless blend of cutting-edge materials, durable design, ongoing upkeep, and eco-friendly practices. By combining lessons from the past with the power of modern technology.
</p>

      </div>

  </div>
</div>


</section>

{/* ....................................................................................................... */}
{/* Our Services */}


<section className="section-3 bg-light py-5">
  <div className="container-fluid py-5">

    <div className="section-header text-center mb-5">
      <span>Our Services</span>
      <h2>Our Construction Services</h2>
      <p>
        We offer a diverse array of construction services, spanning residential,
        commercial, and industrial projects.
      </p>
    </div>

    <div className="row">

      <div className="col-md-6 col-lg-3">
        <div className="item">

          <div className="service-image">
            <img src={ServiceImag} alt="Construction Service" className="w-100" />
          </div>

          <div className="service-body">
            <div className="service-title">
              <h3>Specialty Construction</h3>
            </div>

            <div className="service-content">
              <p>
                Specialty construction encompasses a wide range of services
                that require specific expertise and skills. These services
                often involve unique materials, techniques, or design elements
                beyond traditional construction methods.
              </p>
            </div>

            <a href="#" className="btn btn-primary">
              Read More
            </a>
          </div>

        </div>
      </div>
{/* szfgtrzsdhtjjjjjjjjjjjjjjjjjjjjjjjjj */}
<div className="col-md-6 col-lg-3">
        <div className="item">

          <div className="service-image">
            <img src={ConstructionImag} alt="Construction Service" className="w-100" />
          </div>

          <div className="service-body">
            <div className="service-title">
              <h3>Specialty Construction</h3>
            </div>

            <div className="service-content">
              <p>
                Specialty construction encompasses a wide range of services
                that require specific expertise and skills. These services
                often involve unique materials, techniques, or design elements
                beyond traditional construction methods.
              </p>
            </div>

            <a href="#" className="btn btn-primary">
              Read More
            </a>
          </div>

        </div>
      </div>

{/* tdffffffffffffffffffffffffffffffffffffff */}
<div className="col-md-6 col-lg-3">
        <div className="item">

          <div className="service-image">
            <img src={ServiceImag} alt="Construction Service" className="w-100" />
          </div>

          <div className="service-body">
            <div className="service-title">
              <h3>Specialty Construction</h3>
            </div>

            <div className="service-content">
              <p>
                Specialty construction encompasses a wide range of services
                that require specific expertise and skills. These services
                often involve unique materials, techniques, or design elements
                beyond traditional construction methods.
              </p>
            </div>

            <a href="#" className="btn btn-primary">
              Read More
            </a>
          </div>

        </div>
      </div>

{/* syyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy */}
<div className="col-md-6 col-lg-3">
        <div className="item">

          <div className="service-image">
            <img src={ServiceImag} alt="Construction Service" className="w-100" />
          </div>

          <div className="service-body">
            <div className="service-title">
              <h3>Specialty Construction</h3>
            </div>

            <div className="service-content">
              <p>
                Specialty construction encompasses a wide range of services
                that require specific expertise and skills. These services
                often involve unique materials, techniques, or design elements
                beyond traditional construction methods.
              </p>
            </div>

            <a href="#" className="btn btn-primary">
              Read More
            </a>
          </div>

        </div>
      </div>

    </div>

  </div>
</section>





{/* .................................................................................. */}

{/* Our our projects */}


<section className="section-3 bg-light py-5">
     <div className="container-fluid py-5">

        <div className="section-header text-center mb-5">
           <span>Our our projects</span>
           <h2>Discover our diverse range of projects</h2>
           <p>
                 We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.
            </p>
         </div>

    <div className="row">

      <div className="col-md-6 col-lg-3">
        <div className="item">

          <div className="service-image">
            <img src={ConstructionImage1 } alt="Construction Service" className="w-100" />
          </div>

          <div className="service-body">
            <div className="service-title">
              <h3>
               Kolkata Projects</h3>
            </div>

            <div className="service-content">
              <p>
                Specialty construction encompasses a wide range of services
                that require specific expertise and skills. These services
                often involve unique materials, techniques, or design elements
                beyond traditional construction methods.
              </p>
            </div>

            <a href="#" className="btn btn-primary">
              Read More
            </a>
          </div>

        </div>
      </div>
{/* szfgtrzsdhtjjjjjjjjjjjjjjjjjjjjjjjjj */}
<div className="col-md-6 col-lg-3">
        <div className="item">

          <div className="service-image">
            <img src={ConstructionImage2} alt="Construction Service" className="w-100" />
          </div>

          <div className="service-body">
            <div className="service-title">
              <h3>Specialty Construction</h3>
            </div>

            <div className="service-content">
              <p>
                Specialty construction encompasses a wide range of services
                that require specific expertise and skills. These services
                often involve unique materials, techniques, or design elements
                beyond traditional construction methods.
              </p>
            </div>

            <a href="#" className="btn btn-primary">
              Read More
            </a>
          </div>

        </div>
      </div>

{/* tdffffffffffffffffffffffffffffffffffffff */}
<div className="col-md-6 col-lg-3">
        <div className="item">

          <div className="service-image">
            <img src={ServiceImag} alt="Construction Service" className="w-100" />
          </div>

          <div className="service-body">
            <div className="service-title">
              <h3>Specialty Construction</h3>
            </div>

            <div className="service-content">
              <p>
                Specialty construction encompasses a wide range of services
                that require specific expertise and skills. These services
                often involve unique materials, techniques, or design elements
                beyond traditional construction methods.
              </p>
            </div>

            <a href="#" className="btn btn-primary">
              Read More
            </a>
          </div>

        </div>
      </div>

{/* syyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy */}

<div className="col-md-6 col-lg-3">
        <div className="item">

          <div className="service-image">
            <img src={ConstructionImage2} alt="Construction Service" className="w-100" />
          </div>

          <div className="service-body">
            <div className="service-title">
              <h3>Specialty Construction</h3>
            </div>

            <div className="service-content">
              <p>
                Specialty construction encompasses a wide range of services
                that require specific expertise and skills. These services
                often involve unique materials, techniques, or design elements
                beyond traditional construction methods.
              </p>
            </div>

            <a href="#" className="btn btn-primary">
              Read More
            </a>
          </div>

        </div>
      </div>

    </div>

  </div>
</section>

   </main>
    <Footer/>
    </>
 
  )
}

export default home
