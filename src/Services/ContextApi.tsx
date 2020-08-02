import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { initialStateType, TransactionType } from '../Types/ExpenseTypes';


const initialState: initialStateType = {
    Transaction:[ ],
    DeleteTransaction: () => { },
    AddTransaction: () => { }
};

export const Contextapi = createContext(initialState);

export const ContextProvider: React.FC = ({ children }) => {

    
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    //Delete Function 
    function DeleteTransaction(id: number) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload:id
        });
    }
    //Add Function
    function AddTransaction(transaction: TransactionType) {
        dispatch({
            type:"ADD_TRANSACTION",
            payload:transaction
        });
    }

    return (
        <div>
            <Contextapi.Provider
                value={{
                    Transaction: state.Transaction,
                    DeleteTransaction,
                    AddTransaction
                }}>
                {children}
            </Contextapi.Provider>
        </div>
    )
}

