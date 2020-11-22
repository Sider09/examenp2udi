function iniciarMap(){
    var coord = {lat:-17.7847315 ,lng: -63.1794542};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 15,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}