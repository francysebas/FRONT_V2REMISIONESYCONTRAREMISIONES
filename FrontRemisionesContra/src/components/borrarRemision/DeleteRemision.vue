<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h3>¿Esta seguro que deseas eliminar este afiliado...?</h3>
                <p>Numero de numIdentificacion : {{this.element.numIdentificacion}}</p>
                <p>Nombre: {{this.element.nombreP}}</p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <b-button v-on:click="eliminarAfiliado" variant="danger"> Eliminar</b-button>
                 <b-button type="submit" class="btn-large-space" :to="{name: 'ListRemisiones'}">Cancelar </b-button>
            </div>
        </div>
    </div>
    
</template>

<script src="./borrar.js">

</script>