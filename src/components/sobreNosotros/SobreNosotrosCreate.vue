<template>
    <div class="sobre-nosotros-create">
        <h1>Crear Información Sobre Nosotros</h1>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="title">Título</label>
                <input
                    type="text"
                    id="title"
                    v-model="form.title"
                    placeholder="Ingrese el título"
                    required
                />
            </div>
            <div class="form-group">
                <label for="description">Descripción</label>
                <textarea
                    id="description"
                    v-model="form.description"
                    placeholder="Ingrese la descripción"
                    required
                ></textarea>
            </div>
            <button type="submit">Guardar</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "SobreNosotrosCreate",
    data() {
        return {
            form: {
                title: "",
                description: "",
            },
        };
    },
    methods: {
        submitForm() {
            // Aquí puedes manejar el envío del formulario
            console.log("Formulario enviado:", this.form);
            // Por ejemplo, puedes enviar los datos a una API
        },
    },
};
</script>

<style scoped>
.sobre-nosotros-create {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input,
textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 10px 15px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>