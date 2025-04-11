import { useEffect } from 'react';

const Redirect = ({ to }) => {
  useEffect(() => {
    window.location.href = to;
  }, [to]);

  return <p>Přesměrování...</p>;
};

export default Redirect;
