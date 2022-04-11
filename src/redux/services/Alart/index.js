import client from "../../config/HttpClient";

export const getCityTemp = () => {
  return client.post(
    "http://34.245.179.21/AcutroAPI/WeatherForecast/GetCityTemperature",
    { City: "Nairobi", FromDate: "2021-01-01", ToDate: "2021-12-31" },
    {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        UserName: "Test",
        Password: "Test",
      },
    }
  );
  // return await axios.post(
  //   "http://34.245.179.21/AcutroAPI/WeatherForecast/GetCityTemperature",
  //   {
  //     City: "Nairobi",
  //     FromDate: "2021-01-01",
  //     ToDate: "2021-12-31",
  //   },
  //   {
  //     headers:{
  //       'Content-Type': 'application/json'
  //     },
  //     auth:{
  //               UserName: "Test",
  //               Pwd: "Test",
  //     }
  //   }
  // );
};
