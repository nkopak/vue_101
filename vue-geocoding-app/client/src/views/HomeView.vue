<template>
  <div class="h-screen relative">
    <GeoErrorModal
      @closeGeoError="closeGeoError"
      v-if="geoError"
      :geoErrorMessage="geoErrorMessage"
    />
    <MapFeatures
      :coords="coords"
      :fetchCoords="fetchCoords"
      :searchResults="searchResults"
      @plotResult="plotResult"
      @getGeoLocation="getGeoLocation"
      @toggleSearchResults="toggleSearchResults"
      @removeResult="removeResult"
    />
    <div id="map" class="h-full z-[1]"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import L from "leaflet";
import { onMounted, ref } from "vue";
import GeoErrorModal from "../components/GeoErrorModal.vue";
import MapFeatures from "../components/MapFeatures.vue";

export default {
  name: "HomeView",
  components: { GeoErrorModal, MapFeatures },
  setup() {
    let map;
    onMounted(() => {
      map = L.map("map").setView([51.505, -0.09], 13);

      L.tileLayer(
        `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${process.env.VUE_APP_API_KEY}`,
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          access_token: process.env.VUE_APP_API_KEY,
        }
      ).addTo(map);

      map.on("moveend", () => {
        closeSearchResults();
      });

      getGeoLocation();
    });

    const coords = ref(null);
    const fetchCoords = ref(null);
    const geoMarker = ref(null);
    const geoError = ref(null);
    const geoErrorMessage = ref("TEst");
    const resultMarker = ref(null);
    const searchResults = ref(null);

    const getGeoLocation = () => {
      if (coords.value) {
        coords.value = null;
        sessionStorage.removeItem("coords");
        map.removeLayer(geoMarker.value);
        return;
      }

      if (sessionStorage.getItem("coords")) {
        coords.value = JSON.parse(sessionStorage.getItem("coords"));
        plotGeolocation(coords.value);
        return;
      }

      fetchCoords.value = true;
      navigator.geolocation.getCurrentPosition(setCoords, getLocationError);
    };

    const setCoords = (position) => {
      fetchCoords.value = null;

      const setSessionCoords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      sessionStorage.setItem("coords", JSON.stringify(setSessionCoords));

      coords.value = setSessionCoords;

      plotGeolocation(coords.value);
    };

    const getLocationError = (error) => {
      fetchCoords.value = null;
      geoError.value = true;
      geoErrorMessage.value = error.message;
    };

    const plotGeolocation = (coords) => {
      const customMarker = L.icon({
        iconUrl: require("../assets/map-marker-red.svg"),
        iconSize: [35, 35],
      });

      geoMarker.value = L.marker([coords.lat, coords.lng], {
        icon: customMarker,
      }).addTo(map);

      map.setView([coords.lat, coords.lng], 10);
    };

    const closeGeoError = () => {
      geoError.value = null;
      geoErrorMessage.value = null;
    };

    const plotResult = (coords) => {
      if (resultMarker.value) {
        map.removeLayer(resultMarker.value);
      }

      const customMarker = L.icon({
        iconUrl: require("../assets/map-marker-blue.svg"),
        iconSize: [35, 35],
      });

      resultMarker.value = L.marker(
        [coords.coordinates[1], coords.coordinates[0]],
        {
          icon: customMarker,
        }
      ).addTo(map);

      map.setView([coords.coordinates[1], coords.coordinates[0]], 14);
      closeSearchResults();
    };

    const toggleSearchResults = () => {
      searchResults.value = !searchResults.value;
    };

    const closeSearchResults = () => {
      searchResults.value = null;
    };

    const removeResult = () => {
      map.removeLayer(resultMarker.value);
    };

    return {
      coords,
      fetchCoords,
      searchResults,
      geoMarker,
      closeGeoError,
      geoError,
      geoErrorMessage,
      getGeoLocation,
      resultMarker,
      plotResult,
      toggleSearchResults,
      closeSearchResults,
      removeResult,
    };
  },
};
</script>
