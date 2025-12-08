<script setup>

</script>

<template>
    <input type="submit" class="submit-button">
</template>

<style scoped>
    .submit-button {
        font-size: 20px;
        padding: 5px 0px;
        border-radius: 10px;
        border: 1px solid black;
        color: white;
        width: 300px;
        margin: 0 auto;
        text-shadow: -1px 1px 1px black;
        transition: .2s ease-in-out;
        background: -webkit-linear-gradient(305deg, #1b1b1b,#ff3838,#1b1b1b);/* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(305deg, #1b1b1b,#ff3838,#1b1b1b);/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }

    .submit-button:hover {
        cursor: pointer;
        transform: scale(1.05);
        filter: brightness(1.4);
    }
</style>