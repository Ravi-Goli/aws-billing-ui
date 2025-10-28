import React from 'react';

const KeyHighlights: React.FC = () => (
  <div>
    <h2>Key Highlights</h2>
    <ul>
      <li>API Gateway → Lambda → DynamoDB workflow</li>
      <li>Used SNS + SQS for asynchronous event processing</li>
      <li>Containerized with Docker, deployable via GitHub Actions</li>
    </ul>
  </div>
);

export default KeyHighlights;