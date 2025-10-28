import React from 'react';
import TechStack from './components/TechStack';
import Description from './components/Description';
import KeyHighlights from './components/KeyHighlights';

const App: React.FC = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Cloud-Native Billing Microservices (AWS)</h1>
      <TechStack />
      <Description />
      <KeyHighlights />
    </div>
  );
};

export default App;