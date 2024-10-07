export interface ApiResponse<Res> {
  responseTime: number;
  apiVersion: string;
  data: Res;
}

export function api<Res>(path: string): Promise<ApiResponse<Res>> {
  return {} as any;
}
