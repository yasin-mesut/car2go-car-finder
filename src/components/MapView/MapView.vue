<script src="./MapView.js"></script>
<style src="./MapView.scss" lang="scss" scoped></style>

<template>
    <div class="container">
        <div class="row">
            <div class="map-wrapper" :class="{'col-9': selectedCar, 'col-12': !selectedCar}">
                <CarsMap v-on:carSelected="setSelectedCar"
                         :locationCoords="selectedLocationCoords"
                         :cars="cars">
                </CarsMap>
            </div>
            <CarData id="car-data" class="col-3"
                     :car="selectedCar"
                     v-if="selectedCar"
                     v-on:resetCar="resetCar">
            </CarData>
        </div>
    </div>
</template>