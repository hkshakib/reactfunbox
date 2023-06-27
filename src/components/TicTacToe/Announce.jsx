import React from 'react';

const Announce = ({ winner }) => (
  <div className="mt-4">
    {winner ? (
      <h2 className="text-2xl font-bold text-green-500">{`Player ${winner} wins!`}</h2>
    ) : (
      <h2 className="text-2xl font-bold text-yellow-500">It's a draw!</h2>
    )}
    
  </div>
);

export default Announce;
