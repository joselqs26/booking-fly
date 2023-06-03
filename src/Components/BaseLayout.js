import React from 'react';
import { useMachine } from '@xstate/react';
import { bookingMachine } from '../Machines/bookingMachine'

const BaseLayout = () => {
    const [state, send] = useMachine(bookingMachine);

    console.log('Maquina', state);

    bookingMachine.transition(state, { type: 'START' })

    console.log('Maquina', state);

    return (
        <div> BaseLayout </div>
    )
}

export { BaseLayout };