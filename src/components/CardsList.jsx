import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './Card';

const CardsList = () => {

  const [cards, setCards] = useState([]);

  const fetchData = async() => {
    try {
      const response = await axios.get('https://www.reddit.com/r/reactjs.json');
      const lists = response.data.data.children;
      console.log(lists);
      setCards(lists);
      localStorage.setItem('cards', JSON.stringify(lists));  
    } 
    catch (error) {
      console.error('Error fetching data',error); 
    }
  }

  useEffect(() => {
    if(localStorage.getItem('cards')){
      setCards(JSON.parse(localStorage.getItem('cards')));
    }
    fetchData();
  },[]);

  return (
    <div className='flex flex-col justify-center w-full min-h-[75vh]'>
        {
          cards.length === 0 ? (
            <div className='flex items-center justify-center space-x-2 animate-spin'>
              <div className='w-4 h-4 bg-emerald-700 rounded-full'></div>
              <div className='w-4 h-4 bg-emerald-500 rounded-full'></div>
            </div>
          ) 
          : 
          (cards && cards.map((card,index)=>(
            <Card key={index} card={card}/>
          )))
        }
    </div>
  )
}

export default CardsList