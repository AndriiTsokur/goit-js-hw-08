import Player from '@vimeo/player';
import Throttle from 'lodash.throttle';
import LocalStorageOps from './common-modules/localStorageOps';

const playerRef = document.querySelector('iframe');
const STORAGE_KEY = 'videoplayer-current-time';
const player = new Player(playerRef);

player.setCurrentTime(LocalStorageOps.read(STORAGE_KEY) || 0);

player.on(
	'timeupdate',
	Throttle(e => LocalStorageOps.write(STORAGE_KEY, e.seconds), 1000, {
		leading: false,
	})
);
