import { useState } from 'react';
import List from './List.jsx';
import data from './data.js';
const App = () => {
  const [persons, setPersons] = useState(data);
  console.log(persons);
  return (
    <main>
      <section className="container">
        <h3>{persons.length} Birthdays Today</h3>
        <List persons={persons} />
        <button className="btn btn-block" onClick={() => setPersons([])}>
          Clear All
        </button>
      </section>
    </main>
  );
};
export default App;
