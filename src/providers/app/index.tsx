import React, { useState} from 'react';
import AppContext from './context';
import {carsTS} from "../../types";

interface propsTS {
   children: React.ReactNode;
}


const AppProvider = (props: propsTS) => {
   const { children } = props;
   const [userSearch, setUserSearch] = useState('');
   const [cars, setCars] = useState<carsTS>({});

   return (
      <AppContext.Provider
         value={{
             cars,
             setCars,
             userSearch,
             setUserSearch
         }}
      >
         {children}
      </AppContext.Provider>
   );
};

export { AppProvider, AppContext };
