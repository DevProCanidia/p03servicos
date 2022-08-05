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

	/*
	initialize();

	var conteudo = '<p style="color:black;font-size:12px;padding:10px 0;border:1px solid red;">Rua Tulipa, Bairro Jardim Iracema - Fortaleza-CE</p>';
	addMarker(-3.7171655,-38.58053,'',conteudo,true);

	//Função nativa do js: executa no momento que vc personalizar
		setTimeout(function(){ seta 2 funções mostrar e tempo
		map.panTo({'lat':-3.723540,'lng':-38.563840})//1-posição a ser mostrada
	},5000)//2-tempo de 5segundos para executar*/

	/* Método de trocar o endereço da visão de mapa 
	map.panTo({'lat':-3.723540,'lng':-38.563840});
	*/

	/*Método de zoom*/

	//}
})