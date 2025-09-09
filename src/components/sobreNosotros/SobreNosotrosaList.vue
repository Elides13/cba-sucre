<template>
    <div class="sobre-nosotros-list">
        <h1>Sobre Nosotros</h1>
        <ul>
            <li v-for="(item, index) in sobreNosotrosItems" :key="index">
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "SobreNosotrosList",
    data() {
        return {
            sobreNosotrosItems: [
                "Misión: Proveer educación de calidad.",
                "Visión: Ser líderes en formación académica.",
                "Valores: Compromiso, excelencia, integridad."
            ]
        };
    }
};
</script>

<style scoped>
.sobre-nosotros-list {
    padding: 20px;
    font-family: Arial, sans-serif;
}

.sobre-nosotros-list h1 {
    color: #2c3e50;
}

.sobre-nosotros-list ul {
    list-style-type: none;
    padding: 0;
}

.sobre-nosotros-list li {
    margin: 10px 0;
    color: #34495e;
}
</style></template>