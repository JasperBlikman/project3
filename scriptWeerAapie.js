//--------------------------------------------------------------------
    
    window.onload = function (){
        weerOpvragenNL('250542');
<<<<<<< HEAD
    }
    var apiKey = '4GSkbh0bQb1LCFm7gxuOYolz1MvGr4Us';
=======
        datumWeergeven();
    } 
    var apiKey = 'tzsS7To53qb8bi9jUL8Y4ZZNCj7RVXZW';
>>>>>>> master

//--------------------------------------------------------------------
    
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

//--------------------------------------------------------------------
    
    function naamInput(){
        var inputStad = document.getElementById("locatieInput").value;
        if (inputStad == ""){
            inputStad = "de Bilt";
        }
        return inputStad;
    }

//--------------------------------------------------------------------

    function stadInTabelWeergeven(){
        document.getElementById("headerStad").innerHTML = document.getElementById("locatieInput").value;  
    }

//--------------------------------------------------------------------
    
    function inputLeegmaken(){
        document.getElementById("locatieInput").value = null;
    }    

//--------------------------------------------------------------------
    
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
        stadInTabelWeergeven();
        inputLeegmaken();
    }

    //------------------------------------------------------------------
    
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

    //------------------------------------------------------------------
    
    function datumWeergeven(){
        var datumVandaag = new Date();
        var dag = datumVandaag.getDate();
        var dag2 = ((dag < 10) ? "0" : "") + dag;
        var maand = datumVandaag.getMonth() + 1;
        var maand2 = ((maand < 10) ? "0" : "") + maand;
        var jaar = datumVandaag.getYear();
        var jaar4 = ((jaar < 1900) ? (jaar + 1900) : (jaar));
        document.getElementById("datumdiv").innerHTML = dag2 + "-" + maand2 + "-" + jaar4;
    }