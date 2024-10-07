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
