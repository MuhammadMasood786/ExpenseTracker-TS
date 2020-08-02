export type initialStateType = {
  Transaction: {
    id: number;
    text: string;
    amount: number;
  }[];
  DeleteTransaction: (id: number) => void;
  AddTransaction: (transaction: TransactionType) => void;
};

export type TransactionType = {
  id: number;
  text: string;
  amount: number;
};




