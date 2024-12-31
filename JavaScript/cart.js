let total;
let cart = JSON.parse(localStorage.getItem('cart'));
  display();
    function display(){
      total = 0;
      let displayElement = document.querySelector('.list');
      let newHtml =`
          <div class="list-items">
            <span>Item name</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
            <span>Remove</span>
          </div>  
        `;
      for(let i = 0;i < cart.length;i++){
        total += cart[i].price * cart[i].quantity;
        newHtml += `
          <div class="list-items">
            <span>${i + 1}. ${cart[i].name}</span>
            <span>${cart[i].price}</span>
             <span>${cart[i].quantity}</span>
             <span> ${eval(cart[i].quantity * cart[i].price)} </span>
            <button onclick="cart.splice(${i},1);           
            localStorage.setItem('cart', JSON.stringify(cart));
            display();"><img src="delete.png"></button>
          </div>
        `;
      }
      displayElement.innerHTML = newHtml + `<h1>Grand Total : ${total}</h1>`;
      localStorage.setItem('price',total);
    }
    function goToPay(){
      var link = document.getElementById('next');
      link.click();
    }