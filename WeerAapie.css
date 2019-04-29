<html>
	<head>
		<script>
			function weerOpvragen(){
                var xhr = new XMLHttpRequest(); //statement 1
                xhr.onreadystatechange = function(){ //statement 2
                    if(this.readyState == 4){ //statement 5
                        var x = JSON.parse(this.responseText);
						alert(x);
						console.log(x);				
                        document.getElementById("temperatuur").innerHTML = x[0].Temperature.Metric.Value; //statement 6
                       	document.getElementById("datumVandaag").innerHTML = x[0].WeatherText;
                    }
                }
                xhr.open("GET", "http://dataservice.accuweather.com/currentconditions/v1/249758?apikey=CHnvgwLclYVeRLCsEEITZH7LI2XV5m0N", true); //statement 3
                xhr.send(); //statement 4
			}
		</script>	
	</head>
</html>


