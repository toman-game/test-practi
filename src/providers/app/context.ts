import { createContext } from 'react';
import {carsTS} from "../../types";

interface contextTS {
   cars: carsTS,
   setCars: (value: carsTS) => void,
   userSearch: string,
   setUserSearch: (value: string) => void
}

// @ts-ignore
const ChatContext = createContext<contextTS>();
export default ChatContext;
