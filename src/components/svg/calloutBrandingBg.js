import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg viewBox="0 0 59.17 100" {...props}>
      <path
        d="M0 10v80a10 10 0 0010 10h17.75C45.18 90.38 66 80 57 50.5S44.31 9.29 25.83 0H10A10 10 0 000 10z"
        fill="#fdb515"
        data-name="Layer 2"
      />
    </svg>
  );
}

export default SvgComponent;
