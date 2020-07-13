import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg viewBox="0 0 8.82 15.82" {...props}>
      <path
        d="M7.41 0h-6A1.41 1.41 0 000 1.41v13a1.41 1.41 0 001.41 1.4h6a1.41 1.41 0 001.41-1.4v-13A1.41 1.41 0 007.41 0zM8 1.41v13a.6.6 0 01-.6.59h-6a.6.6 0 01-.6-.59v-13a.6.6 0 01.6-.6h.66l.19.93a.41.41 0 00.4.32h3.5a.41.41 0 00.4-.32l.19-.93h.67a.6.6 0 01.59.6zM2.91.81h3l-.08.44H3z"
        fill="#fff"
        data-name="Layer 2"
      />
    </svg>
  );
}

export default SvgComponent;
