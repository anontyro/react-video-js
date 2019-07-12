import React from 'react';
import videojs from 'video.js';
import './App.css';
import VideoPlayer, {getPlayer} from './components/videoLibrary';

const App: React.FC = () => {
  const opts: videojs.PlayerOptions = {
    autoplay: true,
    controls: true,
    sources: [
      {
        src: 'http://vjs.zencdn.net/v/oceans.mp4',
        type: 'video/mp4',
      },
      {
        src:
          'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
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
