import React from 'react';
import EnergyProvider from './EnergyProvider';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Energy = (props) => {
  const { score } = props;

  // function for calculating the color

  return (
    <EnergyProvider valueStart={0} valueEnd={score}>
      {(value) => (
        <CircularProgressbar
          value={value}
          text={`${value}`}
          circleRatio={0.7} /* Make the circle only 0.7 of the full diameter */
          styles={{
            trail: {
              strokeLinecap: 'butt',
              transform: 'rotate(-126deg)',
              transformOrigin: 'center center',
            },
            path: {
              strokeLinecap: 'butt',
              transform: 'rotate(-126deg)',
              transformOrigin: 'center center',
              // stroke: `rgba(120, 233, 145, ${percent / 100})`,
              stroke: `${props.color}`
            },
            text: {
              fill: `${props.color}`,
            },
          }}
          strokeWidth={10}
        />
      )}
    </EnergyProvider>
  );
};

export default Energy;