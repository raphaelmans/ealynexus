const AuthService = require('./auth.service');

describe('Authentication', () => {
    let authService;
    beforeEach(()=>{
        authService = new AuthService();
    });

    it('test', async()=>{
        expect(true).toBe(true);
    });
});