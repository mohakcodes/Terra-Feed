import React from 'react';

const Card = ({ card }) => {
  const decodeHTML = (html) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  const cleanedHTML = decodeHTML(card.data.selftext_html);

  return (
    <div className='flex flex-col mb-3 bg-gradient-to-r from-emerald-600 via-emerald-200 to-emerald-600 p-3 rounded-xl max-w-md sm:max-w-lg lg:max-w-2xl w-full mx-auto'>
     
      <p className='text-lg sm:text-xl lg:text-2xl font-bold text-white bg-emerald-800 px-3 sm:px-4 py-2 rounded-t-xl'>
        {card.data.title}
      </p>

      <div className='bg-emerald-100 p-3 sm:p-4 max-h-60 overflow-y-auto'>
        <p className='text-base sm:text-lg font-bold italic underline mb-2'>SelfText HTML</p>
        <div className='text-sm sm:text-base max-w-full' dangerouslySetInnerHTML={{ __html: cleanedHTML }} />
      </div>

      <div className='bg-emerald-300 p-2 sm:p-3 rounded-b-xl'>
        <p className='text-xs sm:text-sm text-gray-700 mb-1'>
          <strong>Data URL:</strong> 
          <a href={card.data.url} target='_blank' className='text-blue-600 font-medium block truncate max-w-[90%] sm:max-w-sm hover:underline'>
            {card.data.url}
          </a>
        </p>
        <p className='text-xs sm:text-sm text-gray-700'>
          <strong>Data Score:</strong> {card.data.score}
        </p>
      </div>
    </div>
  );
};

export default Card;