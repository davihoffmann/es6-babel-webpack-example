import axios from 'axios';

class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);

            console.log(response);
        } catch(err) {
            console.warn('Erro ao buscar usuario');
        }
    }
}

Api.getUserInfo('davihoffmann');