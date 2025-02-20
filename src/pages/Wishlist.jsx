import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../redux/slices/wishlistSlice";
import Header from "../components/Header";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistRecipes = useSelector((state) => state.wishlist);

  return (
    <>
      <Header />
      <div style={{ paddingTop: "100px" }} className="container">
        {wishlistRecipes.length > 0 ? (
          <>
            <h2 className="text-center text-danger fw-bold">My Wishlist ❤️</h2>
            <div className="row">
              {wishlistRecipes.map((recipe) => (
                <div key={recipe.id} className="col-md-4 mb-4">
                  <div className="card">
                    <img src={recipe.image} className="card-img-top" alt={recipe.title} />
                    <div className="card-body text-center">
                      <h5 className="card-title">{recipe.title}</h5>
                      <button
                        className="btn btn-danger"
                        onClick={() => dispatch(removeFromWishlist(recipe.id))}
                      >
                        <i className="fa-solid fa-heart-circle-xmark"></i> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <img
              src="https://sa.adanione.com/~/media/Foundation/Adani/emptyImages/empty_cart.gif"
              alt="Empty Wishlist"
              width="300px"
            />
            <h3 className="text-danger mt-3">Your Wishlist is empty</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default Wishlist;
