import PacientsRepository from '../../repositories/pacients/PacientsRepository';

class PacientsService {
    constructor() {
        this.pacientsRepository = new PacientsRepository();
    }

    async createPatient(patientData) {
        try {
            // Here you could add validation for patientData before sending it to the repository
            if (!patientData.name?.trim()) {
                throw new Error('El nombre del paciente es obligatorio');
            }
            // Add other validations as needed

            const result = await this.pacientsRepository.create(patientData);

            console.log('Paciente creado con éxito:', result);
            return result;
        } catch (error) {
            console.error('Error en PacientsService.createPatient:', error);
            throw error;
        }
    }
}

const pacientsService = new PacientsService();

export default pacientsService;