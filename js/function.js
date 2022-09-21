window.onload = function() {
	
	var map;

	function initialize(){
		var mapPro = {
			center: new google.maps.LatLng(-3.71722,-38.54306),/**/
			scrollWheel: false, /*O mapa não acompanha o mouse*/
			zoom: 12,/**/
			/*mapTypeId:google.maps.MapTypeId.SATELLITEMAP*/
			mapTypeId: "roadmap"
		}
		map = new google.maps.Map(document.getElementById("mapa"),mapPro);
	}

	/*Criando um marcador no mapa*/
	function addMarker(lat,long,icon,content,click){
		var latLng = {'lat':lat,'lng':long};

		var marker = new google.maps.Marker({
			position:latLng,
			map:map,
			icon:icon
			
		});
		
		var infoWindow = new google.maps.InfoWindow({
			content:content,
			maxWidth:200,
			pixelOffset: new google.maps.Size(0,20)
		});

		/* criando um marcador personalizado*/
			google.maps.event.addListener(marker,'click',function(){
			infoWindow.open(map,marker);
		});
		
		
		if(click == true){
			google.maps.event.addListener(marker,'click',function(){
				infoWindow.open(map,marker);
			});

		}else{
			infoWindow.open(map,marker);
		}
	}


}