<template>
  <div class="content px-md-5">
    <h3 class="display-4">Share Location</h3>
    <p>
      Latitude: <span id = "latitude"> </span>&deg;
      <br />
      Longitude: <span id = "longitude"> </span>&deg;
      </p>
    <form action>
      <div id="map"></div>
      <button
        id="btn-share-location"
        @click="shareLocation"
        class="mt-3"
        type="button"
      >Share Location</button>
    </form>
  </div>
</template>

<script>
import * as api from "../helpers/api";
//     src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
//    integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
//    crossorigin=""

//const mymap = L.map('map').setView([51.505, -0.09], 13);

export default {
  name: "ShareLocation",
  created() {
    let user = this.$cookies.get("user");
    this.loggedInUsername = user.username;
    if ("geolocation" in navigator) {
      // console.log('Geolocation is available');
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        document.getElementById("latitude").textContent = lat;
        document.getElementById("longitude").textContent = lon;
        this.lat = lat;
        this.lon = lon;
        console.log(position);
      });
    } else {
      alert("Geolocation is not supported by your browser");
    }
  },
  data() {
    return {
      loggedInUsername: '',
    };
  },
  methods: {
    shareLocation() {
      let vm = this;
      vm.$http
        .put(api.UPDATE_USER_LOCATION + vm.loggedInUsername, {
          location: vm.lat + ", " + vm.lon
        })
        .then(response => {
          console.log(response);
          alert("Successfully shared!");
        })
        .catch(err => {
          alert(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#btn-share-location {
  margin-left: 96px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
}
#map {
  height: 180px;
}
</style>