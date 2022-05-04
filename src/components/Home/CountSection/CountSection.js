import React from 'react';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import './CountSection.css'

const CountSection = () => {
    return (
        <div className='md:h-72 flex items-center count-bg mb-5'>
            <div className='md:grid grid-cols-4 gap-28 w-fit mx-auto'>
                <div className='text-center'>
                    <CountUp end={847} redraw={true}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span className='text-5xl font-bold' ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                    <h2 className='text-2xl uppercase mt-4'>Happy Clients</h2>
                </div>
                <div className='text-center'>
                    <CountUp end={2627} redraw={true}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span className='text-5xl font-bold' ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                    <h2 className='text-2xl uppercase mt-4'>VEHICLES IN STOCK</h2>
                </div>
                <div className='text-center'>
                    <CountUp end={125} redraw={true}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span className='text-5xl font-bold' ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                    <h2 className='text-2xl uppercase mt-4'>AWARDS</h2>
                </div>
                <div className='text-center'>
                    <CountUp end={256} redraw={true}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span className='text-5xl font-bold' ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                    <h2 className='text-2xl uppercase mt-4'>DEALER BRANCHES</h2>
                </div>
            </div>
        </div>
    );
};

export default CountSection;