
  var map,
      center,
      service, 
      marker,
      bounds,
      infowindow,
      request,
      
      placeReference;
      
    
  
  var cafeList = [
    ['Wide Open Road', -37.776451,144.961192,17],
    ['St Ali Coffee Roasters', -37.831233,144.960377,17],
    ['Market Lane Coffee', -37.845757,144.993288,17]
  ];
  //initial google map
  function initialize() {
    
    var mapOptions = {
      center: new google.maps.LatLng(-37.8269353,144.9519),
      zoom: 12
    };
    
    map = new google.maps.Map(document.getElementById("map"), mapOptions); 
    service = new google.maps.places.PlacesService(map);
    setList();
  }
  function setList(){
    for(var i = 0; i < cafeList.length; i++){
        var cafe = cafeList[i];
        var cafeLocation = new google.maps.LatLng(cafe[1], cafe[2]);
        var list = [];
        list.push([request = {location: cafeLocation, radius: 1, query: cafe[0]}]);
        /*marker = new google.maps.Marker({
          position: cafeLocation,
          map: map
        });*/
        return function(){
          for(var j = 0; j < list.length; j++){
            console.log(list[j]);
            
            service.textSearch(list[j][0], callback);

          }
        }
    }
  }
  function callback ( results, status) {  
      
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          if(results[i].name === request.query){
            console.log(results[i].name);
          }
        }
      }
    }

  function setInfo(msg, location, marker){

      //listening click to the marker
        google.maps.event.addListener(marker, 'click', function(){
          //close previous winfow if there is any open
          if(infowindow){infowindow.close();} 
          infowindow = new google.maps.InfoWindow({
            content: msg
          });
          infowindow.open(marker.get('map'), marker);
        
        });
    }

  


 
 initialize();
 


  /*function info(){
    infowindow = new google.maps.InfoWindow({
        content: '<div>hello</div>'
      });
      google.maps.event.addListener(marker, 'click', function(){
        infowindow.open(map, marker);
      });
  }
  
  function addMarker(location){
    marker = new google.maps.Marker({map:map, position: location});
    bounds.extend(location);
    map.fitBounds(bounds);

  }
  
    $('.address li').each(function(){
    var $address = $(this);
   
    geocoder.geocode({'address':$address.text()}, function(result, status){
      if(status == google.maps.GeocoderStatus.OK) {
        map.setZoom(13);
        addMarker(result[0].geometry.location);
        info();
      }
      
    });

  });

  google.maps.event.addDomListener(map, 'idle', function(){
    center = map.getCenter();
  });
  $(window).resize(function(){
    map.setCenter(center);
  });
      */