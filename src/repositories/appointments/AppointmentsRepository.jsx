class AppointmentsRepository {
    constructor() {
        this.baseUrl = import.meta.env.VITE_API_BASE_URL;
    }

    async create(appointmentData) {
        try {
            const response = await fetch(`${this.baseUrl}/appointments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(appointmentData),
            });

            if (!response.ok) {
                throw new Error(`Error al crear la cita (${response.status})`);
            }

            return await response.json();
        } catch (error) {
            console.error('Error en AppointmentsRepository.create:', error);
            throw error;
        }
    }

    async getAll() {
        const response = await fetch(`${this.baseUrl}/appointments`, {
            credentials: 'include',
        });
        if (!response.ok) {
            throw new Error(`Error al obtener las citas (${response.status})`);
        }
        return await response.json();
    }
}

export default AppointmentsRepository;