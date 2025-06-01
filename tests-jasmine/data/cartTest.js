import {addToCart, cart} from '../../data/cart.js';

describe('test suite: addToCart', () => {
  it('adds an existing product to the cart', () => {
    
  });

  it('adds a new product to the file', () => {
    spyOn(localStorage, 'getItem').and.callFake(() => {
      returnJSON.stringify([]);
    });
    console.log(localStorage.getItem('cart'));

    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.length).toEual(1);
  });
});