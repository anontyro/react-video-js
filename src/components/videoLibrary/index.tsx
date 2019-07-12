import React, {useEffect} from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

declare global {
  interface Window {
    player: videojs.Player;
  }
}

interface Props {
  options: videojs.PlayerOptions;
}

let player: videojs.Player;
let videoNode: any = null;

export const getPlayer = () => {
  if (!player) {
    return null;
  }
  return player;
};

const VideoPlayer = ({options}: Props) => {
  // on mount and dismount
  useEffect(() => {
    player = videojs(
      videoNode,
      {autoplay: options.autoplay, controls: options.controls},
      onPlayerReady
    );
    window.player = player;
    const sources: any = options ? options.sources : null;
    setSource(sources);
    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, []);

  const setSource = (sources: any[]) => {
    player.src(sources);
  };

  const onPlayerReady = () => {
    console.log('player ready');
  };

  const createVideoRef = (node: HTMLVideoElement) => {
    videoNode = node;
    console.log(node);
  };

  const createEventListener = (eventName: string, handler: () => void) =>
    player.on(eventName, handler);

  return (
    <React.Fragment>
      <div data-vjs-player>
        <video ref={createVideoRef} className={'main-content'} />
      </div>
    </React.Fragment>
  );
};

export default VideoPlayer;
