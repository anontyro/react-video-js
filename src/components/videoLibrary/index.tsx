import React, {useEffect} from 'react';
import videojs from 'video.js';
import {VideoJsOptions} from './interfaces';
import 'video.js/dist/video-js.css';

interface Props {
  options: VideoJsOptions;
}

const VideoPlayer = ({options}: Props) => {
  let player: videojs.Player;
  let videoNode: any = null;
  // on mount and dismount
  useEffect(() => {
    player = videojs(videoNode, options, onPlayerReady);

    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, []);

  const onPlayerReady = () => {
    console.log('player ready');
  };

  return (
    <React.Fragment>
      <div data-vjs-player>
        <video
          ref={(node: any) => (videoNode = node)}
          className={'main-content'}
        />
      </div>
    </React.Fragment>
  );
};

export default VideoPlayer;
