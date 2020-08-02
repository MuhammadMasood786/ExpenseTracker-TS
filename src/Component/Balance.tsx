import React, { useContext } from 'react';
import '../App.css'
import { Contextapi } from '../Services/ContextApi'

const Balance: React.FC = () => {

    const { Transaction } = useContext(Contextapi);

    const amount = Transaction.map((trans) => trans.amount);

    const income: number = parseInt(amount.filter((a) => a > 0).reduce((v1, v2) => (v1 += v2), 0).toFixed(2));
    const expense: number = parseInt(amount.filter((a) => a < 0).reduce((v1, v2) => (v1 += v2), 0).toFixed(2));

    return (
        <div className="">
            <div className="row">
                <h1 className="headingStyle text-dark mx-auto">Expense Tracker</h1>
            </div>
            <div className="row">
                <h3 className="headingStyle ml-2 text-secondary">Balance</h3>
            </div>
            <div className="row justify-content-center">
    <h1 className="headingStyle ml-2 text-warning">${income + expense}</h1>
            </div>
            <div className="row">
                <h4 className="headingStyle text-secondary ml-2"> Account</h4>
            </div>
            <div className="row">
                <h4 className="headingStyle text-success col-md-4">Income</h4>
                <h3 className="col-md-4"> </h3>
                <h4 className="headingStyle text-success col-md-4">{income}$</h4>
            </div>
            <div className="row">
                <h4 className="headingStyle text-danger col-md-4">Expense</h4>
                <h3 className="col-md-4"> </h3>
                <h4 className="headingStyle text-danger col-md-4">{expense}$</h4>
            </div>
            <hr className="text-primary" />
        </div>
    );
}

export default Balance;