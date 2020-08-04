import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Balance from './Component/Balance';
import { ContextProvider } from './Services/ContextApi';
import TransactionList from './Component/TransactionList';
import AddTransaction from './Component/AddTransaction';

function App() {

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("serviceWorker.ts") // service worker file location
      .then(function() {
        console.log("Service Worker Registered Successfully");
      })
      .catch(function(error) {
        console.error("Something goes wrong while registering service worker");
        console.log(error);
      });
  } else {
    console.log("Service Worker is not available");
  }

  return (
    <div className="">
      <div className="row">
        <div className="col-md-10 col-sm-12 mx-auto">
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
