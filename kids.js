import React from 'react'
import kt1 from './kt1.webp'
import kt2 from './kt2.webp'
import kt3 from './kt3.webp'
import kt4 from './kt4.webp'

import add1 from './add1.jpg'
import add2 from './add2.jpg'
import add3 from './add3.jpg'
import { Link } from 'react-router-dom'
import list from './Data'

const kids = ({item,size,handleClick}) => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-info fixed-top">
  <div class="container-fluid">
  <i class="fa-brands fa-btc" id='logo'></i><span>Cart</span>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to='/'className='nav-link'>Home</Link>
        </li>
        <li class="nav-item">
        <Link to='/shop'className='nav-link'>Shop</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Cloths
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to='/men'className='dropdown-item'>men</Link></li>
            <li><Link to='/women'className='dropdown-item'>women</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li class="nav-item">
            <a class="active dropdown-item" aria-current="page">Kids</a>
            </li>
          </ul>
        </li>
        
       
      </ul>
     
      <form class="d-flex">
   
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
        <i class="fa-solid fa-cart-shopping" id='cart'> <span>{size}</span></i>       
         <Link to='/Login'><button type='button'className='btn btn-danger text-white '>Login</button></Link> 
      </form>
      
      
      
        
    </div>
  </div>
</nav>
<br></br> <br></br>
        <header>
      <br></br>
      <div className='container-fluid' id='scroller'>
        <div id="demo" class="carousel slide" data-bs-ride="carousel">


<div class="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src={add1} alt="Los Angeles" class="d-block w-100"/>
  </div>
  <div class="carousel-item">
    <img src={add2}  alt="Chicago" class="d-block w-100"/>
  </div>
  <div class="carousel-item">
    <img src={add3}  alt="New York" class="d-block w-100"/>
  </div>
</div>

<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span class="carousel-control-next-icon"></span>
</button>
</div>
    </div>
    </header>
    <br></br>
    <div id='top' className='container'>
      <h4>Men's</h4>
      <button data-bs-toggle="collapse" data-bs-target="#demo1" className='btn btn-primary'>MORE</button>
    </div>
    <div className='container text-center' id='col1'>
      <div className='row'>
        <div className='col-md-3'>
          <img src={kt1} />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src={kt2} />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src={kt3} />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src={kt4} />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>

      </div>
      
    </div>
    <br></br>
    <div className='collapse container text-center' id='demo1'>
      <div className='row'>
        <div className='col-md-3'>
          <img src={kt1} />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src={kt2} />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src={kt3} />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src={kt4} />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>

      </div>
      
    </div>

    <br></br>
    <div id='top' className='container'>
      <h4>Kids</h4>
      <button data-bs-toggle="collapse" data-bs-target="#demo2" className='btn btn-primary'>MORE</button>
    </div>
    <div className='container text-center' id='col1'>
      <div className='row'>
        <div className='col-md-3'>
          <img src={kt1} />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
        <img src={kt2} />
        <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src={kt3} />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src={kt4} />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>

      </div>
      
    </div>
    <br></br>
    <div className='collapse container text-center' id='demo2'>
      <div className='row'>
        <div className='col-md-3'>
          <img src={kt1} />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src={kt2} />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src={kt3} />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>
        <div className='col-md-3'>
          <img src={kt4} />
          <button className='btn btn-success'onClick={()=>handleClick(item)}>$ 360</button>
        </div>

      </div>
      
    </div>
    <br></br>

<footer className='container-fluid bg-dark p-5'>
<div className='container'>
<div className='row'>
  <div className='col-md-4' id='subscribe'>
    <h4 className='text-white'>Sbscribe to get latest notifications</h4>
    <form action='' method='get'>
      <label className='text-white' >Email:</label>
      <input type={Text}/> <br></br>
      <input type={'submit'} id='submit' />

    </form>
    
  </div>
  
  <div className='col-md-4 text-center' id='social-media'>
    <h4>Connect With Us</h4>
  <div id='twitter' className=''>
  <button type='button' className='btn btn-primary'><i class="fa-brands fa-twitter"></i></button>
  <a href='#'> twitter</a>
  </div>
  <br></br>
  <div id='instagram'>
  <button type='button' className='btn btn-danger'><i class="fa-brands fa-instagram"></i></button>
  <a href='#'>Instagram</a>
  </div>
  <br></br>
  <div id='facebook'>
  <button className='btn btn-primary'><i class="fa-brands fa-facebook"></i></button>
  <a href='#'>Facebook</a>
  </div>
  </div>
  <div className='col-md-4 ' id='address'>
  <h3>Registered Office Address:</h3>
  <p>Flipkart Internet Private Limited,

Buildings Alyssa, Begonia &

Clove Embassy Tech Village,

Outer Ring Road, Devarabeesanahalli Village,

Bengaluru, 560103,

Karnataka, India

CIN : U51109KA2012PTC066107

Telephone: 044-45614700</p>
</div>
</div>

</div>



</footer>
<br></br>
    </div>
  )
}

export default kids
