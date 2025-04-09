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
              <i class="bi bi-truck" style="font-size: 2.5rem;"></i>
              </div>
              <h3>Envios garantisados</h3>
              <p>Enviamos a todo el pais   por mercado libre  </p>
            </div>
          </div><!-- End Info Card 1 -->

          <!-- Info Card 2 -->
          <div class="col-12 col-sm-6 col-lg-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
            <div class="info-card text-center">
              <div class="icon-box">
             <i class="bi bi-piggy-bank" style="font-size: 2.5rem;"></i>
              </div>
              <h3>Dinero asegurado</h3>
              <p>En caso de que llegue fallado puedes devolverlo </p>
            </div>
          </div><!-- End Info Card 2 -->

          <!-- Info Card 3 -->
          <div class="col-12 col-sm-6 col-lg-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
            <div class="info-card text-center">
              <div class="icon-box" style="font-size: 2.5rem;">
                <i class="bi bi-percent"></i>
              </div>
              <h3>Cupon de descuento</h3>
              <p>Al comprar en cantidad consigue cupon que te permitira tener un descuento en tu proxima compra</p>
            </div>
          </div><!-- End Info Card 3 -->

          <!-- Info Card 4 -->
          <div class="col-12 col-sm-6 col-lg-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
            <div class="info-card text-center">
             <div class="icon-box" style="font-size: 2.5rem;">
               <i class="bi bi-headset"></i>
              </div>
              <h3>24/7 Ayuda</h3>
              <p>Tienes alguna duda o incoveniente ? te ayudamos en cualquier momento .</p>
            </div>
          </div><!-- End Info Card 4 -->
        </div>
<h1>Mas Vendidos</h1>
<div class="row">

<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
       {% for producto in site.data.products %}
        <div class="col">
          <div class="card shadow-sm">
            <img src="{{ producto.image }}"  width="100%" height="400">
            <div class="card-body">
              <p class="card-text">{{description}}</p>
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
