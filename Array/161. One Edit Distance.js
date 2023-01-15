const isOneEditDistance = (s, t) => {
  let lens = s.length;
  let lent = t.length;

  if (lent < lens) {
    return isOneEditDistance(t, s);
  }

  if (lent - lens > 1) return false;

  for (let i = 0; i < lens; i++) {
    if (s.charAt(i) != t.charAt(i)) {
      if (lens == lent) {
        return s.substring(i + 1) == t.substring(i + 1);
      } else {
        return s.substring(i) == t.substring(i + 1);
      }
    }
  }

  return lens + 1 == lent;
};

// console.log(isOneEditDistance("mt", "mmm"));
