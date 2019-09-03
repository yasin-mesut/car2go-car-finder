export default {
    name: 'AppRow',
    props: [
        'containerMode',
        'cols',
        'offsets',
        'alignment'
    ],
    data() {
        return {
            col: 'col-' + this.cols,
            offset: 'offset-' + this.offsets
        }
    }
}
