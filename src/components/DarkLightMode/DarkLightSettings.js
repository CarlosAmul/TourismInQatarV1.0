import React, { useState, useEffect } from 'react';
// import * as React from 'react';
import useSettings from '../../hooks/useSettings';
import {getTime, getCurrentTime, changeTheme } from './DarkLightSettingsFunctions'

export default function DarkLightSetting() {
    const { onChangeMode } = useSettings();
    const time = getCurrentTime()

    useEffect(() => {
        changingMode()
    }, [time]) // eslint-disable-line react-hooks/exhaustive-deps

    const changingMode = () => {
        const event = changeTheme()
        onChangeMode(event)
    }

    setInterval(getTime, 3600000)

    return (
        <>
        </>
    );
}
