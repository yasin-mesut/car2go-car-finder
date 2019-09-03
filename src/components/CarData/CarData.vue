<script src="./CarData.js"></script>
<style src="./CarData.scss" lang="scss" scoped></style>

<template>
    <transition name="fade">
        <div class="card">
            <button class="btn btn-outline-primary" @click="resetCar()">x</button>
            <div class="card-body">
                <h5 class="card-title">{{ car.car_model }}</h5>
                <img class="img-fluid" src="">
                <span class="title">Fuel level</span>
                <span class="text">{{ car.fuel_level }}%</span>
                <br>
                <span class="title">Address</span>
                <span class="text">{{ car.location.address }}</span>
            </div>
        </div>
    </transition>
</template>
