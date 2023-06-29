import React from 'react';
import './HomePage.css';
import  { useState, useEffect } from 'react';

const allNames = [

  'Mahadeva',
  'Shambhu',
  'Shankara',
  'Rudra',
  'Nataraja',
  'Neelakantha',
  'Trilochana',
  'Bhava',
  'Hara',
  'Maheshvara',
  'Pinakapani',
  'Ardhanarishvara',
  'Gangadhara',
  'Pashupati',
  'Tripurari',
  'Kailashadhipati',
  'Mrityunjaya',
  'Mahayogi',
  'Chandrasekhara',
  'Vishwanatha',
  'Bholenath',
  'Kalantaka',
  'Omkara',
  'Parameshvara',
  'Dakshinamurti',
  'Ashutosh',
  'Jagadishvara',
  'Krittivasan',
  'Vyomakesha',
  'Sureshvara',
  'Gauripati',
  'Girisuta',
  'Kapardin',
  'Kedarnath',
  'Pinnakin',
  'Shitikantha',
  'Someshvara',
  'Trinetra',
  'Umapati',
  'Vibhuti',
  'Vishveshvara',
  'Jatadhara',
  'Mahakala',
  'Mahesh',
  'Nilalohita',
  'Pashupatinath',
  'Rudrapriya',
  'Uma Maheshwara',
  'Vaidyanatha',
  'Yogeshwara'



function HomePage({ handleLogout }) {
  const [names, setNames] = useState([]);
  const [displayedNames, setDisplayedNames] = useState(5); 
  const [isLoading, setIsLoading] = useState(true);
  const [isScrollLoading, setIsScrollLoading] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= scrollHeight - 200 && !isLoading) {
      setIsScrollLoading(true);
      setDisplayedNames((prevDisplayedNames) => prevDisplayedNames + 5);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      const partialNames = allNames.slice(0, displayedNames);
      setNames(partialNames);
      setIsLoading(false);
    }, 3000);
  }, [displayedNames]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]); 

  useEffect(() => {
    if (!isLoading) {
      setIsScrollLoading(false);
    }
  }, [isLoading]);

  return (
    <div>
      <h1>Home Page</h1>

      <div className="name-list">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {names.map((name, index) => (
              <div key={index} className="name-card">
                <div className="profile-image"></div>
                <p>{name}</p>
              </div>
            ))}
            {isScrollLoading && <p>Loading more...</p>}
          </>
        )}

        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default HomePage;
