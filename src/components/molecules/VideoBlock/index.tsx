import classNames from 'classnames';

import getVideoData from '@/utils/get-video-data';

function YouTubeVideo({ id, autoplay, loop, muted, controls }) {
    const paramsObj: any = {};
    paramsObj.autoplay = autoplay ? '1' : '0';
    paramsObj.controls = controls ? '1' : '0';
    paramsObj.loop = loop ? '1' : '0';
    paramsObj.mute = muted ? '1' : '0';
    const queryParams = new URLSearchParams(paramsObj).toString();
    return (
        <iframe
            src={`https://www.youtube.com/embed/${id}?${queryParams}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
        ></iframe>
    );
}

function VimeoVideo({ id, autoplay, loop, muted, controls }) {
    const paramsObj: any = {};
    paramsObj.autoplay = autoplay ? '1' : '0';
    paramsObj.controls = controls ? '1' : '0';
    paramsObj.loop = loop ? '1' : '0';
    paramsObj.muted = muted ? '1' : '0';
    paramsObj.transparent = '0';
    const queryParams = new URLSearchParams(paramsObj).toString();
    return (
        <iframe
            src={`https://player.vimeo.com/video/${id}?${queryParams}`}
            title="Vimeo video player"
            frameBorder="0"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
        ></iframe>
    );
}

function SelfHostedVideo({ id, autoplay, loop, muted, controls }) {
    return (
        <video
            {...(autoplay && { autoPlay: true })}
            {...(loop && { loop: true })}
            {...(muted && { muted: true })}
            {...(controls && { controls: true })}
            playsInline
            className="absolute top-0 left-0 w-full h-full"
        >
            <source src={id} type="video/mp4" />
        </video>
    );
}

const videoServiceMap = {
    youtube: YouTubeVideo,
    vimeo: VimeoVideo,
    custom: SelfHostedVideo
};
