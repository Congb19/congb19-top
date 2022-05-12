export interface TreeItem<T> {
  key: string;
  children?: T[];
}

export const getTreeItem = <T extends TreeItem<T>>(
  tree: T[],
  key: string
): T | null => {
  let res: T | null = null;
  if (tree)
    for (let i = 0; i < tree.length; i++) {
      if (tree[i].key! == key) {
        res = tree[i];
        return res;
      }
      if (tree[i].children) {
        if (tree[i].children!.length > 0)
          res = getTreeItem(tree[i].children!, key);
        if (res) return res;
      }
    }
  return res;
};