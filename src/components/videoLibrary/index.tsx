/* tslint:disable:react-hooks/exhaustive-dep */
import React, {useEffect} from 'react';
import {compose} from 'redux';
import videojs from 'video.js';
import getVideoSource from './hoc/getVideoSource';
import getVideoOptions from './hoc/getVideoOptions';
import 'videojs-ima/dist/videojs.ima.js';
import 'videojs-contrib-ads/dist/videojs-contrib-ads.js';
import 'video.js/dist/video-js.css';
import 'videojs-ima/src/css/videojs.ima.css';
import 'videojs-contrib-ads/dist/videojs-contrib-ads.css';

declare global {
  interface Window {
    player: videojs.Player;
  }
}

interface Props {
  src: any;
  videoOptions: videojs.PlayerOptions;
}

let player: videojs.Player;
let videoNode: any = null;

export const getPlayer = () => {
  if (!player) {
    return null;
  }
  return player;
};

const VideoPlayer = ({videoOptions, src}: Props) => {
  // on mount and dismount
  useEffect(() => {
    player = videojs(videoNode, videoOptions, onPlayerReady);
    window.player = player;
    const sources: any = src;
    addMiddleware(player);
    setSource(sources);
    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, []);

  const addMiddleware = (myPlayer: any) => {
    const opts = {
      adTagUrl:
        'http://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=xml_vmap1&unviewed_position_start=1&cust_params=sample_ar%3Dpremidpostpod%26deployment%3Dgmf-js&cmsid=496&vid=short_onecue&correlator=',
    };
    myPlayer['ima'](opts);
  };

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
