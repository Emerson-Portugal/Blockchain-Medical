const medicalRecords = artifacts.require("medicalRecords");

module.exports = function (deployer) {
    deployer.deploy(medicalRecords);
};
