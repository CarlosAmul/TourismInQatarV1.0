import React, { useState, useEffect } from 'react';
// import * as React from 'react';
import useSettings from '../../hooks/useSettings';

let time = 0

const getTime = () => {
    const d = new Date();
    const hour = d.getHours();
    time = hour
}

const getCurrentTime = () => {
    return time
}

const setCurrentTime = (givenTime) => {
    time = givenTime
}

const changeTheme = () => {
    const event = { target: { value: '' } };
    if (time < 18) {
        event.target.value = 'light'
    }
    else {
        event.target.value = 'dark'
    }
    return event
}

export { getTime, getCurrentTime, changeTheme, setCurrentTime }