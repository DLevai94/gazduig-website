import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg viewBox="0 0 13.62 13.62" {...props}>
      <path
        d="M13.5.12a.38.38 0 00-.43-.12L.25 5.16a.4.4 0 000 .73l5.03 2.45 2.45 5.05a.41.41 0 00.36.23.4.4 0 00.35-.25L13.59.55a.38.38 0 00-.09-.43zM1.39 5.56l10.17-4.07L5.5 7.56zm6.67 6.67l-2-4.11 6.07-6.06z"
        fill="#1F1F1F"
        data-name="Layer 2"
      />
    </svg>
  );
}

export default SvgComponent;
