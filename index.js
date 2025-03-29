export default {
  async fetch(request) {
    return new Response("Hello from Cloudflare!", { status: 200 });
  }
};