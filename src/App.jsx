// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CollectionLanding from './components/CollectionLanding';
import EventLanding from './components/EventLanding'; // Ensure you have an EventLanding component

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CollectionLanding />} />
      <Route path="/event-landing" element={<EventLanding />} />
    </Routes>
  );
};

export default App;
