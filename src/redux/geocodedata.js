const cityToGeoData = async (url) => {
  const geoCode = await fetch(url);
  const geoCodeJSON = await geoCode.json();

  return geoCodeJSON;
  // console.log(geoCode);
};

export default cityToGeoData;
