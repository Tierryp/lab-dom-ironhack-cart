// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span').innerText;
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = price * quantity;
  let subtotalselect = product.querySelector('.subtotal span');
  subtotalselect.innerHTML = subtotal;

  return subtotal;
}
let button2 = this.document.querySelectorAll('.btn.btn-remove');
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let subtotal1 = 0;

  let products = document.getElementsByClassName('product');
  for (let i = 0; i < products.length; i++) {
    subtotal1 = subtotal1 + updateSubtotal(products[i]);
  }

  // ITERATION 3
  let productSolution = document.querySelector('#total-value span');
  return (productSolution.innerHTML = subtotal1);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentElement.parentElement.remove();
  calculateAll();
  //
}

// ITERATION 5

function createProduct() {
  const newRow = document.querySelector('.product').cloneNode(true);
  console.log('hello');
  let newName = document.querySelector(
    '.create-product input[type="text"]'
    ).value;
  let newPrice = document.querySelector(
    '.create-product input[type="number"]'
  ).value;
  console.log(newPrice, newName);
  newRow.querySelector('.price span').innerHTML = newPrice;
  newRow.querySelector('.name span').innerHTML = newName;
  document.querySelector('tbody').appendChild(newRow);
  let removeButton = newRow.querySelector('.btn.btn-remove')
  removeButton.addEventListener('click', removeProduct);

  calculateAll();
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let button = this.document.querySelectorAll('.btn.btn-remove');
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', removeProduct);
  }
  let createButton = document.querySelectorAll('.btn.btn-product');
  for (let i = 0; i < createButton.length; i++) {
    createButton[i].addEventListener('click', createProduct);
  }
  
});
