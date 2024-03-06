let map;
let latlng = new google.maps.LatLng(40.730610, -73.935242);
let stylez = [{
    featureType: "all",
    elementType: "all",
    stylers: [{
        saturation: -10
            }]
        }];

let mapOptions = {
    zoom: 15,
    center: latlng,
    scrollwheel: false,
    scaleControl: false,
    disableDefaultUI: true,
    mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'gMap']
    }
};


map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
let geocoder_map = new google.maps.Geocoder();
let address = 'New york';
geocoder_map.geocode({
    'address': address
}, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: map.getCenter()
        });

    } else {
        alert("Geocode was not successful for the following reason: " + status);
    }
});
let mapType = new google.maps.StyledMapType(stylez, {
    name: "Grayscale"
});
map.mapTypes.set('gMap', mapType);
map.setMapTypeId('gMap');