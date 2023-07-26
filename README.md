# [Learn Next.js](https://nextjs.org/learn)

### Dynamic Routes

<img alt="how-to-dynamic-routes" height="450px" src="https://github.com/yousefelassal/next-tutorial/assets/76617202/702951fe-18b2-469b-8006-8f7445e20663" />

<br />
<br />

### Fetch External API or Query Database
`getStaticProps`, `getStaticPaths` can fetch data from any data source.

```js
export async function getAllPostIds() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch('..');
  const posts = await res.json();
  return posts.map((post) => {
    return {
      params: {
        id: post.id,
      },
    };
  });
}
```
