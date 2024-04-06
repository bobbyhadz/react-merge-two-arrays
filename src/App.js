import './App.css';

import {useState} from 'react';

export default function App() {
  const initialState = [
    {id: 1, name: 'Alice', salary: 100},
    {id: 2, name: 'Bobby Hadz', salary: 200},
  ];

  const [employees, setEmployees] = useState(initialState);

  const handleClick = () => {
    const arr = [
      {id: 3, name: 'Carl', salary: 300},
      {id: 4, name: 'Demi', salary: 400},
    ];

    // 👇️ merge arrays 👇️
    setEmployees([...employees, ...arr]);
  };

  return (
    <div>
      <button onClick={handleClick}>Merge arrays</button>

      {employees.map(employee => {
        return (
          <div key={employee.id}>
            <h2>Name: {employee.name}</h2>
            <h2>Name: {employee.salary}</h2>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
