

document.addEventListener("DOMContentLoaded", function() {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(products => {
        const productList = document.getElementById('product-list');
  
        products.forEach(product => {
          const productCard = `
            <div class="col-md-3 align-items-center justify-content-center">
              <div class="card product-card">
                <a href="${product.buyLink}">
                  <img src="${product.image}" class="card-img-top product-img product-img-margin" alt="${product.title}">
                </a>
                <div class="card-body">
                  <h5 class="card-title">${product.title}</h5>
                  <p class="card-text">${product.author}</p>
                  <p class="card-text">${product.price}</p>
                  <a href="${product.buyLink}" class="btn btn-dark btn-card">Comprar</a>
                  <a href="${product.buyLink}?id=${product.id}" class="btn btn-outline-secondary mt-2 btn-card">Ver Mais</a>
                </div>
              </div>
            </div>
          `;
          productList.innerHTML += productCard;
        });
      })
      .catch(error => console.error('Erro ao carregar os produtos:', error));
  });