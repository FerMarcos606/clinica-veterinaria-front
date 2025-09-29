class AuthRepository {
    constructor() {
    this.baseUrl = import.meta.env.VITE_API_BASE_URL;
  }
  
  async login(credentials) {
    const response = await fetch(`${this.baseUrl}/login`, {
      method: 'GET',
      headers: {
        'Authorization': credentials.authToken,
        'Accept': 'application/json',
      },
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`Error al iniciar sesión (${response.status})`);
    }

    return await response.json();
  }

  async logout() {
    const response = await fetch(`${this.baseUrl}/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Error al cerrar sesión');
    }

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
      return await response.json();
    } else {
      return;
    }
  }
}

export default AuthRepository;