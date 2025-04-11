import React, { useState, useEffect } from "react";

const GuestBook = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [reviews, setReviews] = useState([]);

    // Načítání recenzí při načtení komponenty
    useEffect(() => {
      const fetchReviews = async () => {
        try {
          const response = await fetch('/src/api/getReviews.php');
          
          if (!response.ok) {
            throw new Error('Failed to fetch reviews');
          }
  
          const data = await response.json();
          console.log(data);
          if (data.success) {
            setReviews(data.reviews);
          } else {
            setError('Chyba při načítání recenzí');
          }
        } catch (error) {
          console.error('Chyba při načítání recenzí:', error);
          setError('Došlo k chybě při načítání recenzí.');
        }
      };
  
      fetchReviews();
    }, []);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const reviewData = { name, message };
  
      try {
        const response = await fetch('/src/api/addReviews.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(reviewData),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const result = await response.json();
  
        if (result.success) {
          setSuccess('Recenze byla úspěšně odeslána!');
          setName('');
          setMessage('');
          // Po úspěšném odeslání recenze znovu načíst recenze
          const updatedReviews = [...reviews, { name, message }];
          setReviews(updatedReviews);
        } else {
          setError('Došlo k problému při odesílání recenze.');
        }
      } catch (error) {
        console.error('Chyba při odesílání recenze:', error);
        setError('Došlo k chybě při odesílání recenze. Zkuste to prosím znovu.');
      }
    };
  
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif text-violet-900 mb-8">Kniha návštěv</h1>
        
        {error && <div className="text-red-500">{error}</div>}
        {success && <div className="text-green-500">{success}</div>}
        
        <div className="bg-violet-50 p-6 rounded-lg">
          <h2 className="text-2xl font-serif text-violet-900 mb-4">Napište nám svůj názor</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="name">Jméno</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="message">Zpráva</label>
              <textarea
                id="message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-violet-600 text-white px-6 py-2 rounded-lg hover:bg-violet-700 transition-colors"
            >
              Odeslat
            </button>
          </form>
        </div>
        
        <div className="space-y-6 mt-8">
          <h2 className="text-2xl font-serif text-violet-900 mb-4">Reference našich klientů</h2>
          {/* Zobrazíme recenze */}
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className="border-b pb-4 mb-4">
                <p className="font-semibold">{review.name}</p>
                <p>{review.message}</p>
              </div>
            ))
          ) : (
            <p>Žádné recenze zatím nejsou.</p>
          )}
        </div>
      </div>
    );
  };
  export default GuestBook;  