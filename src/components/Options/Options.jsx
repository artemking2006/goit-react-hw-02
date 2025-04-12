import React from 'react';
import Button from '../Button/Button';

const Options = ({ estim, total }) => {
    return (
        <>
          <Button estim={() => estim('good')}>Good</Button>
          <Button estim={() => estim('neutral')}>Neutral</Button>
          <Button estim={() => estim('bad')}>Bad</Button>
          {total > 0 && <Button estim={() => estim('reset')}>Reset</Button>}
        </>
    );
};

export default Options;