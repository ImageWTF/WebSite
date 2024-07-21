const p = "modulepreload",
	f = function (o) {
		return "/" + o;
	},
	c = {},
	w = function (l, a, h) {
		let s = Promise.resolve();
		if (a && a.length > 0) {
			document.getElementsByTagName("link");
			const r = document.querySelector("meta[property=csp-nonce]"),
				n = r?.nonce || r?.getAttribute("nonce");
			s = Promise.all(
				a.map((e) => {
					if (((e = f(e)), e in c)) return;
					c[e] = !0;
					const i = e.endsWith(".css"),
						m = i ? '[rel="stylesheet"]' : "";
					if (document.querySelector(`link[href="${e}"]${m}`)) return;
					const t = document.createElement("link");
					if (
						((t.rel = i ? "stylesheet" : p),
						i || ((t.as = "script"), (t.crossOrigin = "")),
						(t.href = e),
						n && t.setAttribute("nonce", n),
						document.head.appendChild(t),
						i)
					)
						return new Promise((d, u) => {
							t.addEventListener("load", d),
								t.addEventListener("error", () =>
									u(
										new Error(
											`Unable to preload CSS for ${e}`,
										),
									),
								);
						});
				}),
			);
		}
		return s
			.then(() => l())
			.catch((r) => {
				const n = new Event("vite:preloadError", { cancelable: !0 });
				if (
					((n.payload = r),
					window.dispatchEvent(n),
					!n.defaultPrevented)
				)
					throw r;
			});
	};
(
	await w(async () => {
		const { initializeApp: o } = await import("./index.esm.BoasBFnU.js");
		return { initializeApp: o };
	}, [])
).initializeApp({
	apiKey: "AIzaSyDBmnQxVvBOEqdr5498xb7Nb86WO5xA9f4",
	authDomain: "image-wtf-web.firebaseapp.com",
	projectId: "image-wtf-web",
	storageBucket: "image-wtf-web.appspot.com",
	messagingSenderId: "199878156405",
	appId: "1:199878156405:web:6adce1a48bdf961fda983c",
	measurementId: "G-XFRD8Q5GFM",
});
//# sourceMappingURL=Base.astro_astro_type_script_index_0_lang.DqrPr_Cn.js.map
