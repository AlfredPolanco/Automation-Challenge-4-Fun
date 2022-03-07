const { faker } = require('@faker-js/faker');

// Faker generates random user data such as names, emails and more...
const userData = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    yearOfBirth: String(Math.floor(Math.random() * (2004 - 1900 + 1)) + 1900),
    dayOfBirth: Math.floor(Math.random() * (30 - 1 + 1)) + 1,
    monthOfBirth: faker.date.month(),
    phoneNumber: faker.phone.phoneNumberFormat(),
    company: faker.company.companyName(),
    address: faker.address.streetAddress("###"),
    city: faker.address.cityName(),
    state:  faker.address.state(),
    postalCode: "33178",
    country: "United States",
    moreInfo: "Mailing address"
};

export const userInfo = {
    userData
};
