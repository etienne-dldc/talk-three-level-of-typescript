export interface ApiResponse<Res> {
  responseTime: number;
  apiVersion: string;
  data: Res;
}

export function createApi<Routes extends Record<string, any>>() {
  return function api<Path extends keyof Routes>(
    path: Path
  ): Promise<ApiResponse<Routes[Path]>> {
    return {} as any;
  };
}

export interface ApiRoutes {
  "/user": User;
  "/posts": Post[];
}

export const api = createApi<ApiRoutes>();

// types

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
