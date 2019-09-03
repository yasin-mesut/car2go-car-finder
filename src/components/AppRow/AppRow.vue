<script src="./AppRow.js"></script>
<style src="./AppRow.scss" lang="scss" scoped></style>

<template>
    <div :class="containerMode">
        <div class="row">
            <div :class="[col, offset, alignment]">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

