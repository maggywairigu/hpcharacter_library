import React, { FC } from 'react';
import { mount } from 'cypress/react';
import useFetch from '@/app/api/useFetch'; 

describe('useFetch', () => {
  it('fetches character data without an ID', () => {
    const Component: FC = () => {
      const { data, isLoading, error } = useFetch();
     
      return <div>{isLoading ? 'Loading...' : error ? 'Error occurred' : JSON.stringify(data)}</div>;

    };

    mount(<Component />);
  });

  it('fetches character data with an ID', () => {
    const characterId = '9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8'; 
    const Component: FC = () => {
      const { data, isLoading, error } = useFetch(characterId);
      
      return <div>{isLoading ? 'Loading...' : error ? 'Error occurred' : JSON.stringify(data)}</div>;
    };

    mount(<Component />);
  });
});

export { mount };
