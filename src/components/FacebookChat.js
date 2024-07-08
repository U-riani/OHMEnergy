import React, { useEffect } from 'react';

const FacebookChat = () => {
  useEffect(() => {
    // Initialize Facebook SDK
    window.fbAsyncInit = function() {
      window.FB.init({
        xfbml: true,
        version: 'v20.0' // Replace with the latest version if needed
      });
    };

    // Load Facebook SDK asynchronously if not already loaded
    if (!window.FB) {
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    } else {
      window.FB.XFBML.parse(); // Force re-parse XFBML elements if SDK is already loaded
    }
  }, []);

  return (
    <div id="fb-root">
      {/* Facebook Messenger Chat Plugin */}
      <div
        className="fb-customerchat"
        attribution="setup_tool"
        page_id="373013982561316" // Replace with your Facebook Page ID
        theme_color="#0084ff" // Replace with your desired theme color
        logged_in_greeting="Hi! How can we help you?" // Replace with your greeting message for logged-in users
        logged_out_greeting="Hi! How can we help you?" // Replace with your greeting message for logged-out users
      />
    </div>
  );
};

export default FacebookChat;
