import axios from 'axios'
import swal from 'sweetalert' 
export default {
    data() {
            return {
                afiliadoId: this.$route.params.afiliadoId,
                form:{
                tipoIdentificacion:'',
                numIdentificacion:'',
                numCarnet: "",
                nombreP: "",
                nombreS: "",
                apellidoP: "",
                apellidoS: "",
                
            }
        }   
    },
    methods:{
        onSubmit(event){
            event.preventDefault()
            const path = `http://localhost:8000/api/v1.0/remisiones/${this.afiliadoId}/`
            console.log("path",path)
            console.log("id afiliado",this.afiliadoId)
            axios.put(path, this.form).then((response)=> {
               
                this.form.tipoIdentificacion = response.data.tipoIdentificacion
                this.form.numIdentificacion = response.data.numIdentificacion
                this.form.numCarnet = response.data.numCarnet
                this.form.nombreP = response.data.nombreP
                this.form.nombreS = response.data.nombreS
                this.form.apellidoP = response.data.apellidoP
                this.form.apellidoS = response.data.apellidoS
                
              
                //alert("Libro actualizado exitosamente!") 
                swal("Actualizado exitosamente...","","success")
            })
            .catch((error)=>{
                console.log(error)
            })
             
        },

        getAfiliado(){
            
            const path = `http://localhost:8000/api/v1.0/remisiones/${this.afiliadoId}/`
            axios.get(path).then((response)=> {
                this.form.tipoIdentificacion = response.data.tipoIdentificacion
                this.form.numIdentificacion = response.data.numIdentificacion
                this.form.numCarnet = response.data.numCarnet
                this.form.nombreP = response.data.nombreP
                this.form.nombreS = response.data.nombreS
                this.form.apellidoP = response.data.apellidoP
                this.form.apellidoS = response.data.apellidoS
               
            })
            .catch((error)=>{
                console.log(error)
            })
        }
        
    },
    created(){
            this.getAfiliado()
            
        }
    
}