// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0 <0.8.0;
import "@openzepellin/contracts/math/SafeMath.sol";
import "@openzepellin/contracts/access/Ownable.sol";

contract AccountsCreation {

    bytes32 public constant DONOR = keccak256("DONOR");
    bytes32 public constant BENEFICIARY = keccak256("BENEFICIARY");
    bytes32 public constant MERCHANT = keccak256("MERCHANT");


    struct Donor{
        string name;
        string phoneNumber;
        address accountAddress;
        string status;
    }

    struct Beneficiary{
        string firstName;
        string lastName;
        string phoneNumber;
        string location;
        string category;
        string status;
        address accountAddress;
    }

    struct Merchant{
        string firstName;
        string lastName;
        string phoneNumber;
        address accountAddress;
        string products;
    }

    mapping(address => Donor) public donors;
    mapping(address => Beneficiary) public beneficiaries;
    mapping(address => Merchant) public merchants;

    event registerDonorComplete(
        string name,
        string phoneNumber,
        address accountAddress,
        string status
    );

    event registerBeneficiaryComplete(
        string firstName,
        string lastName,
        string phoneNumber,
        string location,
        string category,
        string status,
        address accountAddress
    );

    event registerMerchantComplete(
        string firstName,
        string lastName,
        string phoneNumber,
        address accountAddress,
        string products
    );

    function registerDonor(string memory _name, string, string memory _phoneNumber) public {
        donors[msg.sender] = Donor(
            _name,
            _phoneNumber,
            msg.sender,
            "active"
        );

        //grant the role of donor
        grantRole(DONOR, msg.sender);

        emit registerDonorComplete(
            _name,
            _phoneNumber,
            msg.sender,
            "active"
        );
    }

    function registerBeneficiary (string memory _firstName, string memory _lastName, string memory _phoneNumber, string memory _location, string memory _category) public {
        beneficiaries[msg.sender] = Beneficiary(
            _firstName,
            _lastName,
            _phoneNumber,
            _location,
            _category,
            "active",
            msg.sender
        );

        //grant the role of beneficiary
        grantRole(BENEFICIARY, msg.sender);

        emit registerBeneficiaryComplete(
            _firstName,
            _lastName,
            _phoneNumber,
            _location,
            _category,
            "active",
            msg.sender
        );
    }

    function registerMerchant (string memory _firstName, string memory _lastName, string memory phoneNumber, address _accountAddress, string memory _products) public {
        merchants[msg.sender] = Merchant(
            _firstName,
            _lastName,
            _phoneNumber,
            _accountAddress,
            _products
        );

        //grant the role of merchant
        grantRole(MERCHANT, msg.sender);

        emit registerMerchantComplete(
            _firstName,
            _lastName,
            _phoneNumber,
            _accountAddress,
            _products
        );
    }
}
