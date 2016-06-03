// Google maps pin tooltip	
	var markers = [
    	{
       		"lat": '48.019849',
           "lng": '16.244016',
		  
			"description": 'Sreative<br/><a href="http://www.acrocapoeira.com/sreative" style="color:#ef3c3c; font-weight:800;">Get it now</a>'
        }
	];
	
	
	// Google maps main api
	window.onload = function () {
		var mapOptions = {
			center: new google.maps.LatLng(markers[0].lat, markers[0].lng),
        	zoom: 12,
			flat: true,
			scrollwheel:false,
			panControl:false,
			zoomControl:true,
			streetViewControl: false,
			mapTypeControl: false,
		
	// Google maps style	
           	styles: [{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#f7f1df"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#d0e3b4"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#fbd3da"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#bde6ab"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffe15f"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efd151"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"black"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#cfb2db"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a2daf2"}]}],
           	mapTypeId: google.maps.MapTypeId.ROADMAP
        };
			var infoWindow = new google.maps.InfoWindow();
			var map = new google.maps.Map(document.getElementById("map"), mapOptions);
			for (i = 0; i < markers.length; i++) {
			var data = markers[i]
           	var myLatlng = new google.maps.LatLng(data.lat, data.lng);
			var marker = new google.maps.Marker({
           	position: myLatlng,
           	map: map,
        	icon: 'images/map-pin.png',
           	title: data.title
           	});
			(function (marker, data) {
           	google.maps.event.addListener(marker, "click", function (e) {
              	infoWindow.setContent(data.description);
              	infoWindow.open(map, marker);
              });
            })(marker, data);
        }
    };
	