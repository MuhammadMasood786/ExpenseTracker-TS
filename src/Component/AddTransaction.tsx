import React, { useState, useContext } from 'react'
import { Contextapi } from '../Services/ContextApi'

const AddTransaction: React.FC = () => {
    
    const { AddTransaction } = useContext(Contextapi)
    const [text, setText] = useState<string>("")
    const [amount, setAmount] = useState<number>(0)

    const handleChange = (ev : {preventDefault: ()=> void }) => {
        ev.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 1000),
            text,
            amount:amount
        }
        AddTransaction(newTransaction)
    }

    return (
        <div>
            <div className="row">
                <h4 className="headingStyle text-secondary mx-auto">Add Transaction</h4>
            </div>
            <form onSubmit={handleChange}>
                <div className="form-group">
                    <input type="text" className="form-control"
                        value={text}
                        onChange={(ev) => setText(ev.target.value)}
                        placeholder="Enter Transaction" required
                    />
                    <small className="form-text text-muted">Transaction</small>
                </div>
                <div className="form-group">
                    <input type="number" className="form-control"
                        value={amount}
                        onChange={(ev) => setAmount(Number(ev.target.value))}
                        placeholder="Enter Amount" required
                    />
                    <small className="form-text text-muted">Amount</small>
                </div>
                <button type="submit" className="btn btn-outline-secondary">Submit</button>
            </form>
        </div>
    );
}

export default AddTransaction;