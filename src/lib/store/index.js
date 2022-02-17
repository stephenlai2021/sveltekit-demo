import { writable } from 'svelte/store';
import { browser } from '$app/env';

export const fetchedPosts = writable([]);
export const showProfile = writable(false)
export const showModal = writable(false)
export const keyword = writable('')
export const friend = writable('')
export const activeItem = writable(null)

export const idToken = writable(browser && localStorage.getItem("id token"))
idToken.subscribe((val) => browser && localStorage.setItem("id token", val))

export const pageDetails = writable(browser && JSON.parse(localStorage.getItem("page details")))
pageDetails.subscribe((val) => browser && localStorage.setItem("page details", JSON.stringify(val)))

export const searchedMovie = writable(browser && localStorage.getItem("searched movie"))
searchedMovie.subscribe((val) => browser && localStorage.setItem("searched movie", val))

// export const isChinese = writable(browser && JSON.parse(localStorage.getItem("chinese")));
// isChinese.subscribe((val) => browser && localStorage.setItem("chinese", JSON.stringify(val)) || 'English');

// export const loggedInUser = writable(browser && localStorage.getItem("loggedin-user"));
// loggedInUser.subscribe((val) => browser && localStorage.setItem("loggedin-user", val));

export const lang = writable(browser ? window.localStorage.getItem('lang') : 'English');
lang.subscribe((val) => {
	if (browser) {
		window.localStorage.setItem('lang', val);
	}
});
