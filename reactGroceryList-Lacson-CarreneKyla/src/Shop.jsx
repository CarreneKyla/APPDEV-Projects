import React, { useState } from 'react';
import './Shop.css';

export default function Shop() {
  const items = [
    { id: 1, name: 'Grapes', price: 250 },
    { id: 2, name: 'Oranges', price: 120 },
    { id: 3, name: 'Kiwis', price: 150 },
    { id: 4, name: 'Bananas', price: 50 },
    { id: 5, name: 'Cucumbers', price: 30 },
  ];

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paidAmount, setPaidAmount] = useState(0);
  const [change, setChange] = useState(null);
  const [isCheckedOut, setIsCheckedOut] = useState(false);

  const addItemToCart = (item) => {
    const itemIndex = cart.findIndex(cartItem => cartItem.id === item.id);

    if (itemIndex === -1) {
      setCart([...cart, { ...item, count: 1 }]);
    } else {
      const newCart = [...cart];
      newCart[itemIndex].count += 1;
      setCart(newCart);
    }

    setTotalPrice(prevTotal => prevTotal + item.price);
  };

  const removeItemFromCart = (item) => {
    const itemIndex = cart.findIndex(cartItem => cartItem.id === item.id);

    if (itemIndex !== -1) {
      const newCart = [...cart];
      const product = newCart[itemIndex];

      if (product.count > 1) {
        newCart[itemIndex].count -= 1;
      } else {
        newCart.splice(itemIndex, 1);
      }

      setCart(newCart);
      setTotalPrice(prevTotal => prevTotal - item.price);
    }
  };

  const resetItemInCart = (item) => {
    const itemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
    
    if (itemIndex !== -1) {
      const newCart = [...cart];
      const product = newCart[itemIndex];

      newCart[itemIndex].count = 1;

      setCart(newCart);
      setTotalPrice(prevTotal => prevTotal + (item.price - (product.price * product.count)));
    }
  };

  const handlePayment = () => {
    const calculatedChange = paidAmount - totalPrice;
    if (calculatedChange >= 0) {
      setChange(calculatedChange);
      setIsCheckedOut(true);
    } else {
      alert("Insufficient payment!");
    }
  };

  const renderItems = () => {
    return items.map((item) => (
      <div key={item.id} className="item">
        <h4>{item.name}</h4>
        <div className="item-info">
          <p>Price: ₱{item.price.toFixed(2)}</p>
          <div className="add-to-cart" onClick={() => addItemToCart(item)}>
            Add to Cart
          </div>
        </div>
      </div>
    ));
  };

  const renderCart = () => {
    return cart.map((product) => (
      <div key={product.id} className="cart-item">
        <p>{product.name} x {product.count} - ₱{(product.price * product.count).toFixed(2)}</p>
        {!isCheckedOut && (
          <>
            <div className="remove-from-cart" onClick={() => removeItemFromCart(product)}>
              Remove 1 from Cart
            </div>
            <div className="reset-item" onClick={() => resetItemInCart(product)}>
              Reset Item to 1
            </div>
          </>
        )}
      </div>
    ));
  };    

  const renderCheckout = () => {
    if (!isCheckedOut) {
      return (
        <div className="checkout">
          <h3>Total Price: ₱{totalPrice.toFixed(2)}</h3>
          <div>
            <label>
              Amount Paid: ₱
              <input
                type="number"
                value={paidAmount}
                onChange={(e) => setPaidAmount(parseFloat(e.target.value))}
                placeholder="Enter amount"
              />
            </label>
          </div>
          <button onClick={handlePayment}>Pay</button>
        </div>
      );
    } else {
      return (
        <div className="receipt">
          <h3>Receipt</h3>
          <div>{renderCart()}</div>
          <p>Total: ₱{totalPrice.toFixed(2)}</p>
          <p>Amount Paid: ₱{paidAmount.toFixed(2)}</p>
          <p>Change: ₱{change.toFixed(2)}</p>
        </div>
      );
    }
  };

  return (
    <div className="shop-container">
      <h1>Welcome to the Grocery Shop!</h1>
      <div className="items-list">
        <h3>Available Items:</h3>
        {renderItems()}
      </div>

      <div className="cart">
        <h3>Your Cart:</h3>
        {renderCart()}
      </div>

      {renderCheckout()}
    </div>
  );
}
