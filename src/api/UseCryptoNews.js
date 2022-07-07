import {
    useState,
    useEffect,
    useReducer,
  } from 'react';
  import axios from 'axios';

  const dataFetchReducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_INIT':
        return {
            ...state,
            isLoading: true,
            isError: false
          };
      case 'FETCH_SUCCESS':
        return {
            ...state,
            isLoading: false,
            isError: false,
            data: action.payload,
          };
      case 'FETCH_FAILURE':
        return {
            ...state,
            isLoading: false,
            isError: true,
          };
      default:
        throw new Error();
    }
  };

  const useCryptoNews = (initialData) => {
    const [running, setRunning] = useState(false);
    console.log('useCryptoNews called');
    const [state, dispatch] = useReducer(dataFetchReducer, {
        isLoading: false,
        isError: false,
        data: initialData,
    });
  
    useEffect(() => {
      const fetchData = async () => {
        dispatch({ type: 'FETCH_INIT' });
  
        try {
            const options = {
                method: 'GET',
                url: 'https://crypto-news14.p.rapidapi.com/news/cointelegraph',
                headers: {
                  'X-RapidAPI-Key': 'ff3ba87f08msh430dbfa250da8c5p15d025jsnd9a0485e7ccb',
                  'X-RapidAPI-Host': 'crypto-news14.p.rapidapi.com'
                }
              };
            const result = await axios.request(options);
          
          dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
        } catch (error) {
            dispatch({ type: 'FETCH_FAILURE' });
        }
  
      };

      const timer = setInterval(() => {
        if (running) {
          fetchData()
        }else {
          clearInterval(timer)
        }
        
      }, 5000);

      return () => {
        clearInterval(timer);
      }
      
    }, [running]);
  
    return [state, setRunning];
};

export default useCryptoNews;