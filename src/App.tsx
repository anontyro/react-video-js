import React from 'react';
import './App.css';
import VideoPlayer from './components/videoLibrary';

const App: React.FC = () => {
  return (
    <div className="App">
      <VideoPlayer />
    </div>
  );
};

export default App;
