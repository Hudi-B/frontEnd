import React, { useState, useEffect } from 'react';
import OutlinedCard from '../components/OutlinedCard';

function Home() {
  const [lodgingData, setLodgingData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://nodejs.sulla.hu/data/')
      .then(response => response.json())
      .then(data => setLodgingData(data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      {
        isLoading ? (
          <div className="spinner-border"></div>
        ) : (
          <div>
            <h1>Lodging</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {lodgingData.map((item) => (
                <OutlinedCard key={item.id} data={item} />
              ))}
            </div>
          </div>
        )
      }
    </div>
  );
}

export default Home;
