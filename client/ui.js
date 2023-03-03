const medicalRecords = document.querySelector('#medicalRecords')

medicalRecords.addEventListener("submit", e => {
    e.preventDefault()

    App.createPatientContracts(
        medicalRecords["name"].value,
        medicalRecords["edad"].value,
        medicalRecords["msg"].value
    )

    document.getElementById("name").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("msg").value = "";


})