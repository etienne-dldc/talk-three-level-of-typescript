export type TMatcher<T, Res> = (value: T) => Res | false;

export type TMatcherResult<T, M extends Record<string, TMatcher<T, any>>> = {
  [K in keyof M]: { key: K; value: Exclude<ReturnType<M[K]>, false> };
}[keyof M];

export function matcher<T, M extends Record<string, TMatcher<T, any>>>(
  value: T,
  matchers: M
): TMatcherResult<T, M> | false {
  return {} as any;
}
