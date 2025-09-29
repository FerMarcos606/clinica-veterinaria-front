import UserRepository from '../../repositories/user/UserRepository';

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async getUsers() {
        try {
            const result = await this.userRepository.getAll();
            console.log('Usuarios obtenidos con éxito:', result);
            return result;
        } catch (error) {
            console.error('Error en UserService.getUsers:', error);
            throw error;
        }
    }
}

const userService = new UserService();

export default userService;
