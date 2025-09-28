class UserRepository {
    constructor() {
        this.baseUrl = import.meta.env.VITE_API_BASE_URL;
    }

    async getAll() {
        const response = await fetch(`${this.baseUrl}/users`, {
            credentials: 'include',
        });
        if (!response.ok) {
            throw new Error(`Error al obtener los usuarios (${response.status})`);
        }
        return await response.json();
    }
}

export default UserRepository;
