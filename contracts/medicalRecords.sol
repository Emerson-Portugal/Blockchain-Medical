// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract medicalRecords {
    uint256 public idPerson = 0;

    // Creating a new user with the constructor

    constructor() {
        createPatient("Emer", 21, "Good life");
    }

    // let's return the value
    event NewPerson(string name, uint256 age, string description);

    // The person's structure has been created
    struct Person {
        string name;
        uint256 age;
        string description;
    }

    mapping(uint256 => Person) public PersonMedical;

    //event()

    function createPatient(
        string memory _name,
        uint256 _age,
        string memory _description
    ) public {
        idPerson++;
        PersonMedical[idPerson] = Person(_name, _age, _description);
        emit NewPerson(_name, _age, _description);
    }
}
