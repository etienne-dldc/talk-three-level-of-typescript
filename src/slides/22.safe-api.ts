import { api } from "../implem/safe-api";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

async function main() {
  const userResponse = await api<User>("users/1");

  console.log(`Api version id ${userResponse.apiVersion}`);
  console.log(`User id is ${userResponse.data.id}`);
}
