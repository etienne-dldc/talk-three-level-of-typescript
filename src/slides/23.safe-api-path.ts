import { createApi } from "../implem/safe-api-path";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

interface Post {
  id: string;
  title: string;
  body: string;
}

interface ApiRoutes {
  "/user": User;
  "/posts": Post[];
}

async function main() {
  const api = createApi<ApiRoutes>();

  const postsResponse = await api("/posts");

  console.log(`Api version id ${postsResponse.apiVersion}`);
  console.log(`User id is ${postsResponse.data.length}`);
}
