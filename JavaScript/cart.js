let cart = JSON.parse(localStorage.getItem('cart'));
  display();
    function display(){
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
        newHtml += `
          <div class="list-items">
            <span>${i + 1}. ${cart[i].name}</span>
            <span>${cart[i].price}</span>
             <span>${cart[i].quantity}</span>
             <span>${cart[i].quantity} X ${cart[i].price} = ${eval(cart[i].quantity * cart[i].price)} </span>
            <button onclick="cart.splice(${i},1);
            display();"><img src="delete.png"></button>
          </div>  
        `;
      }
      displayElement.innerHTML = newHtml;
      cart.s
    }
    function goToPay(){
      var link = document.getElementById('next');
      link.click();
    }