addEventListener('message', ({ data }) => {
  console.log(`Spend ${Date.now() - data.ts}ms`);
});
