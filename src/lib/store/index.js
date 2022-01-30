import { writable } from 'svelte/store';
import { browser } from '$app/env';

export const fetchedPosts = writable([]);

// export const isChinese = writable(browser && JSON.parse(localStorage.getItem("chinese")));
// isChinese.subscribe((val) => browser && localStorage.setItem("chinese", JSON.stringify(val)) || 'English');

export const loggedInUser = writable(browser && localStorage.getItem("loggedin-user"));
loggedInUser.subscribe((val) => browser && localStorage.setItem("loggedin-user", val));

export const lang = writable(browser ? window.localStorage.getItem('lang') : 'English');
lang.subscribe((val) => {
	if (browser) {
		window.localStorage.setItem('lang', val);
	}
});
