import { TransactionType } from '../Types/ExpenseTypes';

type Actions =
    | { type: "DELETE_TRANSACTION"; payload: number }
    | { type: "ADD_TRANSACTION"; payload: TransactionType };

export default (state: { Transaction: TransactionType[] }, action: Actions) => {
    switch (action.type) {
        case "DELETE_TRANSACTION":
            return {
                ...state,
                Transaction: state.Transaction.filter((transaction) => transaction.id !== action.payload),
            };

        case "ADD_TRANSACTION":
            return {
                ...state,
                Transaction: [action.payload, ...state.Transaction],
            }


        default:
            return state;
    }
}