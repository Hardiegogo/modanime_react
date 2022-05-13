import React from "react";

import { useProducts } from "../../context/useProducts";
import "./Sidebar.css";

const Sidebar = () => {
  const { state, dispatch } = useProducts();

  return (
    <aside className="sidebar p-24">
      <div className="filters-header">
        <h3>Filters</h3>
        <button
          className="link-secondary x-small-text"
          onClick={() => dispatch({ type: "FILTERS_RESET" })}
        >
          Clear
        </button>
      </div>
      <div className="slider-container mt-32">
        <h3>Price</h3>
        <input
          type="range"
          min="0"
          max="4"
          value={state.slider}
          className="slider mt-16"
          onChange={(e) =>
            dispatch({ type: "SET_SLIDER", payload: e.target.value })
          }
          
        />
        <ul className="slider-values mt-1">
          <li>
          </li>
          <li className="ml-16">1000
          </li>
          <li>2000
          </li>
          <li>3000
          </li>
          <li>4000
          </li>
        </ul> 
      </div>
      <div className="category-container mt-32">
        <h3>Categories</h3>
        <div className="category mt-16 x-small-text">
          <input
            type="checkbox"
            id="action-figures"
            value="Action-figures"
            onChange={(e) =>
              dispatch({
                type: "CATEGORY_ACTION_FIGURES",
                payload: !state.categoryActionFigures,
              })
            }
            checked={state.categoryActionFigures}
          />
          <label htmlFor="male-figures">Action-figures</label>
        </div>
        <div className="category x-small-text">
          <input
            type="checkbox"
            id="t-shirts"
            name="T-shirts"
            onChange={(e) =>
              dispatch({
                type: "CATEGORY_T_SHIRTS",
                payload: !state.categoryTshirts,
              })
            }
            checked={state.categoryTshirts}
          />
          <label htmlFor="female-figures">T-shirts</label>
        </div>
        <div className="category x-small-text">
          <input
            type="checkbox"
            id="masks"
            name="Masks"
            onChange={(e) =>
              dispatch({
                type: "CATEGORY_MASKS",
                payload: !state.categoryMasks,
              })
            }
            checked={state.categoryMasks}
          />
          <label htmlFor="female-figures">Masks</label>
        </div>
      </div>
      <div className="ratings-container mt-32">
        <h3>Ratings</h3>
        <div className="rating mt-16 x-small-text">
          <input
            type="radio"
            id="stars_4"
            value="4"
            name="ratings"
            checked={state.filterByRatings==4}
            onChange={(e) =>
              dispatch({ type: "FILTER_BY_RATING", payload: e.target.value })
            }
          />
          <label htmlFor="stars_4">4 stars and above</label>
        </div>
        <div className="rating x-small-text">
          <input
            type="radio"
            id="stars_3"
            name="ratings"
            value="3"
            checked={state.filterByRatings==3}
            onChange={(e) =>
              dispatch({ type: "FILTER_BY_RATING", payload: e.target.value })
            }
          />
          <label htmlFor="stars_3">3 stars and above</label>
        </div>
        <div className="rating x-small-text">
          <input
            type="radio"
            id="stars_2"
            name="ratings"
            value="2"
            checked={state.filterByRatings==2}
            onChange={(e) =>
              dispatch({ type: "FILTER_BY_RATING", payload: e.target.value })
            }
          />
          <label htmlFor="stars_2">2 stars and above</label>
        </div>
        <div className="rating x-small-text">
          <input
            type="radio"
            id="stars_1"
            name="ratings"
            value="1"
            checked={state.filterByRatings==1}
            onChange={(e) =>
              dispatch({ type: "FILTER_BY_RATING", payload: e.target.value })
            }
          />
          <label htmlFor="stars_1">1 star and above </label>
        </div>
      </div>

      <div className="sort-filter-container mt-32">
        <h3>Sort by</h3>
        <div className="sort x-small-text">
          <input
            type="radio"
            id="low-to-high"
            name="sort_by"
            checked={state.sortByPrice==='PRICE_LOW_TO_HIGH'}
            onChange={() =>
              dispatch({
                type: "PRICE_LOW_TO_HIGH",
                payload: "PRICE_LOW_TO_HIGH",
              })
            }
          />
          <label htmlFor="low-to-high">Price:Low to high</label>
        </div>
        <div className="sort x-small-text">
          <input
            type="radio"
            id="high-to-low"
            name="sort_by"
            checked={state.sortByPrice==='PRICE_HIGH_TO_LOW'}
            onChange={() =>
              dispatch({
                type: "PRICE_HIGH_TO_LOW",
                payload: "PRICE_HIGH_TO_LOW",
              })
            }
          />
          <label htmlFor="high-to-low">Price:High to ligh</label>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
