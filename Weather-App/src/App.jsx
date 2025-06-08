import { useState } from 'react';
import Navbar from './Components/Navbar';
import Main from './components/Main';  
import Footer from './components/Footer';

function App() {
  const [city, setCity] = useState(''); // <-- Add this

  return (
    <>
      <Navbar onCityChange={setCity} />
      <Main city={city} /> {/* Pass city as prop to Main */}
      <Footer />
    </>
  );
}

export default App;

