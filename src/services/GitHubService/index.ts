import { Component } from "react";
import instance from "services/Interceptores";
import { apiConfig } from "../../utils/constants";

class GiHubService extends Component {
  static async getAll() {
    return await instance(`${apiConfig.BASE_URL}/getBancos`);
  }
}

export default GiHubService;
