import { type Dispatch, type SetStateAction, createContext, useState, useEffect, useRef } from "react";

import { clamp } from "@/helpers/clamp";

interface PlayerValue {
  track: string | null;
  setTrack: Dispatch<SetStateAction<string | null>>;
  isPlaying: boolean;
  setPlaying: Dispatch<SetStateAction<boolean>>;
  volume: number;
  setVolume: Dispatch<SetStateAction<number>>;
  playbackProgress: PlaybackProgress;
  setPlaybackProgress: Dispatch<SetStateAction<PlaybackProgress>>;
}

interface PlaybackProgress {
  elapsed: number;
  total: number;
}

export const PlayerContext = createContext({} as PlayerValue);

const PlayerProvider = (props: React.PropsWithChildren) => {
  const { children } = props;

  const [track, setTrack] = useState<string | null>(null);
  const [isPlaying, setPlaying] = useState(false);
  const [volume, setVolume] = useState(75);
  const [playbackProgress, setPlaybackProgress] = useState({
    elapsed: 0,
    total: 248440,
  });

  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    if (isPlaying && playbackProgress.elapsed < playbackProgress.total) {
      timeoutRef.current = setTimeout(() => {
        setPlaybackProgress((val) => ({ ...val, elapsed: clamp(0, val.elapsed + 1000, val.total) }));
      }, 1000);
    } else if (playbackProgress.elapsed >= playbackProgress.total) {
      setPlaying(false);
      clearTimeout(timeoutRef.current);
    }

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [isPlaying, playbackProgress.elapsed, playbackProgress.total]);

  const initialState = {
    track,
    setTrack,
    isPlaying,
    setPlaying,
    volume,
    setVolume,
    playbackProgress,
    setPlaybackProgress,
  };

  return <PlayerContext.Provider value={initialState}>{children}</PlayerContext.Provider>;
};

export default PlayerProvider;
