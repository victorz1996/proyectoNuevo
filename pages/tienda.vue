<template>
  <div>
    <b-card>
      <div class="carrito">
        <b-badge class="vermas" variant="secondary"
          >añadidos al carro : {{ carro.length }} - Items
          <ul v-if="carro.length" class="toolip-hover show">
            <li v-for="elem in carro" :key="elem.id">
              Producto: {{ elem.productName }} - Cantidad:
              {{ elem.cantidadComprar }}
            </li>
          </ul>
        </b-badge>
        <b-button @click="continuarCompra()" :disabled="carro.length === 0" size="sm" variant="secondary"
          >Continuar</b-button
        >
      </div>
      <b-tabs content-class="mt-3">
        <b-tab title="Juegos" active>
          <div class="row">
            <div v-for="producto in productos" :key="producto.id" class="col-4">
              <tarjeta
                @quitarProducto="quitarCarro($event)"
                @producto="anadirCarro($event)"
                :item="producto"
              />
            </div>
          </div>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>
<script>
import tarjeta from '../components/Tarjeta'
import Swal from 'sweetalert2'

export default {
  name: 'tienda',
  components: {
    tarjeta,
  },
  data: () => ({
    carro: [],
    productos: [],
  }),
  mounted() {
    this.obtenerProductos()
  },
  methods: {
    continuarCompra(){
      this.$store.commit('setCarro', this.carro)
      this.$router.push('/vender')
    },
    alertMensaje(mensaje) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        icon: 'success',
      })

      Toast.fire({
        text: mensaje,
      })
    },
    quitarCarro(elemento) {
      if (elemento.cantidadComprar > 1) {
        elemento.cantidadComprar--
      } else {
        if (this.carro.length) {
          const index = this.carro.indexOf(elemento)
          if (index > -1) {
            this.carro.splice(index, 1)
          }
        }
      }
      this.alertMensaje('Se ha quitado un producto del carro')
    },
    anadirCarro(elemento) {
      if (!this.carro.includes(elemento)) {
        this.carro.push(elemento)
        elemento.cantidadComprar = 1
      } else {
        elemento.cantidadComprar++
      }
      this.alertMensaje('Se ha agregado un producto al carro')
    },
    async obtenerProductos() {
      const res = await this.$axios.$get('/productos')
      res.forEach((element) => {
        element.cantidadComprar = 0
      })
      this.productos = res
    },
  },
}
</script>
<style lang="scss">
.carrito {
  position: absolute;
  top: 10px;
  right: 20px;
}
</style>
