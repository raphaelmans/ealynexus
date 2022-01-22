const scholarshipRepository = require('../repositories/scholarship.repository');
const ErrorResponse = require('../utils/errorResponse');


class ScholarshipService {
    async createScholarship(scholarshipObj) {
        return await scholarshipRepository.createScholarship(scholarshipObj);
    }

    async getScholarship(scholarshipId) {
        return await scholarshipRepository.getScholarshipById(scholarshipId);
    }

    async getAllScholarship() {
        return await scholarshipRepository.getAllScholarship();
    }

    async insertScholar(scholarshipId, scholar) {
        return await scholarshipRepository.insertScholar(scholarshipId, scholar);
    }
}

module.exports = ScholarshipService;
