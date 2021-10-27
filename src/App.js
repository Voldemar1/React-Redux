import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCustomers } from "./asyncActions/customers";
import {
  addCustomerAction,
  deleteCustomerAction,
} from "./store/customersReducer";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cashReducer.cash);
  const customers = useSelector((state) => state.customersReducer.customers);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(deleteCustomerAction(customer.id));
  };

  return (
    <div className="App">
      <span>текущая сумма{cash}</span>
      <button onClick={() => addCash(Number(prompt(cash)))}>
        пополнить счёт
      </button>
      <button onClick={() => getCash(Number(prompt(cash)))}>
        снять деньги
      </button>
      <button onClick={() => addCustomer(prompt())}>
        Добавить пользователя
      </button>
      <button onClick={() => dispatch(fetchCustomers())}>
        Добавить пользователей
      </button>
      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => {
            return (
              <div key={customer.id} onClick={() => removeCustomer(customer)}>
                <span> {customer.name} </span>
              </div>
            );
          })}
        </div>
      ) : (
        <p>Клиенты отсутствуют</p>
      )}
    </div>
  );
}

export default App;
