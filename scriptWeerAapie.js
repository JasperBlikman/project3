//Deze functies/data worden direct geladen
    window.onload = weerOpvragenNL;
    var apiKey = 'JTwI4fXtT7HhgGx8zwmGnIt44ZAqbMym';
    var locatie = '250542';

//Deze functie vraagt het weer aan de weer-api
    function weerOpvragenNL(){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){ 
            if(this.readyState == 4){ 
                var x = JSON.parse(this.responseText);
                //console.log(x);				
                document.getElementById("temperatuurNL").innerHTML = x[0].Temperature.Metric.Value + " &#8451;";
                document.getElementById("regenNL").innerHTML = x[0].HasPrecipitation;
                document.getElementById("weersOmschrijvingNL").innerHTML = x[0].WeatherText;
            }
        }
        var urllinkje = "http://dataservice.accuweather.com/currentconditions/v1/" + locatie + "?apikey=" + apiKey;       
        xhr.open ("GET", urllinkje, true );
        xhr.send(); 
    }

//Deze functie haalt de naam op uit het inputveld "locatieinput"
    function naaminput(){
        var inputstad = document.getElementById("locatieinput").value;
        return inputstad;
    }

//Deze functie stopt de stad uit het inputveld in de locatie-api en zorgt dat de variabele locatie een nieuwe inhoud (de locatieKey) heeft
    function locatieophalen(){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(this.readyState == 4){
                var string = JSON.parse(this.responseText);
                console.log(string);
                locatie = string[0].Key;
            }
        }
        var naamStad = naaminput();
        var urllinkje = "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=" + apiKey + "&q=" + naamStad;
        xhr.open ("GET", urllinkje, true );
        xhr.send();
    }