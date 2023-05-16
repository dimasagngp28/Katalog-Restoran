import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async homePage() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailPage(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    const { restaurant } = responseJson;
    const { foods, drinks } = restaurant.menus;
    return { restaurant, foods, drinks };
  }
}
export default RestaurantSource;
