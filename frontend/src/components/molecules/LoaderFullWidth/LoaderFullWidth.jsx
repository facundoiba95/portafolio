import React, { useEffect } from 'react';
import { LoaderFullWidthContainerStyles, LoaderSpinnerStyles } from './LoaderFullWidthStyles';

const LoaderFullWidth = ({ isActive }) => {
    useEffect(() => {
        if (isActive) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
        return () => {
            document.body.style.overflow = "visible";
        };
    }, [isActive]);

    return (
        <LoaderFullWidthContainerStyles isActive={isActive}>
            <LoaderSpinnerStyles>
                <div className='loader'></div>
            </LoaderSpinnerStyles>
        </LoaderFullWidthContainerStyles>
    );
};

export default LoaderFullWidth;