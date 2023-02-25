const medicalRecords = artifacts.require("medicalRecords");

// Vamos a crear el test

contract("medicalRecords", () => {

    // vamos iniciar el contrato
    before(async () => {
        this.medicalRecords = await medicalRecords.deployed()
    })

    // Crear categorias 

    // Parte 1
    it("Comprobar si tiene una Direccion ", async () => {
        const address = this.medicalRecords.address

        assert.notEqual(address, null)
    })
})

