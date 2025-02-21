const { faker } = require('@faker-js/faker');

function generateUserData(){
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password({ length: 10, memorable: true })
    }
}

module.exports = {generateUserData};
