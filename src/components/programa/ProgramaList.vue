<template>
    <div class="programa-list">
        <h1>Lista de Programas</h1>
        <ul>
            <li v-for="programa in programas" :key="programa.id">
                {{ programa.nombre }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "ProgramaList",
    data() {
        return {
            programas: [
                { id: 1, nombre: "Programa 1" },
                { id: 2, nombre: "Programa 2" },
                { id: 3, nombre: "Programa 3" },
            ],
        };
    },
};
</script>

<style scoped>
.programa-list {
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
</style>