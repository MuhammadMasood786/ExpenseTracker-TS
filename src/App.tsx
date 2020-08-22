import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Balance from './Component/Balance';
import { ContextProvider } from './Services/ContextApi';
import TransactionList from './Component/TransactionList';
import AddTransaction from './Component/AddTransaction';

function App() {

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 col-12 mx-auto">
          <div className="row mt-3">
            <div className="col-md-4 col-12 mx-auto bordering">
              <ContextProvider>
                <Balance />
                <TransactionList/>
                <AddTransaction/>
              </ContextProvider>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;
