// services/RegisterService.js
import RegisterRepository from '../../repositories/register/RegisterRepository';

class RegisterService {
  constructor() {
    this.registerRepository = new RegisterRepository();
  }

  async registerUser(formData) {
    try {
      // Primero preparamos los datos SIN encriptar para validación
      const userDataForValidation = {
        name: formData.name,
        firstSurname: formData.firstSurname,
        secondSurname: formData.secondSurname || '', // Opcional
        dni: formData.dni,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        password: formData.password,
      };

      // Validaciones adicionales con datos sin encriptar
      this.validateUserData(userDataForValidation);

      // DESPUÉS de validar, preparamos los datos para enviar a la API (con encriptación)
      const userDataForAPI = {
        name: formData.name,
        firstSurname: formData.firstSurname,
        secondSurname: formData.secondSurname || '', // Opcional
        dni: formData.dni,
        phoneNumber: formData.phoneNumber,
        email: btoa(formData.email),
        password: btoa(formData.password),
      };

      // Llama al repository con los datos encriptados
      const result = await this.registerRepository.register(userDataForAPI);

      // Log para debugging (remover en producción) - NO logueamos datos encriptados
      console.log('Usuario registrado exitosamente:', { 
        ...result, 
        // Evitamos loguear datos sensibles encriptados
        data: { ...result.data, email: '[ENCRYPTED]', password: '[ENCRYPTED]' }
      });

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
      throw new Error('El nombre es obligatorio');
    }

    if (!userData.firstSurname?.trim()) {
      throw new Error('El primer apellido es obligatorio');
    }

    if (!userData.dni?.trim()) {
      throw new Error('El DNI es obligatorio');
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

    // Validación de email (recibe email sin encriptar)
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(userData.email)) {
      throw new Error('El formato del email no es válido');
    }

    // Validación de contraseña (recibe password sin encriptar)
    if (!userData.password || userData.password.length < 8) {
      throw new Error('La contraseña debe tener al menos 8 caracteres');
    }
  }
}

// Instancia singleton para usar en toda la aplicación
const registerService = new RegisterService();

export default registerService;