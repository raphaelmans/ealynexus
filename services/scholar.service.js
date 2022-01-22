const req = require('express/lib/request');
const scholarRepository = require('../repositories/scholar.repository');
const ErrorResponse = require('../utils/errorResponse');


class ScholarService {
    async createScholar(user, progress, scholarship) {
        return await scholarRepository.createScholar(user, progress, scholarship);
    }

    async getAllScholar(){
        return await scholarRepository.getAllScholar();
    }
}

module.exports = ScholarService;
