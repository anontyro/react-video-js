import React from 'react';
import './App.css';
import VideoPlayer from './components/videoLibrary';
import {VideoJsOptions} from './components/videoLibrary/interfaces';

const App: React.FC = () => {
  const opts: VideoJsOptions = {
    autoplay: true,
    controls: true,
    sources: [
      {
        src: 'http://vjs.zencdn.net/v/oceans.mp4',
        type: 'video/mp4',
      },
    ],
  };

  return (
    <div className="App">
      <VideoPlayer options={opts} />
    </div>
  );
};

export default App;
