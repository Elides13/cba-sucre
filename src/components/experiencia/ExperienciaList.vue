<template>
    <div class="experiencia-list">
        <h1>Lista de Experiencias</h1>
        <ul>
            <li v-for="experiencia in experiencias" :key="experiencia.id">
                {{ experiencia.nombre }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "ExperienciaList",
    data() {
        return {
            experiencias: [
                { id: 1, nombre: "Experiencia 1" },
                { id: 2, nombre: "Experiencia 2" },
                { id: 3, nombre: "Experiencia 3" },
            ],
        };
    },
};
</script>

<style scoped>
.experiencia-list {
    padding: 20px;
}

h1 {
    color: #333;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin: 5px 0;
    padding: 10px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 4px;
}
</style></template>