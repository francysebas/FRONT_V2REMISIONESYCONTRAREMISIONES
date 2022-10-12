import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListRemisiones from '@/components/listarRemisiones/ListRemisiones'
import EditRemisiones from '@/components/EditarRemision/EditRemisiones'
import DeleteRemision from '@/components/borrarRemision/DeleteRemision'
import NuevaRemision from '@/components/registrarRemision/Nuevaremision'
import base from '@/components/base'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      component:base,
      children:[
        
        {
          path: '/HelloWorld',
          name: 'HelloWorld',
          component: HelloWorld
        },
        
        {
          path: '/remisiones',
          name: 'ListRemisiones',
          component: ListRemisiones
        },
        {
          path: '/remisiones/nuevaremision',
          name: 'NuevaRemision',
          component: NuevaRemision
        },
        {
          path: '/remisiones/:afiliadoId/editar',
          name: 'EditRemisiones',
          component: EditRemisiones
        },
        {
          path: '/remisiones/:afiliadoId/eliminar',
          name: 'DeleteRemision',
          component: DeleteRemision
        },


         
      ]

    }

  ],
  mode:'history'
})
