class AuthRepository {
    constructor() {
    this.baseUrl = import.meta.env.VITE_API_BASE_URL;
  }
  
  async login(credentials) {
    // 1. Login (ya lo tienes)
    const response = await fetch(`${this.baseUrl}/login`, {
      method: 'GET',
      headers: {
        'Authorization': credentials.authToken,
        'Accept': 'application/json',
      },
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`Error al iniciar sesión (${response.status})`);
    }

    // 2. Si el login fue exitoso, pide el usuario actual
    const userResponse = await fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include', // importante para enviar la cookie de sesión
      headers: {
        'Accept': 'application/json',
      }
    });

    if (!userResponse.ok) {
      throw new Error(`Error al obtener usuario (${userResponse.status})`);
    }

    const user = await userResponse.json();
    // 3. Guarda el id donde lo necesites (ejemplo: localStorage)
    localStorage.setItem('userId', user.id_user);

    // 4. Devuelve el usuario si lo necesitas
    return user;
  }

async logout() {
  const response = await fetch(`${this.baseUrl}/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('Error al cerrar sesión');
  }


  localStorage.removeItem('userId');


  const contentType = response.headers.get("content-type");
  if (contentType && contentType.indexOf("application/json") !== -1) {
    return await response.json();
  } else {
    return;
  }
}
}

export default AuthRepository;