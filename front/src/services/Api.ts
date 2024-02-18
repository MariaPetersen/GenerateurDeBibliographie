import { IEntry } from "../interfaces/IEntry";

class Api {
  private token: string | null;
  constructor() {
    this.token = localStorage.getItem("token");
  }

  async loginUser(email: string, password: string) {
    const response = await fetch(`${process.env.REACT_APP_API}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    return response;
  }

  async signUpUser(email: string, password: string) {
    const response = await fetch(`${process.env.REACT_APP_API}/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    return response;
  }
  async isAuthenticated() {
    const response = await fetch(`${process.env.REACT_APP_API}/user/isAuth`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    });
    return response;
  }

  async getBibliography() {
    const response = await fetch(`${process.env.REACT_APP_API}/bibliography`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    });
    return response;
  }

  async createEntry(entry: IEntry) {
    const response = await fetch(`${process.env.REACT_APP_API}/bibliography`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify({ entry }),
    });
    return response;
  }
  async updateEntry(entryId: string, entry: IEntry) {
    const response = await fetch(
      `${process.env.REACT_APP_API}/bibliography/${entryId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
        body: JSON.stringify({ entry }),
      }
    );
    return response;
  }
  async deleteEntry(entryId: string) {
    const response = await fetch(
      `${process.env.REACT_APP_API}/bibliography/${entryId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
      }
    );
    return response;
  }
}

export default Api;
