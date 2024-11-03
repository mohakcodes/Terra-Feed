import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './Card';

const CardsList = () => {

  const [cards, setCards] = useState();

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
    <div className='flex flex-col justify-center'>
        {cards && cards.map((card,index)=>(
            <Card key={index} card={card}/>
        ))}
    </div>
  )
}

export default CardsList