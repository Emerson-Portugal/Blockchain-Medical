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
        const address = await this.medicalRecords.address

        assert.notEqual(address, null)
    })


    it("Comprobar cantidad", async () => {
        const person = await this.medicalRecords.idPerson()
        const medical = await this.medicalRecords.PersonMedical(person)

        assert.equal(medical.name, "Emer")

    })


    it("New Person in the blockchain", async () => {
        const newPerson = await this.medicalRecords.createPatient("Oscar", 22, "Good")
        const person = await newPerson.logs[0].args
        // Comprobar Array
        const contador = await this.medicalRecords.idPerson()


        assert.equal(contador, 2)
        assert.equal(person.name, "Oscar")
        assert.equal(person.age, 22)


    })
})

