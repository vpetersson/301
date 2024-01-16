addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Hardcoded URL mappings
    const mappings = {
        "/twitter": "https://twitter.com/vpetersson",
        "/linkedin": "https://www.linkedin.com/in/vpetersson/",
        "/github": "https://github.com/vpetersson",
        "/ssh": "https://github.com/vpetersson.keys",
        "/ggp": "https://github.com/vpetersson.gpg",
        "/pgp": "https://github.com/vpetersson.gpg",
        "/nowv-apple": "https://podcasts.apple.com/us/podcast/nerding-out-with-viktor/id1722663295",
        "/nowv-spotify": "https://podcasters.spotify.com/pod/show/nerding-out-with-viktor",
        "/nowv-youtube": "https://www.youtube.com/@nerdingoutwithviktor",
        "/nowv-amazon": "https://music.amazon.com/podcasts/c8e79c21-2dde-4597-b9fb-257ecbc2bf29/nerding-out-with-viktor",
    };

    const target = mappings[path];
    if (target) {
        return Response.redirect(target, 301);
    }

    return new Response('URL not found', { status: 404 });
}
