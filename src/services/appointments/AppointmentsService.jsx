import AppointmentsRepository from '../../repositories/appointments/AppointmentsRepository';

class AppointmentsService {
    constructor() {
        this.appointmentsRepository = new AppointmentsRepository();
    }

    async createAppointment(appointmentData) {
        try {
            const result = await this.appointmentsRepository.create(appointmentData);

            console.log('Cita creada con éxito:', result);
            return result;
        } catch (error) {
            console.error('Error en AppointmentsService.createAppointment:', error);
            throw error;
        }
    }

    async getAppointments() {
        try {
            const result = await this.appointmentsRepository.getAll();
            console.log('Citas obtenidas con éxito:', result);
            return result;
        } catch (error) {
            console.error('Error en AppointmentsService.getAppointments:', error);
            throw error;
        }
    }

    async getMyAppointments() {
        try {
            const result = await this.appointmentsRepository.getMyAppointments();
            console.log('Mis citas obtenidas con éxito:', result);
            return result;
        } catch (error) {
            console.error('Error en AppointmentsService.getMyAppointments:', error);
            throw error;
        }
    }
}

const appointmentsService = new AppointmentsService();

export default appointmentsService;