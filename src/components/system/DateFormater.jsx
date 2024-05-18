import React from 'react';

export default function DateFormatter({ serverDate }) {
  // Convert the server date string to a JavaScript Date object
  const dateObject = new Date(serverDate);

  // Options for formatting the date
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  // Format the date using the options
  const formattedDate = dateObject.toLocaleString('en-US', options);

  return (
    <>
      {formattedDate}
    </>
  );
}