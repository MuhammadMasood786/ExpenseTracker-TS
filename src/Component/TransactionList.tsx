import React, { useContext } from 'react';
import '../App.css'
import { Contextapi } from '../Services/ContextApi'
import { TransactionType } from '../Types/ExpenseTypes';

const TransactionList: React.FC = () => {

    const transactionList = useContext(Contextapi);
    const  { DeleteTransaction } = useContext(Contextapi); 

    return (
        <div className="">
            <div className="row">
                <h4 className="headingStyle text-secondary ml-2">History</h4>
            </div>
            <div>
                {transactionList.Transaction.map((transList: TransactionType, ind: number) => {
                    return (
                        <div className="row" key={ind}>
                            <h6 className="translist col-md-6">{transList.text}</h6> 
                            <h6 className="translist col-md-4">{transList.amount}$</h6>
                            <h6 className="col-md-2"> <i className="fa fa-trash" aria-hidden="true" onClick={()=> DeleteTransaction(transList.id)}></i></h6>
                        </div>
                    );
                })}
            </div>
            <hr className="text-primary" />
        </div>
    )
}

export default TransactionList;


