let hash = {};

const encode = function (longUrl) {
  const code = Math.random().toString(32).slice(5);
  const tinyUrl = `https://tinyurl.com/${code}`;
  hash[tinyUrl] = longUrl;
  return tinyUrl;
};

const decode = (shortUrl) => {
  return hash[shortUrl];
};
