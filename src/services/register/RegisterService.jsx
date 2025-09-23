// services/RegisterService.js
import RegisterRepository from '../repositories/RegisterRepository';

class RegisterService {
  constructor() {
    this.registerRepository = new RegisterRepository();
  }

  async registerUser(formData) {
    try {
      // Transforma los datos del formulario al formato esperado por la API
      const userData = {
        name: formData.name,
        firstSurname: formData.firstSurname,
        secondSurname: formData.secondSurname || '', // Opcional
        dni: formData.dni,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        password: formData.password,
      };

      // Validaciones adicionales si es necesario
      this.validateUserData(userData);

      // Llama al repository
      const result = await this.registerRepository.register(userData);

      // Log para debugging (remover en producción)
      console.log('Usuario registrado exitosamente:', result);

      return result;
    } catch (error) {
      // Log del error para debugging
      console.error('Error en el servicio de registro:', error);
      throw error;
    }
  }

  validateUserData(userData) {
    // Validaciones adicionales del lado del cliente
    if (!userData.name?.trim()) {
      throw new Error('El nombre es requerido');
    }

    if (!userData.firstSurname?.trim()) {
      throw new Error('El primer apellido es requerido');
    }

    if (!userData.dni?.trim()) {
      throw new Error('El DNI es requerido');
    }

    // Validación de formato DNI
    const dniRegex = /^[0-9]{8}[A-Za-z]$/;
    if (!dniRegex.test(userData.dni)) {
      throw new Error('El DNI debe tener 8 números y una letra');
    }

    // Validación de teléfono
    const phoneRegex = /^\d{9}$/;
    if (!phoneRegex.test(userData.phoneNumber)) {
      throw new Error('El teléfono debe tener 9 dígitos');
    }

    // Validación de email
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(userData.email)) {
      throw new Error('El formato del email no es válido');
    }

    // Validación de contraseña
    if (!userData.password || userData.password.length < 8) {
      throw new Error('La contraseña debe tener al menos 8 caracteres');
    }
  }
}

// Instancia singleton para usar en toda la aplicación
const registerService = new RegisterService();

export default registerService;