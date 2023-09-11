import prismaClient from "../prismaClient";

const cleanDatabase = async () => {
  try {
    await prismaClient.user.deleteMany();
    await prismaClient.profile.deleteMany();
    return true;
  } catch (error) {
    console.log("Error while cleaning databases.");
    console.log("Error:", error);
  }
};
export default cleanDatabase;
