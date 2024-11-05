import React from 'react';
import CardsList from './components/CardsList';

const App = () => {
  return (
    <div className='bg-gradient-to-r from-emerald-700 via-emerald-300 to-emerald-700 p-5 overflow-x-hidden'>
      <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-950 text-center mb-2'>
        TerraFeed: <span className='italic'>Tech Articles & Community QnA</span>
      </h1>
      <p className='text-center mb-5 text-sm sm:text-lg lg:text-xl text-emerald-950 font-semibold max-w-2xl mx-auto'>
        Explore the latest tech articles, QnA discussions, and solutions from the community. Discover insights, answers, and trends across various technologies.
      </p>
      <CardsList />
    </div>
  );
}

export default App;