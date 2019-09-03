import L from 'leaflet';
// Workaround for an error with Leaflet itself using wrong image names.
// https://github.com/Leaflet/Leaflet/issues/4968#issuecomment-264311098
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

export default {
    name: 'CarsMap',
    props: [
        'locationCoords',
        'cars'
    ],
    data() {
        return {
            markers: [],
        }
    },
    computed: {
        map() {
            return L.map('mapid').setView([ 52.5170365, 13.3888599 ], 13);
        },
    },
    methods: {
        addMarkerToMap(car, coords) {
            const marker = L.marker(coords).addTo(this.map);
            marker.on('click', () => {
                this.$emit('carSelected', car);
            });

            return marker;
        },
        removeMarkers() {
            this.markers.forEach((marker) => {
                marker.remove();
            });
        },
    },
    watch: {
        locationCoords: function (coords) {
            this.map.setView(L.latLng(coords.y, coords.x));
        },
        cars: function (cars) {
            this.removeMarkers();
            cars.forEach((car) => {
                const coords = car.location.gps.coordinates;
                const marker = this.addMarkerToMap(car, [ coords[ 1 ], coords[ 0 ] ]);

                this.markers.push(marker);
            });
        }
    },
    mounted() {
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 30,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiYWVyMCIsImEiOiJjamVlcWQyaWIxYWZzMndwYmRyeG9lemI5In0.6kVmp0wjjEjwBRVtayFhrw'
        }).addTo(this.map);
    }
}
