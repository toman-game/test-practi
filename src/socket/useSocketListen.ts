import { useEffect, useContext } from 'react';
import socket from "./index";

import { AppContext } from '../providers/app';
import {carsTS} from "../types";

const useSocketListen = () => {
   const {setCars } = useContext(AppContext);

    useEffect(() => {
        socket.on('cars', (newCars: carsTS) => {
            // @ts-ignore
            setCars((prvCars: carsTS) => {
                return {
                    ...prvCars,
                    ...newCars
                }
            });
        });
    }, []);

};

export default useSocketListen;
