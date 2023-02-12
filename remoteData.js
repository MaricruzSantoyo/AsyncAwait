async function cityLocation(city){
    let url = await fetch('https://geocode.xyz/+city+?json=1')
    let response = await url.json();
    
    let latitude = response.latt;
    let longitude = response.longt;
    
    console.log('City: ' + city + ',' + ' longitude: ' + longitude + ',' + ' latitude: ' + latitude);
};

//test one:
// cityLocation("seattle");

//test two:
cityLocation("honolulu");
