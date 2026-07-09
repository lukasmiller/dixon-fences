export async function onRequest(context) {
  const url = new URL(context.request.url);

  const clientId = context.env.GITHUB_CLIENT_ID;
  const clientSecret = context.env.GITHUB_CLIENT_SECRET;

  if (url.pathname.endsWith("/callback")) {
    const code = url.searchParams.get("code");

    const response = await fetch(
      "https://github.com/login/oauth/access_token",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          code,
        }),
      }
    );

    const data = await response.json();

    return new Response(
      `
      <script>
        window.opener.postMessage(
          "authorization:github:success:${JSON.stringify(data)}",
          "*"
        );
        window.close();
      </script>
      `,
      {
        headers: {
          "Content-Type": "text/html",
        },
      }
    );
  }

  const redirect = new URL(
    "https://github.com/login/oauth/authorize"
  );

  redirect.searchParams.set("client_id", clientId);
  redirect.searchParams.set(
    "scope",
    "repo"
  );

  return Response.redirect(redirect.toString(), 302);
}