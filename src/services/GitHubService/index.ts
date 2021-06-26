import { Component } from "react";
import instance from "services/Interceptores";
import { apiConfig } from "utils/constants";

class GiHubService extends Component {
  static async getAll(org: string, perPage: number = 5) {
    return await instance(
      `${apiConfig.BASE_URL}/orgs/${org}/members?per_page=${perPage}`
    );
  }

  static async getUserByUsername(username: string) {
    return await instance(`${apiConfig.BASE_URL}/users/${username}`);
  }
}

export default GiHubService;
