console.log("hi");

let address1 = {
    number: 1,
    streetName: "Lakeside way",
    city: "York",
    postcode: "Y0105FY"
}

let address2 = {
    number: 2,
    streetName: "Church Lane",
    city: "York",
    postcode: "YO102SL"
}

let address3 = {
    number: 3,
    streetName: "Field Lane",
    city: "York",
    postcode: "YO109KN"
}

console.log(address1,address2,address3);

//object constructor function

function Address(number, streetName, city, postcode) {
    this.number = number;
    this.streetName = streetName;
    this.city = city;
    this.postcode = postcode;
}

let address = new Address(4, "street", "york", "YO103PP");
console.log(address);

//making a class to represent objects 

class Adresses {
    number;
    streetName;
    city;
    postcode;

    constructor(number,streetName,city,postcode) {
        this.number = number;
        this.streetName = streetName;
        this.city = city;
        this.postcode = postcode;
    }
}

const newAddress = new Address(5,"sn", "York", "YO10xxx");
console.log(newAddress);