import React, { useState } from 'react';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './pages/home.jsx';

function App() {
  const [bookData, setBookData] = useState([]);

  const handleSearchBook = (books) => {
    // Mettez en place la logique pour gérer les données de livre dans le composant parent
    console.log("Books:", books);
    setBookData(books); // Mettez à jour les données de livre dans le state
  };

  return (
    <>
      <Header onSearchBook={handleSearchBook} />
      <Home bookdata={bookData} />
      <Footer />
    </>
  );
}

export default App;