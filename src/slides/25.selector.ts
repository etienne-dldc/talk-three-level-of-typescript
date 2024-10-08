/**
 * Exemple 3: Typer un hook dans React
 */

import { useSelector } from "../implem/selector";

export function MyComponent() {
  const count = useSelector((state) => state.count);
  const firstPostId = useSelector((state) => state.posts[0].id);

  return null;
}
