//Deze functies/data worden direct geladen
    window.onload = function (){
        weerOpvragenNL('250542');
    }
    var apiKey = 'KqWDMjBwgK4J25Sd7xO0rtPZf5U3OU1n';
    //var locatie = '250542';

//Deze functie vraagt het weer aan de weer-api
    function weerOpvragenNL(deLocatie){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){ 
            if(this.readyState == 4){ 
                var x = JSON.parse(this.responseText);
                //console.log(x);				
                document.getElementById("temperatuurNL").innerHTML = x[0].Temperature.Metric.Value + " &#8451;";
                document.getElementById("regenNL").innerHTML = x[0].HasPrecipitation;
                document.getElementById("weersOmschrijvingNL").innerHTML = x[0].WeatherText;
                temperatuurValue();
            }
        }
        var urllinkje = "http://dataservice.accuweather.com/currentconditions/v1/" + deLocatie + "?apikey=" + apiKey;       
        xhr.open ("GET", urllinkje, true );
        xhr.send(); 
    }

//Locatie input
    function naamInput(){
        var inputStad = document.getElementById("locatieInput").value;
        return inputStad;
    }

//Locatie Key ophalen
    function locatieOphalen(){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(this.readyState == 4){
                var string = JSON.parse(this.responseText);
                console.log(string[0].Key);
                //locatie = string[0].Key;
                weerOpvragenNL(string[0].Key);
            }
        }
        var naamStad = naamInput();
        var urllinkje = "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=" + apiKey + "&q=" + naamStad;
        xhr.open ("GET", urllinkje, true );
        xhr.send();
    }
    function temperatuurValue(){
        var x = document.getElementById("temperatuurNL").innerHTML;
        var temp = parseInt(x);
        console.log(temp);
        if(temp>=20){
            document.getElementById("Plaatje").src="boots short.png";
        }
        else{
            document.getElementById("Plaatje").src="boots long.png";
        };
    }