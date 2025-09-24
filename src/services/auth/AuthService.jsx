import AuthRepository from '../../repositories/auth/AuthRepository';

class AuthService {
  constructor() {
    this.authRepository = new AuthRepository();
  }

  async loginUser(formData) {
    try {
      // Validación básica antes de enviar
      if (!formData.email?.trim()) {
        throw new Error('El email es obligatorio');
      }
      if (!formData.password?.trim()) {
        throw new Error('La contraseña es obligatoria');
      }

      // Creamos el token de Basic Auth
      const credentials = `${formData.email}:${formData.password}`;
      const authToken = `Basic ${btoa(credentials)}`;
      
      const result = await this.authRepository.login({ authToken });

      console.log('Login con éxito:', result);
      return result;
    } catch (error) {
      console.error('Error en AuthService.loginUser:', error);
      throw error;
    }
  }

  async logoutUser() {
    try {
      const result = await this.authRepository.logout();
      console.log('Logout con éxito');
      return result;
    } catch (error) {
      console.error('Error en AuthService.logoutUser:', error);
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;