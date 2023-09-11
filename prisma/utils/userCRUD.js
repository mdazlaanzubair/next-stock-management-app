import { prismaClient } from "../prismaClient";
import { faker } from "@faker-js/faker";
import cleanDatabase from "./cleanDB";

export const createUser = async () => {
  // cleaning database
  const isDBCleaned = await cleanDatabase();

  if (isDBCleaned) {
    // creating new user
    const newUser = await prismaClient.user.create({
      data: {
        email: faker.internet.email(),
        password: faker.internet.password({ length: 20, memorable: true }),
        isBlocked: false,
        isDeleted: false,
      },
    });

    // creating user's profile
    const userProfile = await prismaClient.profile.create({
      data: {
        name: faker.person.fullName({
          firstName: faker.person.firstName({ sex: faker.person.gender() }),
          lastName: faker.person.lastName({ sex: faker.person.gender() }),
          sex: faker.person.gender(),
        }),
        username: faker.internet.userName({
          firstName: faker.person.firstName({ sex: faker.person.gender() }),
          lastName: faker.person.lastName({ sex: faker.person.gender() }),
        }),
        img: faker.internet.avatar(),
        contact: faker.phone.number("+48 91 ### ## ##"),
        state: faker.location.state(),
        country: faker.location.country(),
        company: faker.company.name(),
        business: faker.lorem.paragraph(3),
        address: faker.location.streetAddress(true),
        userId: newUser.id,
      },
    });

    // checking if the "newUser.id" is unique or otherwise
    return prismaClient.user.findUnique({
      where: {
        id: newUser.id,
      },
    });
  }
};
