import React from 'react'
import Moment from 'react-moment'
import 'moment-timezone'
import { TimeContainer, TimeStamp, Greeting } from './TimesStyles';


const Time = () => {

    let today = new Date();

    let greeting = () => {
        if (today.getHours() >= 5 && today.getHours() < 11) {
            return 'Good Morning, Daniel'
        } else if (today.getHours() >= 11 && today.getHours() < 17) {
            return 'Good Afternoon, Daniel'
        } else if (today.getHours() >= 17 && today.getHours() < 24) {
            return 'Good Evening, Daniel'
        } else {
            return 'What are you doing up at this hour?'
        }
    }

    return (
        <TimeContainer>
            <TimeStamp><Moment format='LT'></Moment></TimeStamp>
            <Greeting>{greeting()}</Greeting>
        </TimeContainer>
    )
}

export default Time