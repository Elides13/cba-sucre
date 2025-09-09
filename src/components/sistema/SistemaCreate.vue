<template>
    <div class="sistema-create">
        <h1>Crear Sistema</h1>
        <form @submit.prevent="submitForm">
            <div>
                <label for="nombre">Nombre del Sistema:</label>
                <input
                    type="text"
                    id="nombre"
                    v-model="form.nombre"
                    required
                />
            </div>
            <div>
                <label for="descripcion">Descripción:</label>
                <textarea
                    id="descripcion"
                    v-model="form.descripcion"
                    required
                ></textarea>
            </div>
            <button type="submit">Guardar</button>
        </form>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    name: "SistemaCreate",
    setup() {
        const form = ref({
            nombre: "",
            descripcion: "",
        });

        const submitForm = () => {
            console.log("Formulario enviado:", form.value);
            // Aquí puedes agregar la lógica para enviar los datos al backend
        };

        return {
            form,
            submitForm,
        };
    },
};
</script>

<style scoped>
.sistema-create {
    max-width: 600px;
    margin: 0 auto;
}

form div {
    margin-bottom: 1rem;
}

label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

input,
textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style></div>