import axios from 'axios';
export default {
    data(){
        return{
            fields: [
                {key: 'numCarnet', label: 'Número de Carné'},
                {key: 'tipoIdentificacion', label: 'Tipo de identificación'},
                {key: 'numIdentificacion', label: 'Número de identificación'},
                {key: 'nombreP', label: 'Primer nombre'},
                {key: 'nombreS', label: 'Segundo nombre'},
                {key: 'apellidoP', label: 'Primer apellido'},
                {key: 'apellidoS', label: 'Segundo apellido'},
                {key: 'action', label: 'action'}
            ],
            remisiones:[]
        }
    },
    methods: {
       
        getRemisiones(){
            const path = 'http://127.0.0.1:8000/appgestionarremcontrarem/afiliado/'
            axios.get(path).then((response)=>{
               this.remisiones = response.data 
            })
            .catch((error) =>{
                console.log(error)
            })
        }
    },
    created(){
        this.getRemisiones()
        }
}