<template>
    <div class="sobre-nosotros-edit">
        <h1>Editar Sobre Nosotros</h1>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="title">Título</label>
                <input
                    type="text"
                    id="title"
                    v-model="form.title"
                    placeholder="Ingrese el título"
                />
            </div>
            <div class="form-group">
                <label for="description">Descripción</label>
                <textarea
                    id="description"
                    v-model="form.description"
                    placeholder="Ingrese la descripción"
                ></textarea>
            </div>
            <button type="submit">Guardar</button>
        </form>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    name: "SobreNosotrosEdit",
    setup() {
        const form = ref({
            title: "",
            description: "",
        });

        const submitForm = () => {
            console.log("Formulario enviado:", form.value);
            // Aquí puedes agregar la lógica para guardar los datos
        };

        return {
            form,
            submitForm,
        };
    },
};
</script>

<style scoped>
.sobre-nosotros-edit {
    max-width: 600px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 1rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
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
</style></template>