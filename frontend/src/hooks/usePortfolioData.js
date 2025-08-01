import { useEffect, useState } from 'react';

export default function usePortfolioData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then(setData);
  }, []);

  return data;
}
