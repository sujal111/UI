import React from 'react'

function Navbar() {
  return (
    <div>
      <div className='container'>
        <nav class="nav-section">

        <div class="logo">
        <img src="./images/logo.svg" alt="logo" />
      </div>
      <div class="navbar">
        <a href="#" class="nav-item">HOME</a>
        <a href="#" class="nav-item">ABOUT</a>
        <a href="#" class="nav-item">PAPERS</a>
        <a href="#" class="nav-item">CONTACT</a>
      </div>
      <button class="signin-btn">SIGN IN</button>
    </nav>
        <main>
          
        <div class="left-section">
          <h3>Baby Switching Identification</h3>
        
          <button class="learn-more-btn">LEARN MORE</button>
          </div>
          <div class="right-section">
        <img src="./images/vector.svg" alt="vector-img" class="vector-img" />
        <img src="./images/vector-dot.svg" alt="vector-dot" class="vector-dot" />
        <img src="./images/intro-img.svg" alt="intro-img" class="intro-img" />
      </div>
        </main>


      </div>
    </div>
  )
}

export default Navbar
