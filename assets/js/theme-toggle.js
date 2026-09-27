/*
	theme-toggle.js — PREVIEW ONLY.
	Injects a light/dark toggle into the sidebar next to the social icons,
	so no changes to index.html markup are required.
*/
(function () {
	"use strict";

	var STORAGE_KEY = "tm-theme";
	var root = document.documentElement;

	function stored() {
		try {
			var v = localStorage.getItem(STORAGE_KEY);
			return v === "light" || v === "dark" ? v : null;
		} catch (e) {
			return null;
		}
	}

	function preferred() {
		return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
			? "light"
			: "dark";
	}

	function apply(theme, button) {
		root.setAttribute("data-theme", theme);
		if (button) {
			button.setAttribute("aria-pressed", String(theme === "light"));
			button.setAttribute(
				"aria-label",
				theme === "light" ? "Switch to dark mode" : "Switch to light mode"
			);
		}
	}

	function build() {
		var icons = document.querySelector("#header .bottom .icons");
		if (!icons) return;

		var wrap = document.createElement("div");
		wrap.className = "theme-toggle-wrap";

		var button = document.createElement("button");
		button.type = "button";
		button.className = "theme-toggle";

		var icon = document.createElement("span");
		icon.className = "theme-toggle__icon";
		icon.setAttribute("aria-hidden", "true");

		var label = document.createElement("span");
		label.className = "theme-toggle__label";

		button.appendChild(icon);
		button.appendChild(label);
		wrap.appendChild(button);
		icons.parentNode.insertBefore(wrap, icons.nextSibling);

		apply(root.getAttribute("data-theme") || stored() || preferred(), button);

		button.addEventListener("click", function () {
			var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
			apply(next, button);
			try {
				localStorage.setItem(STORAGE_KEY, next);
			} catch (e) {
				/* private mode — theme just won't persist */
			}
		});

		// Follow the OS only while the visitor hasn't made an explicit choice.
		if (window.matchMedia) {
			var mq = window.matchMedia("(prefers-color-scheme: light)");
			var onChange = function (e) {
				if (!stored()) apply(e.matches ? "light" : "dark", button);
			};
			if (mq.addEventListener) mq.addEventListener("change", onChange);
			else if (mq.addListener) mq.addListener(onChange);
		}
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", build);
	} else {
		build();
	}
})();
