<template>
    <div class="container">
        <div class="row">
            <div class="col text-left">
                <h2>
                    Editar Remision...
                </h2>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-body">

                        <form @submit="onSubmit">

                            <div class="form-group row">
                              
                                <label for="tipoIdentificacion" class="col-sm-2 col-form-label">
                                    Tipo de documento
                                </label>
                                <div class="col-sm-6">
                                    <input type="text" placeholder="Tipo documento" name="tipoIdentificacion" class="form-control" v-model.trim="form.tipoIdentificacion">
                                </div>

                                
                            </div>

                            <!--<div class="form-group row">
                                <label for="numIdentificacion" class="col-sm-2 col-form-label">
                                    Número de documento
                                </label>
                                <div class="col-sm-6">
                                   <textarea name="numIdentificacion" class="form-control" placeholder="Documento" rows="3"  v-model.trim="form.numIdentificacion"></textarea>
                                </div>
                            </div>-->    
                            
                            <div class="form-group row">
                                <label for="numIdentificacion" class="col-sm-2 col-form-label">
                                    Numero de documento
                                </label>
                                <div class="col-sm-6">
                                    <input type="text" placeholder="Número de documento" name="numIdentificacion" class="form-control" v-model.trim="form.numIdentificacion">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="numCarnet" class="col-sm-2 col-form-label">
                                    Numero de carnet
                                </label>
                                <div class="col-sm-6">
                                    <input type="text" placeholder="Número de carnet" name="numCarnet" class="form-control" v-model.trim="form.numCarnet">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="nombreP" class="col-sm-2 col-form-label">
                                    primer nombre
                                </label>
                                <div class="col-sm-6">
                                    <input type="text"  name="nombreP" class="form-control" v-model.trim="form.nombreP">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="nombreS" class="col-sm-2 col-form-label">
                                    segundo nombre
                                </label>
                                <div class="col-sm-6">
                                    <input type="text"  name="nombreS" class="form-control" v-model.trim="form.nombreS">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="apellidoP" class="col-sm-2 col-form-label">
                                    1 apellido
                                </label>
                                <div class="col-sm-6">
                                    <input type="text"  name="apellidoP" class="form-control" v-model.trim="form.apellidoP">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="apellidoS" class="col-sm-2 col-form-label">
                                   2 apellido
                                </label>
                                <div class="col-sm-6">
                                    <input type="text"  name="apellidoS" class="form-control" v-model.trim="form.apellidoS">
                                </div>
                            </div>

                            

                            <div class="rows">
                                <div class="col text-left">
                                    <b-button type="submit" variant="primary">
                                        Editar
                                    </b-button>
                                    <b-button type="submit" class="btn-large-space" :to="{name: 'ListRemisiones'}">
                                        Cancelar
                                    </b-button>
                                </div>
                            </div>
                            
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./editar.js">

</script>