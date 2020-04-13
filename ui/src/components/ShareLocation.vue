<template>
  <div class="content px-md-5">
    <h3 class="display-4">Share Location</h3>
    <p>
      Latitude:
      <span id="latitude"></span>&deg;
      <br />Longitude:
      <span id="longitude"></span>&deg;
    </p>
    <form action>
      <div id="map"></div>
      <button
        id="btn-share-location"
        @click="shareLocation"
        class="mt-3"
        type="button"
      >Share Location</button>
      <button @click="postChat" type="button" class="btn-post-chat">
        Send Location to rescuers
      </button>
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
    this.getAllCitizens();
    const citizens = this.citizens
    const chatWithCitizen = citizens.some(citizen => citizen.rescuer.toUpperCase() == 'YES');
    this.chatWithCitizen = chatWithCitizen;
    console.log('Here it is' + chatWithCitizen)
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
      citizens: [],
      loggedInUsername: "",
      loading: false,
      newChat: "" // should be the location
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
    },

    getAllCitizens() {
      let vm = this;
      vm.$http
        .get(api.GET_ALL_USERS)
        .then(({ data }) => {
          vm.citizens = data.data;
          
        })
        .catch(err => {
          alert(err);
        });
    },
    postChat() {
      let vm = this;
      let chatReceiver = null; // = citizen.rescuer === 'yes'

      if (vm.chatWithCitizen !== null)
        chatReceiver = vm.chatWithCitizen.username;

      let newChat = {
        sender: vm.loggedInUsername,
        content: vm.newChat,
        receiver: chatReceiver
      };
      if (vm.newChat.trim().length !== 0) {
        vm.$http
          .post(api.SAVE_CHAT, newChat)
          .then(() => {
            // console.log(data)
            // vm.chats = vm.chats.concat(newChat);
            vm.newChat = vm.lat + ", " +vm.lon;
          })
          .catch(err => {
            alert(err);
          });
      } else alert("Can not post empty chat!");
    }
  }
};
</script>

<style lang="scss" scoped>
#btn-share-location {
  margin-left: 96px;
  margin-right: 96px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
}
#map {
  height: 180px;
}
</style>