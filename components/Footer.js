import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faTimes } from '@fortawesome/free-solid-svg-icons';
import React, { useRef, useState } from 'react';

export default function Footer () {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('IDLE');

  const subscribe = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = '';
    
  };

  const [isFooterOpen, setFooterOpen] = useState(true);

  const handleClose = () => {
    setFooterOpen(false);
  };

  return (
    <>
      {isFooterOpen && (
        <footer className="bg-gray-800 py-10 fixed bottom-0 w-full">
          <div className="flex justify-center px-4 mx-4">
            <button
              className="mr-4 text-white hover:text-gray-200"
              onClick={handleClose}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <p className="text-gray-400 text-sm mt-2 mr-2">
              Subscribe to our newsletter for updates:
            </p>
            <form onSubmit={subscribe}>
              <div className="flex items-center">
                <input
                  type="email"
                  ref={inputEl}
                  className="bg-white rounded-l-full py-2 px-4 w-full leading-tight focus:outline-none"
                  placeholder="Your email address"
                  required
                />
                <button
                  className="bg-red-500 hover:bg-red-600 rounded-r-full px-6 py-2 text-white"
                  type="submit"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </button>
              </div>
            </form>
            
          </div>
        </footer>
      )}
    </>
  );
};
