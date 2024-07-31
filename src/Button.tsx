import { useState } from 'react';
type Person = {
  id: number;
  name: string;
};

function Button() {
  const [persons, setPersons] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    try {
      setIsLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/users/');
      const data = await response.json();
      setPersons(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleClick() {
    fetchData().then(() => {
      const button = document.getElementById('button');
      if (button) {
        button.style.display = 'none';
      }
    });
  }
    return (<div>
      <button id="button" onClick={handleClick}>
        Fetch Data
      </button>
      {isLoading && <p>Loading...</p>}
      {!isLoading && persons.length > 0 && (
        <ul>
          {persons.map((person) => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ul>
      )}
    </div>
    );
}
export default Button;
