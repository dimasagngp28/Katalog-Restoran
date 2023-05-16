import RestaurantSource from '../../data/restaurant-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="content">
        <h2 class="content_heading">Pilihan Restoran</h2>
        <div id="restos" class="restos">
        </div>
    </div>
      `;
  },

  async afterRender() {
    const restaurant = await RestaurantSource.homePage();
    const restoContainer = document.querySelector('#restos');
    restaurant.forEach((restaurants) => {
      restoContainer.innerHTML += createRestoItemTemplate(restaurants);
    });
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
