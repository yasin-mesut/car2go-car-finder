<template>
    <div id="app">
        <AppHeader></AppHeader>
        <AppRow container-mode="container" cols="12" alignment="text-left">
            <DropdownList
                    :selectedOption="selectedLocation"
                    :onSelection="setLocation"
                    :options="locations"
                    optionName="city_name">
            </DropdownList>
        </AppRow>
        <AppRow container-mode="container" cols="10" offsets="1">
            <hr>
        </AppRow>
        <AppRow container-mode="container" cols="12" alignment="text-left">
            <MapView></MapView>
        </AppRow>
    </div>
</template>

<script>
    import 'jquery';
    import 'popper.js';
    import 'bootstrap';
    import 'lodash';
    import AppHeader from './components/AppHeader/AppHeader.vue'
    import AppRow from './components/AppRow/AppRow.vue'
    import DropdownList from './components/DropdownList/DropdownList.vue'
    import MapView from './components/MapView/MapView.vue'

    export default {
        name: 'app',
        components: {
            AppHeader,
            AppRow,
            DropdownList,
            MapView
        },
        computed: {
            locations() {
                return _.orderBy(this.$store.state.locations, 'city_name')
            },
            selectedLocation() {
                if (this.$store.state.selectedLocation) {
                    return this.$store.state.selectedLocation.city_name;
                }

                return 'Select a location';
            }
        },
        methods: {
            setLocation(location) {
                this.$store.state.selectedLocation = location;
            }
        },
        created() {
            this.$http.get('https://sims.car2go.com/locations/').then((res) => {
                this.$store.state.locations = res.body;
            });
        }
    }
</script>

<style lang="scss">
    // Usually I'd exclude all vendor related files in a separate vendor.js file,
    // but since it's only a quick example I just chose this quick solution.
    @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
    // ... the same goes for global style definitions.
    $blue: #00a0e2;

    // Overwriting Bootstrap defaults
    button.btn.btn-outline-primary {
        color: $blue;
        border-color: $blue;

        &:hover {
            color: white;
            border-color: $blue;
            background-color: $blue;
        }
    }

    a:active {
        background-color: $blue;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2C3E50;
    }
</style>
