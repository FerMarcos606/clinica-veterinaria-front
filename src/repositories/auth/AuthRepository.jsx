class AuthRepository {
    constructor() {
    this.baseUrl = import.meta.env.VITE_API_BASE_URL;
  }
  
  async login(credentials) {
    try {
      const response = await fetch(`${this.baseUrl}/login`, {
        method: 'GET',
        headers: {
          'Authorization': credentials.authToken,
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error al iniciar sesión (${response.status})`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error en AuthRepository.login:', error);
      throw error;
    }
  }

  async logout() {
    try {
      const response = await fetch(`${this.baseUrl}/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Error al cerrar sesión');
      }

      return await response.json();
    } catch (error) {
      console.error('Error en AuthRepository.logout:', error);
      throw error;
    }
  }
}

export default AuthRepository;