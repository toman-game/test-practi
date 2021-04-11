import { createContext } from 'react';
import {carsTS, namesSetTS} from "../../types";

interface contextTS {
   userSearch: string;
   setUserSearch: (value: string) => void;

   cars: carsTS;
   setCars: (value: carsTS) => void;

   visibleCarsNames: namesSetTS;

   selectedCar: string;
   setSelectedCar: (value: string) => void;
}

// @ts-ignore
const ChatContext = createContext<contextTS>();
export default ChatContext;
