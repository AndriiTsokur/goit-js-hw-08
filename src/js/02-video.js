import Player from '@vimeo/player';
import Throttle from 'lodash.throttle';
import * as LocalStorageOps from './common-modules/localStorageOps';

const playerRef = document.querySelector('iframe');
const LOCAL_STORAGE_KEY = 'videoplayer-current-time';
const player = new Player(playerRef);

player.setCurrentTime(LocalStorageOps.read(LOCAL_STORAGE_KEY) || 0);

player.on(
	'timeupdate',
	Throttle(e => LocalStorageOps.write(LOCAL_STORAGE_KEY, e.seconds), 1000, {
		leading: false,
	})
);
