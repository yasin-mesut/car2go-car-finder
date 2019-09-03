<script src="./DropdownList.js"></script>
<style src="./DropdownList.scss" lang="scss" scoped></style>

<template>
    <div class="btn-group">
        <button type="button" class="btn btn-outline-primary dropdown-toggle" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
            {{ selectedOption }}
        </button>
        <div class="dropdown-menu">
            <a class="dropdown-item" href="#" v-for="option in options" :key="option.id" @click="onSelection(option)">
                {{ option[optionName] }}
            </a>
        </div>
    </div>
</template>
