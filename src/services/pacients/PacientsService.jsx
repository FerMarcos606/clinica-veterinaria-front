import PacientsRepository from '../../repositories/pacients/PacientsRepository';

class PacientsService {
    constructor() {
        this.pacientsRepository = new PacientsRepository();
    }

    async createPatient(patientData) {
        try {
     
            if (!patientData.name?.trim()) {
                throw new Error('El nombre del paciente es obligatorio');
            }


            const result = await this.pacientsRepository.create(patientData);

            console.log('Paciente creado con éxito:', result);
            return result;
        } catch (error) {
            console.error('Error en PacientsService.createPatient:', error);
            throw error;
        }
    }
        async getPatients() {
        try {
            const result = await this.pacientsRepository.getAll();
            console.log('Pacientes obtenidos con éxito:', result);
            return result;
        } catch (error) {
            console.error('Error en PacientsService.getPatients:', error);
            throw error;
        }
    }

    async getPatientsByUserId(userId) {
    try {
      if (!userId) {
        throw new Error("El ID del usuario es obligatorio");
      }

      const result = await this.pacientsRepository.getByUserId(userId);
      console.log(`Pacientes del usuario ${userId} obtenidos con éxito:`, result);
      return result;
    } catch (error) {
      console.error(`Error en PacientsService.getPatientsByUserId(${userId}):`, error);
      throw error;
    }
  }
}

    
const pacientsService = new PacientsService();

export default pacientsService;