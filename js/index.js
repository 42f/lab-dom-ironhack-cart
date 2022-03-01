
// ITERATION 1

function updateSubtotal(product) {
  const price = parseFloat(product.querySelector('.price span').textContent);
  const quantity = parseFloat(product.querySelector('.quantity input').value);
  const total = price * quantity;
  product.querySelector('.subtotal span').innerHTML = total;
  return total;
}

function fetchProducts() {
  return document.querySelectorAll('tbody .product');
}

function setRemoveHandler(product) {
    product.querySelector('button').addEventListener('click', removeProduct);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  const products = fetchProducts();
  let totalSum = 0;
  products.forEach(product => {
    totalSum += updateSubtotal(product);
  })

  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = totalSum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  if (target) {
    /*
    ** Lab recommandation version:
    */
    // const nodeToRemove = target.parentNode.parentNode;
    // nodeToRemove.parentNode.removeChild(nodeToRemove);

    /*
    ** Slightly cleaner version:
    */
    target.parentNode.parentNode.remove();

    calculateAll();
  }
}

// ITERATION 5

function createProduct(event) {
  const userData  = event.currentTarget.parentNode.parentNode;
  const productName = userData.querySelectorAll('input')[0].value;
  const productPrice = userData.querySelectorAll('input')[1].value;

  const template = document.querySelector('#new-product-template');
  const newProduct = template.content.cloneNode(true);

  newProduct.querySelector('td.name span').innerText = productName;
  newProduct.querySelector('td.price span').innerText = productPrice;
  setRemoveHandler(newProduct);
  document.querySelector('#cart tbody').appendChild(newProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const createButton = document.querySelector('#create');
  const products = fetchProducts();

  calculatePricesBtn.addEventListener('click', calculateAll);
  createButton.addEventListener('click', (event) => createProduct(event))
  products.forEach(product => setRemoveHandler(product));
});
