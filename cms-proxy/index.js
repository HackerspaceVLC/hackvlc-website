export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 1. Redirect to GitHub Authorization
    if (url.pathname === "/auth") {
      return Response.redirect(
        `https://github.com/login/oauth/authorize?client_id=${env.GITHUB_CLIENT_ID}&scope=repo,user&redirect_uri=${encodeURIComponent(url.origin + "/callback")}`,
        302
      );
    }

    // 2. Handle GitHub Callback
    if (url.pathname === "/callback") {
      const code = url.searchParams.get("code");
      if (!code) return new Response("No code provided", { status: 400 });

      const response = await fetch("https://github.com/login/oauth/access_token", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "accept": "application/json",
        },
        body: JSON.stringify({
          client_id: env.GITHUB_CLIENT_ID,
          client_secret: env.GITHUB_CLIENT_SECRET,
          code,
        }),
      });

      const result = await response.json();

      if (result.error) {
        return new Response(JSON.stringify(result), { status: 400 });
      }

      // 3. Send token back to CMS and close popup
      // Note: We use window.location.origin as a fallback or the known site domain
      const html = `
        <!DOCTYPE html>
        <html>
        <body>
          <script>
            (function() {
              const response = {
                token: "${result.access_token}",
                provider: "github"
              };
              
              const sendToken = () => {
                // Try sending to the opener
                if (window.opener) {
                  window.opener.postMessage(
                    'authorization:github:success:' + JSON.stringify(response),
                    "*"
                  );
                }
              };
              
              sendToken();
            })();
          </script>
        </body>
        </html>
      `;

      return new Response(html, {
        headers: { "content-type": "text/html;charset=UTF-8" },
      });
    }

    return new Response("HackVLC CMS Proxy Running", { status: 200 });
  },
};
