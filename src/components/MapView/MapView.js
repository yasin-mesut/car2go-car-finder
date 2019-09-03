import { OpenStreetMapProvider } from 'leaflet-geosearch';
import CarData from '../CarData/CarData.vue';
import CarsMap from '../CarsMap/CarsMap.vue';

export default {
    name: 'MapView',
    components: {
        CarData,
        CarsMap
    },
    data() {
        return {
            provider: new OpenStreetMapProvider(),
            updateMilliseconds: 5000,
            selectedCar: null,
            selectedLocationCoords: { x: null, y: null },
            fetchInterval: null,
            cars: null
        }
    },
    computed: {
        selectedLocation() {
            return this.$store.state.selectedLocation;
        },
    },
    methods: {
        setSelectedCar(car) {
            this.selectedCar = car;
        },
        getCarsForLocation() {
            if (this.selectedLocation) {
                const locationId = this.selectedLocation.location_id;
                this.$http.get(`https://sims.car2go.com/cars/${locationId}`).then((res) => {
                    this.cars = res.body;
                })
            }
        },
        resetCar() {
            this.selectedCar = null;
        }
    },
    watch: {
        selectedLocation: function (location) {
            this.provider.search({ query: `${location.city_name} ${location.country}` }).then((res) => {
                res = res[ 0 ];
                this.getCarsForLocation();
                this.selectedLocationCoords = {
                    x: res.x,
                    y: res.y
                };
            });
        }
    },
    mounted() {
        this.fetchInterval = setInterval(() => {
            this.getCarsForLocation();
        }, this.updateMilliseconds);
    },
    destroyed() {
        clearInterval(this.fetchInterval);
    }
}
