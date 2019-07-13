import React, {useEffect} from 'react';
import {compose} from 'redux';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

declare global {
  interface Window {
    player: videojs.Player;
  }
}

interface Props {
  // options: videojs.PlayerOptions;
  src: any;
  autoplay: boolean;
  controls: boolean;
}

let player: videojs.Player;
let videoNode: any = null;

export const getPlayer = () => {
  if (!player) {
    return null;
  }
  return player;
};

const getVideoSource = (Wrapped: any) => (props: any) => {
  const src = [
    {
      src: 'http://vjs.zencdn.net/v/oceans.mp4',
      type: 'video/mp4',
    },
    {
      src:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      type: 'video/mp4',
    },
  ];
  return <Wrapped {...props} src={src} />;
};

const getVideoOptions = (Wrapped: any) => (props: any) => {
  return <Wrapped {...props} autoplay={true} controls={false} />;
};

const VideoPlayer = (props: Props) => {
  // on mount and dismount
  useEffect(() => {
    player = videojs(
      videoNode,
      {autoplay: true, controls: true},
      onPlayerReady
    );
    console.log(props);
    window.player = player;
    const sources: any = props ? props.src : null;
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

const enhance = compose(
  getVideoSource,
  getVideoOptions
);

export default enhance(VideoPlayer);
