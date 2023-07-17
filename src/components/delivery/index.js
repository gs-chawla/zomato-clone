import React from "react";
import "./delivery.css";
import Filters from "../common/filters";
import DeliveryCollections from "./deliveryCollections";
import { restaurants } from "../../data/restaurants";
import ExploreSection from "../common/exploreSection";
import { useState } from "react";
const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygenic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i class="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

const restaurantList = restaurants;

const Delivery = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantList);
  const [showDeliveryCollections, setShowDeliveryCollections] = useState(true);

  const handleFilterChange = (filter) => {
    let filtered = restaurantList;

    if (filter.title === "Rating 4.0+") {
      if (filteredRestaurants === restaurantList) {
        filtered = restaurantList.filter((restaurant) => restaurant?.info?.rating?.rating_text >= 4.0);
      } else {
        filtered = restaurantList;
      }
      setFilteredRestaurants(filtered);

      setShowDeliveryCollections((value) => !value);
    }
  };

  return (
    <div>
      <div className="max-width">
        <Filters
          filterList={deliveryFilters}
          onFilterChange={handleFilterChange}
        />
      </div>
      {showDeliveryCollections && <DeliveryCollections />}
      <ExploreSection
        list={filteredRestaurants}
        collectionName="Delivery Restaurants in Hyderabad"
      />
    </div>
  );
};

export default Delivery;
