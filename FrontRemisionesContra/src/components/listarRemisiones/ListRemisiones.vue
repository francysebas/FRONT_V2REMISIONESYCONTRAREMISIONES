<template>
    <div class="container">
        <div class="row">
            <div class="col text-left">
                <div class="">
                    <h2 text-align="center" >listado de remisiones ...</h2>
                    <b-button size = "sm" :to="{name: 'NuevaRemision'}" variant="primary">nueva remision</b-button>   
                </div>
                <br>
                <div class="col-md-12">
                    <b-table stripe hover :items="remisiones" :fields="fields">

                    <!--<template v-slot="action" v-slot-scope="data"> -->
                    <template v-slot:cell(action)="data">
                        <b-button size="sm"  variant="primary" :to="{name:'EditRemisiones', params:{afiliadoId: data.item.id}}">
                            Editar
                        </b-button>

                        <b-button size="sm"  variant="danger" :to="{name:'DeleteRemision', params:{afiliadoId: data.item.id}}">
                            Eliminar
                        </b-button>
                    </template>

                    </b-table>

                </div>
            </div>
        </div>
    </div>
</template>

<script src="./listar.js">

</script>

