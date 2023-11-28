import React from 'react'

export default function Rating({ children }) {
  const ratingValue = Math.round(Number(children));
  const clampedRating = Math.min(Math.max(ratingValue, 0), 5);

  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < clampedRating) {
      stars.push('★');
    } else {
      stars.push('☆');
    }
  }
  return (
    <div>{stars.join(' ')}</div>
  )
}
