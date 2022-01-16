import React from 'react';

type SynopsisProps = {
  description: string;
};

function Synopsis({ description }: SynopsisProps) {
  return (
    <div>
      <h4>Synopsis</h4>
      <p>{description}</p>
    </div>
  );
}

export default Synopsis;
