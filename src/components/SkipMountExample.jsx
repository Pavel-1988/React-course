import { useEffect, useRef, useState } from 'react';


export const SkipMountExample = () => {
  const [searchQuery, setSearchQuery] = useState(0);



  useEffect(() => {
    if (searchQuery === '') {
      return
    }

    
    console.log(`Fetchind data with query: ${searchQuery}`);
},[searchQuery])

    return (
    <div>
      <h1>SkipMountExample</h1>
        <button onClick={() => setSearchQuery('Mango')}>
          Populate query
      </button>
    </div>
  );
}