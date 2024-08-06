import { useState } from 'react';
import Card from '../Card/Card';
import './index.css'

type User = {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

const fetchData = async (): Promise<User[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
};

const Button = () => {
  const [buttonHidden, setButtonHidden] = useState(false);
  const [data, setData] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async () => {
    if (!buttonHidden) {
      setButtonHidden(true);
      const responseData = await fetchData();
      setIsLoading(true);
      setTimeout(() => {
      setData(responseData);
      setIsLoading(false);
      }, 2000); 
    }
  };
  
  return (
    <div>
      {!buttonHidden && (
        <button className="button" onClick={handleButtonClick}>Fetch</button>
      )}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data.map((item) => (
          <Card key={item.id} data={item} />
        ))
      )}
    </div>
  );
};

export default Button;