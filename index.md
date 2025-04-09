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
<h1>Productos</h1>
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
