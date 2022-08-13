import $api from ".";

export default class WeatherService {
  static async one_call(lat, lon) {
    return $api.get(`/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,minutely,hourly`);
  }
}
