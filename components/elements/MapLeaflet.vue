<template>
  <div style="height:100vh; width:100vw" id="mapa">
    <LMap
      ref="map"
      :zoom="zoom"
      :center="center"
      :use-global-leaflet="false"
      :options="{ scrollWheelZoom: false }"
      @ready="onMapReady"
    >
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
        layer-type="base"
        name="OpenStreetMap"
      />
      
      <!-- Marcadores -->
      <LMarker
        v-for="(marker, index) in markers"
        :key="'marker-' + index"
        :lat-lng="marker.position"
      >
        <LTooltip>{{ marker.title }}</LTooltip>
      </LMarker>
      
      <!-- Ruta principal -->
      <LPolyline
        :lat-lngs="routeCoordinates"
        :color="routeStyle.color"
        :weight="routeStyle.weight"
        :opacity="routeStyle.opacity"
      />
    </LMap>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { LMap, LTileLayer, LMarker, LPolyline, LTooltip } from '@vue-leaflet/vue-leaflet'
import type { LatLngExpression, LatLngBounds, PointExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'

const lat = -32.3486; // Coordenadas aproximadas de Merlo, San Luis
const lng = -65.0135;

const zoom = ref(15)
const center = ref<PointExpression>([lat, lng])
const map = ref<InstanceType<typeof LMap> | null>(null)



const routeCoordinates = ref<LatLngExpression[]>([
  [-32.347468, -65.015774], // Punto de inicio
  [-32.34565635281955, -65.01572461888692],
  [-32.34560626400074, -65.01296771689846],
  [-32.346098802858286, -65.00937089832256],
  [-32.34679169195142, -65.00426223048012],
  [-32.34774336231472, -64.99591247326694],
  [-32.345263989638134, -64.99553698122006],
  [-32.342509051411625, -64.99630772801318],
  [-32.339587055641175, -64.99672274551682],
  [-32.33945347639471, -64.99570496444176],
  [-32.338835670007924, -64.99542828610599],
  [-32.33840988207011, -64.9944796746691]
]);
// Estilo de la ruta
const routeStyle = ref({
  color: 'red',
  weight: 6,
  opacity: 0.7
})

// Marcadores
const markers = ref([
  {
    position: [-32.347468, -65.015774] as LatLngExpression,
    title: '🚩 Entrada a Merlo'
  },
  {
    position: [-32.33840988207011, -64.9944796746691] as LatLngExpression,
    title: '🏁 Cabañas Dos Venados'
  }
])

// Función para ajustar el mapa a la ruta
const fitMapToRoute = () => {
  if (map.value?.leafletObject && routeCoordinates.value.length > 0) {
    const leafletMap = map.value.leafletObject
    
    // Crear bounds manualmente sin usar L.latLngBounds
    const bounds = routeCoordinates.value.reduce((acc, coord) => {
      if (Array.isArray(coord) && coord.length >= 2) {
        const latLng = [coord[0], coord[1]] as [number, number]
        if (acc === null) {
          return [[...latLng], [...latLng]]
        } else {
          return [
            [Math.min(acc[0][0], latLng[0]), Math.min(acc[0][1], latLng[1])],
            [Math.max(acc[1][0], latLng[0]), Math.max(acc[1][1], latLng[1])]
          ]
        }
      }
      return acc
    }, null as [[number, number], [number, number]] | null)

    if (bounds) {
      leafletMap.fitBounds(bounds, { padding: [20, 20] })
    }
  }
}

const onMapReady = () => {
  setTimeout(fitMapToRoute, 100)
}

onMounted(() => {
  // Ajustar el mapa después de que se monte el componente
  setTimeout(fitMapToRoute, 500)
})
</script>
