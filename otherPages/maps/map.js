mapboxgl.accessToken = 'pk.eyJ1Ijoibmltc3RhZCIsImEiOiJja21kcjEzZW8ybzE0MnFrbjVhZWN4aDc3In0.a_w7b05avPXP0Jl6v2luAw';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})

function successLocation (position)
{
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation()
{
    setupMap([-57.000072, -63.396030])
}

function setupMap(center)
{
    const map = new mapboxgl.Map
    ({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'bottom-right');

    var directions = new MapboxDirections
    ({
        accessToken: mapboxgl.accessToken
    });

    map.addControl(directions, 'top-left');
}