//Deze functies/data worden direct geladen
    window.onload = function (){
        weerOpvragenNL('250542');
    }
    var apiKey = '4GSkbh0bQb1LCFm7gxuOYolz1MvGr4Us';

//Deze functie vraagt het weer aan de weer-api
    function weerOpvragenNL(deLocatie){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){ 
            if(this.readyState == 4){ 
                var x = JSON.parse(this.responseText);				
                document.getElementById("temperatuurNL").innerHTML = x[0].Temperature.Metric.Value + " &#8451;";
                document.getElementById("regenNL").innerHTML = x[0].HasPrecipitation;
                document.getElementById("weersOmschrijvingNL").innerHTML = x[0].WeatherText;
                temperatuurValue();
            }
        }
        var urlLinkje = "http://dataservice.accuweather.com/currentconditions/v1/" + deLocatie + "?apikey=" + apiKey;       
        xhr.open ("GET", urlLinkje, true );
        xhr.send(); 
    }

//Locatie input
    function naamInput(){
        var inputStad = document.getElementById("locatieInput").value;
        if (inputStad == ""){
            inputStad = "de Bilt";
        }
        return inputStad;
    }

//Locatie Key ophalen
    function locatieOphalen(){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(this.readyState == 4){
                var string = JSON.parse(this.responseText);
                weerOpvragenNL(string[0].Key);
            }
        }
        var naamStad = naamInput();
        var urlLinkje = "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=" + apiKey + "&q=" + naamStad;
        xhr.open ("GET", urlLinkje, true );
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