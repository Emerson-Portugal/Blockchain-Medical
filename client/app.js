App = {
    contracts: {},
    init: async () => {
        await App.loadEthereum()
        await App.loadAccount()
        await App.loadContracts()
        await App.renderPatient()
    },

    loadEthereum: async () => {
        if (window.ethereum) {
            // Vamos a conectar nuestro sitio a Metamask
            App.web3Provider = window.ethereum
            await window.ethereum.request({ method: 'eth_requestAccounts' });
        }
        else {
            console.log("Error")
        }
    },
    // Convertir la diccion de la billetera, para que sea valido
    loadAccount: async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        App.account = accounts[0]
    },



    loadContracts: async () => {
        const res = await fetch("medicalRecords.json")
        // Traemos el JSON

        const medicalRecordsJSON = await res.json()
        // Convertimos el JSON a TRUFFLE

        //console.log(medicalRecordsJSON)


        App.contracts.medicalRecords = TruffleContract(medicalRecordsJSON)
        // Conectamos a Metamask

        App.contracts.medicalRecords.setProvider(App.web3Provider)

        // contrato en la varible -> medicalRecords
        App.medicalRecords = await App.contracts.medicalRecords.deployed()
    },

    renderPatient: async () => {
        const medicalRecordsCounter = await App.medicalRecords.idPerson();
        const medical = medicalRecordsCounter.toNumber();

        let html = "";

        for (let i = 1; i <= medical; i++) {
            const task = await App.medicalRecords.PersonMedical(i);

            const taskName = task[0];
            const taskAge = task[1].toNumber();
            const taskDescription = task[2];


            // Creating a task Card
            let taskElement =
                `<div class="primary_value">
                <div class="valor_span">
                    <span class="title_span"> Nombre:</span>
                    <span> ${taskName}</span>
                </div>
                <div class="valor_span">
                    <span class="title_span">Edad:</span>
                    <span>${taskAge}</span>
                </div>
                <div class="valor_span">
                    <span class="title_span">Descripcion:</span>
                    <span>${taskDescription}</span>
                </div>
            </div>`;
            html += taskElement;
        }

        document.querySelector("#tasksList").innerHTML = html;

    },

    createPatientContracts: async (name, age, msg) => {

        const result = await App.medicalRecords.createPatient(name, age, msg, { from: App.account });
        console.log(result.logs[0].args)
    }




}
App.init()