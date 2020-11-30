import React from 'react';

export const onRenderBody = ({ setBodyAttributes, setHeadComponents }) => {
  setHeadComponents([
    <script
      key="ac_code"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `(function(e,t,o,n,p,r,i){e.visitorGlobalObjectAlias=n;e[e.visitorGlobalObjectAlias]=e[e.visitorGlobalObjectAlias]||function(){(e[e.visitorGlobalObjectAlias].q=e[e.visitorGlobalObjectAlias].q||[]).push(arguments)};e[e.visitorGlobalObjectAlias].l=(new Date).getTime();r=t.createElement("script");r.src=o;r.async=true;i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)})(window,document,"https://diffuser-cdn.app-us1.com/diffuser/diffuser.js","vgo");vgo('setAccount', '90522104');vgo('setTrackByDefault', true);vgo('process');`,
      }}
    />,
  ]);
  setBodyAttributes({
    className: 'bg-white font-body text-gray-900 antialiased',
  });
};
