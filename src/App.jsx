import React from 'react';
import CardsList from './components/CardsList';

const App = () => {
  return (
    <div className='bg-gradient-to-r from-emerald-700 via-emerald-300 to-emerald-700 p-5 overflow-x-hidden'>
      <CardsList />
    </div>
  );
}

export default App;