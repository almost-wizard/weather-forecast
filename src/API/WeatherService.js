import $api from ".";
import mockData from "../mock/weatherData.json";

export default class WeatherService {
  static async one_call(lat, lon) {
    try {
      const response = await $api.get(`/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,minutely,hourly`);
      return response;
    } catch (error) {
      console.warn("API request failed, using mock data:", error);
      return { data: mockData };
    }
  }
}
