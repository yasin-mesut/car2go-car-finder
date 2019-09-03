export default {
    name: 'CarData',
    props: [
        'car',
    ],
    methods: {
        resetCar() {
            this.$emit('resetCar');
        }
    }
}
