// Notifies Bing (and other IndexNow engines: Yandex, Seznam, Naver…) that pages changed,
// so they re-crawl them without waiting. Run after a deploy is live:
//   npm run indexnow                 → every URL in the live sitemap.xml
//   npm run indexnow -- /blog/foo    → only the given paths
// The key is public by design: Bing checks it at https://www.kietelrevenue.com/<key>.txt
const SITE = "https://www.kietelrevenue.com";
const KEY = "90ff185e1630064ee834776f2a9749ac";

async function sitemapUrls() {
  const res = await fetch(`${SITE}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap.xml → HTTP ${res.status} (¿está desplegado?)`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
}

const args = process.argv.slice(2);
const urlList = args.length ? args.map((p) => new URL(p, SITE).href) : await sitemapUrls();

const keyRes = await fetch(`${SITE}/${KEY}.txt`);
if (!keyRes.ok || (await keyRes.text()).trim() !== KEY) {
  console.error(`La clave no está publicada en ${SITE}/${KEY}.txt — despliega antes de enviar.`);
  process.exit(1);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(SITE).host,
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList,
  }),
});

// 200 = accepted, 202 = accepted, key validation pending.
console.log(`IndexNow → HTTP ${res.status} · ${urlList.length} URL(s)`);
urlList.forEach((u) => console.log("  ", u));
if (res.status >= 300) {
  console.error(await res.text());
  process.exit(1);
}
