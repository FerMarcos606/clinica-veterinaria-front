class PacientsRepository {
    constructor() {
        this.baseUrl = import.meta.env.VITE_API_BASE_URL;
    }

    async create(patientData) {
        try {
            const response = await fetch(`${this.baseUrl}/patients`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(patientData),
            });

            if (!response.ok) {
                throw new Error(`Error al crear el paciente (${response.status})`);
            }

            return await response.json();
        } catch (error) {
            console.error('Error en PacientsRepository.create:', error);
            throw error;
        }
    }

    async getAll() {
        const response = await fetch(`${this.baseUrl}/patients`, {
            credentials: 'include',
        });
        if (!response.ok) {
            throw new Error(`Error al obtener los pacientes (${response.status})`);
        }
        return await response.json();
    }

    async getByUserId(userId) {
        const response = await fetch(`${this.baseUrl}/users/${userId}/patients`, {
            credentials: 'include',
        });

        if (!response.ok) {
            throw new Error(`Error al obtener los pacientes del usuario (${response.status})`);
        }

        return await response.json();
    }

    async getById(id) {
        const response = await fetch(`${this.baseUrl}/patients/${id}`, {
            credentials: 'include',
        });

        if (!response.ok) {
            throw new Error(`Error al obtener el paciente (${response.status})`);
        }

        return await response.json();
    }

    async update(id, patientData) {
        try {
            const response = await fetch(`${this.baseUrl}/patients/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(patientData),
            });

            if (!response.ok) {
                throw new Error(`Error al actualizar el paciente (${response.status})`);
            }

            return await response.json();
        } catch (error) {
            console.error('Error en PacientsRepository.update:', error);
            throw error;
        }
    }

    async delete(id) {
        try {
            const response = await fetch(`${this.baseUrl}/patients/${id}`, {
                method: 'DELETE',
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error(`Error al eliminar el paciente (${response.status})`);
            }

            return true;
        } catch (error) {
            console.error('Error en PacientsRepository.delete:', error);
            throw error;
        }
    }
}

export default PacientsRepository;