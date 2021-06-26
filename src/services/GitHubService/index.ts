import { Component } from "react";
import instance from "services/Interceptores";
import { apiConfig } from "utils/constants";

class GiHubService extends Component {
  static async getAll(org: string) {
    return await instance(`${apiConfig.BASE_URL}/orgs/${org}/members`);
  }
}

export default GiHubService;
