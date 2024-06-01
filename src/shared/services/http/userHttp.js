import http from '@/shared/services/http/index.js';

const userHttpService = { 
    getAll: () => http.get('/users'),    
};

export default userHttpService;

