import axios from 'axios';
import swal from 'sweetalert'
    export default {
        data() {
            return{
                afiliadoId: this.$route.params.afiliadoId,
                element: {
                numIdentificacion:'',
                nombreP: '',
                }
            }
            
        },

        methods: {
         
         eliminarAfiliado(){
            const path = `http://127.0.0.1:8000/appgestionarremcontrarem/afiliado/${this.afiliadoId}/`
            axios.delete(path).then((response)=>{
                location.href = '/remisiones'
            })
            .catch((error)=>{
                swal("no es posible eliminar el afiliado"," ","error")
            })
         },
       
        getRemisiones(){
            const path = `http://127.0.0.1:8000/appgestionarremcontrarem/afiliado/${this.afiliadoId}/`
            axios.get(path).then((response)=>{
               this.element.numIdentificacion = response.data.numIdentificacion
               this.element.nombreP = response.data.nombreP
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