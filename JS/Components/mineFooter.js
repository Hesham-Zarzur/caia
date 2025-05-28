export default {
  template: `
    <footer class="">
        <div class="container">
          <div class="row g-3">
            <!-- Logo -->
            <div data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1500" class="col-12">
              <img class="logo" src="/assets/img/logo.png" alt="Logo" />
            </div>
          
            <!-- Contact -->
            <div data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="3000" class="col-12 col-md-6 col-lg-4">
              <h4 class="head-text fs-2">Contact</h4>
              <p class="fs-5 wmain-text"><span class="head-text fs-4 fw-bolder">Address : </span>Wallington Road, Street 32, San Francisco</p>
              <p class="fs-5 wmain-text"><span class="head-text fs-4 fw-bolder">Phone: </span>123-456-789</p>
              <p class="fs-5 wmain-text"><span class="head-text fs-4 fw-bolder">Hours: </span>10:00 - 18:00, Mon - Sat</p>
            </div>
            
            <!-- About Us -->
            <div data-aos="fade-up"
                 data-aos-easing="linear"
                data-aos-duration="3000" class="col-12 col-md-6 col-lg-4">
              <h4 class="head-text fs-2">CASA Store</h4>
              <a class ="f-link head-text fs-4 fw-bolder" href="#">About Us</a>
              <a class ="f-link head-text fs-4 fw-bolder" href="#">Contact Us</a>
              <a class ="f-link head-text fs-4 fw-bolder" href="#">Privacy Policy</a>
              <a class ="f-link head-text fs-4 fw-bolder" href="#">Terms & Conditions</a>
              <a class ="f-link head-text fs-4 fw-bolder" href="#">Delivery Information</a>
            </div>
          
            <!-- follow -->
            <div data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="3000" class="col-12 col-lg-4">
              <div class="follow">
                <h4 class="head-text fs-2 text-center">Follow Us</h4>
                <div class="icon">
                  <a href="/" class="f-icon fs-1 bi bi-facebook"></a>
                  <a href="/" class="f-icon fs-1 bi bi-twitter"></a>
                  <a href="/" class="f-icon fs-1 bi bi-instagram"></a>
                  <a href="/" class="f-icon fs-1 bi bi-youtube"></a>
                </div>
              </div>
            </div>
          </div>
          <div class="line mb-2"></div>
          <p class="head-text text-center m-0 fs-5 pb-2 ">&copy; CASA STORE 2025 </p>
        </div>
      </footer>
    `,
};
