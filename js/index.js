// ITERATION 1

function updateSubtotal(product) {
  const price = parseFloat(product.querySelector('.price span').textContent);
  const quantity = parseFloat(product.querySelector('.quantity input').value);
  const total = price * quantity;
  product.querySelector('.subtotal span').innerHTML = total;
  return total;
}

function fetchProducts() {
  return document.querySelectorAll('.product');
}

function getProductName(product) {
  return product.querySelector('.name span').innerHTML;
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
  console.log('Hello');
  const target = event.currentTarget;
  if (target) {
    const nodeToRemove = target.parentNode.parentNode;
    nodeToRemove.parentNode.removeChild(nodeToRemove);
    calculateAll();
  }
}

// ITERATION 5

function createProduct() {

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const products = fetchProducts();
  products.forEach(product => {
    product.querySelector('button').addEventListener('click', removeProduct);
  })

  //... your code goes here
});
