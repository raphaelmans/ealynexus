const scholarProgressRepository = require('../repositories/scholarProgress.repository');
const ErrorResponse = require('../utils/errorResponse');


class scholarProgressService {
    async createscholarProgress() {
        return await scholarProgressRepository.createscholarProgress();
    }

}

module.exports = scholarProgressService;
