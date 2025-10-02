
import RegisterRepository from '../../repositories/register/RegisterRepository';

class RegisterService {
  constructor() {
    this.registerRepository = new RegisterRepository();
  }

  async registerUser(formData) {
    try {

      const userDataForValidation = {
        name: formData.name,
        firstSurname: formData.firstSurname,
        secondSurname: formData.secondSurname || '', 
        dni: formData.dni,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        password: formData.password,
      };

     
      this.validateUserData(userDataForValidation);

  
      const userDataForAPI = {
        name: formData.name,
        firstSurname: formData.firstSurname,
        secondSurname: formData.secondSurname || '', 
        dni: formData.dni,
        phoneNumber: formData.phoneNumber,
        email: btoa(formData.email),
        password: btoa(formData.password),
      };

      const result = await this.registerRepository.register(userDataForAPI);

      
      console.log('Usuario registrado exitosamente:', { 
        ...result, 

        data: { ...result.data, email: '[ENCRYPTED]', password: '[ENCRYPTED]' }
      });

      return result;
    } catch (error) {
    
      console.error('Error en el servicio de registro:', error);
      throw error;
    }
  }

  validateUserData(userData) {
    
    if (!userData.name?.trim()) {
      throw new Error('El nombre es obligatorio');
    }

    if (!userData.firstSurname?.trim()) {
      throw new Error('El primer apellido es obligatorio');
    }

    if (!userData.dni?.trim()) {
      throw new Error('El DNI es obligatorio');
    }

    const dniRegex = /^[0-9]{8}[A-Za-z]$/;
    if (!dniRegex.test(userData.dni)) {
      throw new Error('El DNI debe tener 8 números y una letra');
    }


    const phoneRegex = /^\d{9}$/;
    if (!phoneRegex.test(userData.phoneNumber)) {
      throw new Error('El teléfono debe tener 9 dígitos');
    }

  
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(userData.email)) {
      throw new Error('El formato del email no es válido');
    }

    if (!userData.password || userData.password.length < 8) {
      throw new Error('La contraseña debe tener al menos 8 caracteres');
    }
  }
}


const registerService = new RegisterService();

export default registerService;