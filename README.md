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

### Fallback

If fallback is false, then any paths not returned by `getStaticPaths` will result in a 404 page.

### 404 Pages
To create a custom 404 page, create `pages/404.js`. This file is statically generated at build time.
```js
// pages/404.js
export default function Custom404() {
  return <h1>404 - Page Not Found</h1>;
}
```
[Error Pages documentation](https://nextjs.org/docs/advanced-features/custom-error-page)
