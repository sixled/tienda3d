<div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="40" height="32" aria-hidden="true"><use xlink:href="#bootstrap"></use></svg>
        <span class="fs-4">Tienda3d</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Inicio</a></li>
        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
      </ul>
    </header>
  </div>
  <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
   <img src="./assets/img/head.jpg" class="img-fluid" width="1296">
  </div>
  <div class="row g-4 justify-content-center">
          <!-- Info Card 1 -->
          <div class="col-12 col-sm-6 col-lg-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <div class="info-card text-center">
              <div class="icon-box">
               <i class='fas fa-shipping-fast'></i>
              </div>
              <h3>Free Shipping</h3>
              <p>Nulla sit morbi vestibulum eros duis amet, consectetur vitae lacus. Ut quis tempor felis sed nunc viverra.</p>
            </div>
          </div><!-- End Info Card 1 -->

          <!-- Info Card 2 -->
          <div class="col-12 col-sm-6 col-lg-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
            <div class="info-card text-center">
              <div class="icon-box">
              <i class='fas fa-piggy-bank'></i>
              </div>
              <h3>Money Back Guarantee</h3>
              <p>Nullam gravida felis ac nunc tincidunt, sed malesuada justo pulvinar. Vestibulum nec diam vitae eros.</p>
            </div>
          </div><!-- End Info Card 2 -->

          <!-- Info Card 3 -->
          <div class="col-12 col-sm-6 col-lg-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
            <div class="info-card text-center">
              <div class="icon-box">
                <i class='fas fa-percentage'></i>
              </div>
              <h3>Discount Offers</h3>
              <p>Nulla ipsum nisi vel adipiscing amet, dignissim consectetur ornare. Vestibulum quis posuere elit auctor.</p>
            </div>
          </div><!-- End Info Card 3 -->

          <!-- Info Card 4 -->
          <div class="col-12 col-sm-6 col-lg-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
            <div class="info-card text-center">
              <div class="icon-box">
                <i class='fas fa-headset'></i>
              </div>
              <h3>24/7 Support</h3>
              <p>Ipsum dolor amet sit consectetur adipiscing, nullam vitae euismod tempor nunc felis vestibulum ornare.</p>
            </div>
          </div><!-- End Info Card 4 -->
        </div>
<h1>Mas Vendidos</h1>
<div class="row">

<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
       {% for producto in site.data.products %}
        <div class="col">
          <div class="card shadow-sm">
            <img src="{{ producto.image }}"  width="100%" height="225">
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button class="btn btn-primary" onclick="addToCart({{ producto.id }}, '{{ producto.name }}', {{ producto.price }})">Agregar al carrito</button>
                </div>
                <small class="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        {% endfor %}
 </div>

</div>