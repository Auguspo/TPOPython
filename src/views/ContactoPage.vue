<template>
    <section id="contacto" class="container mt-5 min-vh-100">
        <h2>Contacto</h2>
        <div class="formulario-container">
            <form id="contactoForm" action="mailto:tucorreo@gmail.com" method="post" enctype="text/plain" class="mb-5">
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre:</label>
                    <input type="text" class="form-control" id="nombre" name="nombre" required />
                </div>

                <div class="mb-3">
                    <label for="email" class="form-label">Correo Electrónico:</label>
                    <input type="email" class="form-control" id="email" name="email" required />
                </div>

                <div class="mb-3">
                    <label for="mensaje" class="form-label">Mensaje:</label>
                    <textarea class="form-control" rows="5" id="mensaje" name="mensaje" required></textarea >
                </div>

                <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
        </div>
    </section>
</template>
  
<script>
export default {
    name: 'ContactoPage',
};
</script>
  
<style scoped>
/* Agrega estilos específicos para esta página si es necesario */
</style>
  