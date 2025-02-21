const { faker } = require('@faker-js/faker');

const userData = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 10, memorable: true }),
};

module.exports = userData;
