export type listControlProps = {
  addItem: (item: string) => void;
  clearItems: () => void;
};

export type ItemsListScreenType = {
  itemsList: string[];
  setItemsList: React.Dispatch<React.SetStateAction<string[]>>;
};
