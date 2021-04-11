import React, {useEffect, useState} from 'react';
import forEach from 'lodash/forEach';
import AppContext from './context';
import {carsTS, namesSetTS} from "../../types";

interface propsTS {
   children: React.ReactNode;
}

const AppProvider = (props: propsTS) => {
   const { children } = props;
   const [userSearch, setUserSearch] = useState('');
   const [cars, setCars] = useState<carsTS>({});
   const [visibleCarsNames, setVisibleCarsNames] = useState<namesSetTS>({});
   const [selectedCar, setSelectedCar] = useState('');

   useEffect(() => { // update visible cars
       const newVisibleCars: namesSetTS = {};
       forEach(cars, (item, name) => {
           const isVisible = name.toLowerCase().includes(userSearch);
           if (isVisible) {
               newVisibleCars[name] = true;
           }
       })
       setVisibleCarsNames(newVisibleCars);
   }, [userSearch, cars])

   return (
      <AppContext.Provider
         value={{
             userSearch,
             setUserSearch,

             cars,
             setCars,

             visibleCarsNames,

             selectedCar,
             setSelectedCar
         }}
      >
         {children}
      </AppContext.Provider>
   );
};

export { AppProvider, AppContext };
