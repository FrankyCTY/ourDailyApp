import React from "react";
import "./cartPage.style.scss";

import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartItemsQuantity,
  selectCartItemsTotalPrice,
  selectWishListItems,
} from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

import AppItem from "../../Components/app-item/app-item.component";
import StripeCheckoutButton from "../../ComponentsNotReuse/stripe-button/stripe-button.component";

const CartPage = ({
  cartItems,
  cartItemsQuantity,
  totalPrice,
  wishlistItems,
}) => (
  <div className="Cart-Page pages">
    <div className="heading">
      <h1 className="title">Cart</h1>
    </div>
    {/* ========================== content main ========================== */}
    <div className="cart-content-main">
      {/* ========================== Left Side ========================== */}
      <div className="left-side">
        {/* ============= Cart Items ============= */}
        <span className="app-in-cart">
          {cartItemsQuantity}{" "}
          {cartItemsQuantity === 1 ? "Application" : "Applications"} in Cart
        </span>

        <div className="appItem-wrapper cartItems-wrapper">
          {/* ============= Render 1: cartItems quantity >= 1 ============= */}
          {cartItemsQuantity !== 0 &&
            cartItems !== null &&
            cartItems.map((cartItem) => (
              <AppItem id={cartItem.id} cartItem={cartItem} itemType="cart" />
            ))}

          {/* ============= Render 2: empty cartItems ============= */}
          {cartItemsQuantity === 0 && (
            <div className="empty-cartItems-wrapper">
              <i className="iconfont icon-cart"></i>
              <p className="empty-cartItems-text">
                Your cart is empty. Keep shopping to find an application!
              </p>
            </div>
          )}
        </div>

        {/* ============= WishList ============= */}
        <span className="recently-wishlisted">Recently wishlisted</span>
        {/* ============= Render 1: wishlistItems quantity >= 1 ============= */}
        {wishlistItems.length !== 0 && (
          <div className="appItem-wrapper wishlist-wrapper">
            {wishlistItems !== null &&
              wishlistItems.map((wishlistItem) => (
                <AppItem
                  id={wishlistItem.id}
                  cartItem={wishlistItem}
                  itemType="wishlist"
                />
              ))}
          </div>
        )}
        {/* ============= Render 2: empty wishlist ============= */}
        {wishlistItems.length === 0 && (
          <p className="empty-wishlist-text">
            You haven't added any applications to your wishlist.
          </p>
        )}
      </div>
      {/* ========================== Right Side ========================== */}
      <div className="right-side">
        {/* ============== Payment Block ============== */}
        <div className="payment-info">
          <span className="total-price-text">
            Total:{" "}
            <span className="dollar-price-text">
              $<span className="price-text">{totalPrice}</span>
            </span>
          </span>
          {/* ============== Checkout btns with Stripe ============= */}
          <button
            className={`btn--checkout`}
            onClick={() => {
              const stripeCheckOutBtn = document.querySelector(
                ".StripeCheckout"
              );
              // Triggering click to the stripe button
              if (stripeCheckOutBtn !== null) {
                stripeCheckOutBtn.click();
              }
            }}
            disabled={cartItemsQuantity === 0}
          >
            Checkout
          </button>
          <StripeCheckoutButton price={totalPrice} />
        </div>
        <hr />
      </div>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsQuantity: selectCartItemsQuantity,
  totalPrice: selectCartItemsTotalPrice,
  wishlistItems: selectWishListItems,
});

export default connect(mapStateToProps)(CartPage);
