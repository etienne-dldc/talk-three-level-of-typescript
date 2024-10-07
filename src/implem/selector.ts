export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface State {
  count: number;
  name: string;
  posts: Post[];
}

export function useSelector<T>(selector: (state: State) => T): T {
  return selector({ count: 0, name: "", posts: [] });
}
