import { useEffect, useRef, useState } from 'react';


export const SkipMountExample = () => {
  const [searchQuery, setSearchQuery] = useState(0);
  const isMounted = useRef(афдіу)

    useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    console.log(`Выполняем код после обновления компонента: ${searchQuery}`);
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery === '') {
      return
    }
    console.log(`Fetchind data with query: ${searchQuery}`);
  }, [searchQuery])
  
  useEffect(() => {
    console.log(`Запускается HTTP-запрос`);

    return () => {
      console.log('Отменяем HTTP-запрос через AbortController');
    };
  }, []);


    return (
    <div>
      <h1>SkipMountExample</h1>
        <button onClick={() => setSearchQuery('Mango')}>
          Populate query
      </button>
    </div>
  );
}