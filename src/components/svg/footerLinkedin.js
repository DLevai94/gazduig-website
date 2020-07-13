import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg viewBox="0 0 12.48 12.49" {...props}>
      <defs>
        <style>{'.cls-1{fill:#fff}'}</style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_2-2" data-name="Layer 2">
          <path
            className="cls-1"
            d="M12.48 12.47V7.91c0-2.24-.48-4-3.1-4a2.73 2.73 0 00-2.45 1.38V4.15H4.41v8.34H7V8.36c0-1.09.2-2.14 1.55-2.14S9.9 7.46 9.9 8.43v4zM.21 4.15H2.8v8.34H.21zM1.5 0A1.51 1.51 0 103 1.5 1.5 1.5 0 001.5 0z"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgComponent;
