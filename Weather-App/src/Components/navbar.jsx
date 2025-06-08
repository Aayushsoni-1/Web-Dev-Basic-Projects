import React, { useState } from 'react';

const Navbar = ({ onCityChange }) => {
  const [input, setInput] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      onCityChange(input);
      setInput('');
    }
  };

  return (
    <div>
      <nav className='bg-blue-400 h-15 fixed top-0 left-0 w-full z-50'>
        <ul className='flex items-center'>
          <li className='text-white p-4 text-3xl flex gap-2 font-poppins justify-start'>
            Atmos
            <img src="/cloudy.png" className='h-9 -mt-1 flex items-center justify-center' alt="" />
          </li>
          <li>
            <input
              type="text"
              placeholder='Search for your city'
              className='ml-60 border-2 text-center rounded-lg w-80 border-gray-500 mr-60'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
