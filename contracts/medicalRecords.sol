// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract medicalRecords {
    uint256 idPerson = 0;

    struct Person {
        string name;
        uint256 age;
        string description;
    }

    mapping(uint256 => Person) PersonMedical;

    //event()

    function createPatient(
        string memory _name,
        uint256 _age,
        string memory _description
    ) public {
        idPerson++;
        PersonMedical[idPerson] = Person(_name, _age, _description);
    }
}
