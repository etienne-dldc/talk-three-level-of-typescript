export interface ApiResponse<Res> {
  responseTime: number;
  apiVersion: string;
  data: Res;
}

export interface ApiRoutes {
  "/user": User;
  "/posts": Post[];
}

export function api<Path extends keyof ApiRoutes>(
  path: Path
): Promise<ApiResponse<ApiRoutes[Path]>> {
  return {} as any;
}

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
