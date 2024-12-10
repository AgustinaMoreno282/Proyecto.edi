// descuentos suscripcion
const prices = {
  basico: 4299,
  estandar: 7199,
  premium: 9699
};


function applyDiscount(plan) {
  let discount = 0;
  let price = 0;
  let finalPrice = 0;

 
  if (plan === 'basico') {
      price = prices.basico;
      discount = 0.10;  
  } else if (plan === 'estandar') {
      price = prices.estandar;
      discount = 0.20;  
  } else if (plan === 'premium') {
      price = prices.premium;
      discount = 0.30;  
  }

  finalPrice = price - (price * discount);

  
  document.getElementById('popup-plan-name').textContent = plan.charAt(0).toUpperCase() + plan.slice(1);
  document.getElementById('popup-price').textContent = `$${finalPrice.toFixed(2)} `;


  document.getElementById('discount-popup').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}


document.getElementById('basic-plan').addEventListener('click', function() {
  applyDiscount('basico');
});

document.getElementById('standard-plan').addEventListener('click', function() {
  applyDiscount('estandar');
});

document.getElementById('premium-plan').addEventListener('click', function() {
  applyDiscount('premium');
});


document.getElementById('overlay').addEventListener('click', function() {
  document.getElementById('discount-popup').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
});