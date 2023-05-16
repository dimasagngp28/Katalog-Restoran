import CONFIG from '../../globals/config';

const createRestoDetailTemplate = ({ restaurant, foods, drinks }) => `
  <h2 class="resto_title">${restaurant.name}</h2>
  <img class="resto_img" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="resto_info">
    <h3>Information</h3>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Description</h4>
    <p>${restaurant.description}</p>
    <h4>Food Menu</h4>
    <ul>
      ${foods.map((food) => `<li>${food.name}</li>`).join('')}
    </ul>
    <h4>Drink Menu</h4>
    <ul>
      ${drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
    </ul>
  </div>
  <div class="resto_review">
    <h4>Review</h3>
    <ul>
      ${restaurant.customerReviews.map((review) => `<li>${review.review}</li>`).join('')}
    </ul>
  </div>
`;

const createRestoItemTemplate = (restaurants) => `
  <div class="resto-item">
    <div class="resto-item_header">
      <img class="resto-item_header_img" src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" 
        alt="${restaurants.name}">
      <div class="resto-item_header_rating">
        <p>⭐️<span class="resto-item_header_rating_score">${restaurants.rating}</span></p>
      </div>
    </div>
    <div class="resto-item_content">
      <h3><a href="/#/detail/${restaurants.id}">${restaurants.name}</a></h3>
      <h4>${restaurants.city}</h4>
      <p>${restaurants.description}</p>
    </div>
  </div>
`;
const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
