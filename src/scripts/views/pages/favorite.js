import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="content">
      <h2 class="content_heading"> Favorite Resto</h2>
      <div id="restos" class="restos">
 
      </div>
    </div>
  `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestoIdb.getAllRestos();
    const restoContainer = document.querySelector('#restos');
    restaurant.forEach((restaurants) => {
      restoContainer.innerHTML += createRestoItemTemplate(restaurants);
    });
  },
};

export default Favorite;
