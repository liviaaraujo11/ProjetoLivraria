class SimpleBookComponent extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
  
      // Styles
      const style = document.createElement('style');
      style.textContent = `
        .book-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 10px;
        }
        .book-img {
          max-width: 100%;
          height: auto;
        }
        .book-title {
          font-size: 1.2rem;
          font-weight: bold;
          margin: 10px 0;
        }
        .book-author {
          font-size: 1rem;
          color: #555;
        }
        .book-price {
          font-size: 1.2rem;
          color: #333;
        }
        .buy-btn, .cart-btn {
          margin: 5px;
          padding: 10px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .buy-btn {
          background-color: #333;
          color: #fff;
        }
        .cart-btn {
          background-color: #fff;
          border: 1px solid #333;
        }
      `;
      shadow.appendChild(style);
  
      // Container
      const container = document.createElement('div');
      container.classList.add('book-container');
  
      // Image
      const img = document.createElement('img');
      img.classList.add('book-img');
      img.src = this.getAttribute('image') || '';
      img.alt = this.getAttribute('title') || 'Book Image';
      container.appendChild(img);
  
      // Title
      const title = document.createElement('div');
      title.classList.add('book-title');
      title.textContent = this.getAttribute('title') || 'Title';
      container.appendChild(title);
  
      // Author
      const author = document.createElement('div');
      author.classList.add('book-author');
      author.textContent = this.getAttribute('author') || 'Author';
      container.appendChild(author);
  
      // Price
      const price = document.createElement('div');
      price.classList.add('book-price');
      price.textContent = this.getAttribute('price') || 'Price';
      container.appendChild(price);
  
      // Buy Button
      const buyBtn = document.createElement('button');
      buyBtn.classList.add('buy-btn');
      buyBtn.textContent = 'Comprar';
      buyBtn.addEventListener('click', () => {
        window.location.href = this.getAttribute('buy-link') || '#';
      });
      container.appendChild(buyBtn);
  
      // Add to Cart Button
      const cartBtn = document.createElement('button');
      cartBtn.classList.add('cart-btn');
      cartBtn.textContent = 'Adicionar ao Carrinho';
      cartBtn.addEventListener('click', () => {
        // You can implement add to cart functionality here
      });
      container.appendChild(cartBtn);
  
      shadow.appendChild(container);
    }
  }
  
  customElements.define('simple-book-component', SimpleBookComponent);

  