<div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="40" height="32" aria-hidden="true"><use xlink:href="#bootstrap"></use></svg>
        <span class="fs-4">Simple header</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Inicio</a></li>
        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
      </ul>
    </header>
  </div>
  <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
   <img src="assets/img/head.jpg">
  </div>
<h1>Productos</h1>
<div class="row">
{% for producto in site.data.products %}
  <div class="col-md-4 mb-4">
    <div class="card">
      <img src="{{ producto.image }}" class="card-img-top" alt="{{ producto.name }}">
      <div class="card-body">
        <h5 class="card-title">{{ producto.name }}</h5>
        <p class="card-text">${{ producto.price }}</p>
        <button class="btn btn-primary" onclick="addToCart({{ producto.id }}, '{{ producto.name }}', {{ producto.price }})">Agregar al carrito</button>
      </div>
    </div>
  </div>
{% endfor %}
</div>
