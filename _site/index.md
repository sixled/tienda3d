
---
layout: default
title: Inicio
---

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
