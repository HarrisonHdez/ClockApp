import React, { useState, useEffect } from 'react';
import { Loader } from './Loader';
export const ClockApp = () => {


    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
  
    if (loading) {
        return <Loader />;
    }

    return (
        <div className="clock-container">
            <div className="clock">
                <h1 className="title">Hora actual</h1>
                <p className="hours">{time}</p>
            </div>
        </div>
    );
}

