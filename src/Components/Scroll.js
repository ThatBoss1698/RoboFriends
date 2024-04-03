import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '5px linear-gradient(to left, rgba(7, 27, 82, 1) 0%, rgba(0,128,128,1) 100%', height: '600px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;