<template>
    <div class="sistema-list">
        <h1>Lista de Sistemas</h1>
        <ul>
            <li v-for="sistema in sistemas" :key="sistema.id">
                {{ sistema.nombre }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "SistemaList",
    data() {
        return {
            sistemas: [
                { id: 1, nombre: "Sistema 1" },
                { id: 2, nombre: "Sistema 2" },
                { id: 3, nombre: "Sistema 3" },
            ],
        };
    },
};
</script>

<style scoped>
.sistema-list {
    padding: 20px;
}

h1 {
    font-size: 24px;
    margin-bottom: 10px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    padding: 5px 0;
}
</style></template>