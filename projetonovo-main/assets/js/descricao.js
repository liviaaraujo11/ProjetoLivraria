// Função para capturar o ID do produto da URL
function getProductIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
  }

  document.addEventListener("DOMContentLoaded", function() {
    const productId = getProductIdFromURL();
    
    if (productId) {
      fetch(`http://localhost:3000/products/${productId}`)
        .then(response => response.json())
        .then(product => {
          const productDetails = document.getElementById('product-details');

          const productInfo = `
            <div class="row">
              <div class="col-md-6">
                <img src="${product.image}" class="img-fluid" alt="${product.title}">
              </div>
              <div class="col-md-6">
                <h1>${product.title}</h1>
                <p>Autor: ${product.author}</p>
                <p>Preço: ${product.price}</p>
                <a href="${product.buyLink}" class="btn btn-dark">Comprar</a>
              </div>
            </div>
          `;
          productDetails.innerHTML = productInfo;
        })
        .catch(error => console.error('Erro ao carregar o produto:', error));
    } else {
      document.getElementById('product-details').innerHTML = '<p>Produto não encontrado.</p>';
    }
  });