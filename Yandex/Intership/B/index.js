function onionWrapper(arg) {
    const superOnion = (arg) => {
     if (typeof arg === 'string') {
      excludeCities.add(arg);
      return superOnion;
     }
   
     return resultFunction(
      cities.filter((city) => !excludeCities.has(city))
     );
    };
   
    const cities = [];
    const excludeCities = new Set();
    let resultFunction = null;
   
    const helper = (arg) => {
     if (typeof arg === 'function') {
      resultFunction = arg;
      return superOnion;
     }
   
     cities.push(arg);
     return helper;
    };
   
    return helper(arg);
   }