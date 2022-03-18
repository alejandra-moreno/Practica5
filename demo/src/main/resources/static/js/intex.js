
//Zoom en imágenes -> JQUERY

$(document).ready(function(){
    $('.zoom').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });
});

$(document).ready(function(){
    $('.icon-zoom').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });
});


///////////////////////////////////////////

const llamadaAPI = {
    ini: () => {
        document
            .getElementById("btnGet")
            .addEventListener('click',llamadaAPI.fetchWeather);

        document
            .getElementById("btnCurrent")
            .addEventListener('click',llamadaAPI.getLocalitation);

    },

    fetchWeather: (ev) => {
        let lat = document.getElementById('latitude').value; //Valor latitud
        let lon = document.getElementById('longitude').value; //Valor longitud
        let key = '88fc269efe180b6a3086054d9574c3b6';
        let lang = 'es'; //Se pone como idioma predeterminado el inglés
        let units = 'metric';
        //url con los atrubutos definidos que pueden variar
        let url = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=${units}&lang=${lang}`;

        let llamar = async()=>{
            await fetch(url,{
                method : "GET"}
            )
            //response object
            .then(resp => {
                //Comprobamos si obtenemos errores -> Si hay enviamos un error -> catch()
                //Si se produce un error devuelve el estatus en el que se encuentra
                if(!resp.ok) throw new Error(resp.statusText);
                //Funciona
                return resp.json(); 
            })
            .then(data => {
                llamadaAPI.showWeather(data);
                llamadaAPI.graficaFunction(data);
            })
            .catch(console.err);
        }
        
        llamar();  
    },
    getLocalitation: (ev) =>{
        let options = {
            enableHighAcuuracy: true,
            timeout: 1000*10, //10 seg
            maximumAge: 1000*60*5 //5 min
        };
        navigator.geolocation.getCurrentPosition(llamadaAPI.coordenadas,llamadaAPI.error,options)
    },
    coordenadas: (position) =>{
        document.getElementById('latitude').value = position.coords.latitude.toFixed(2);
        document.getElementById('longitude').value = position.coords.longitude.toFixed(2);
    },
    error: (err) =>{
        alert.error(error);
    },
    showWeather: (resp) => {
        console.log(resp);
        let row = document.querySelector('.weather.row');
        let titulo = document.querySelector('.weather.header');

        //clear out the old weather and add the new
        // row.innerHTML = '';
        titulo.innerHTML = resp.timezone;
        
        row.innerHTML = resp.daily
          .map((day, idx) => {
            if (idx <= 3) { 
                //Cuatro primeros días
              let dt = new Date(day.dt * 1000); //timestamp * 1000
              let sr = new Date(day.sunrise * 1000).toTimeString();
              let ss = new Date(day.sunset * 1000).toTimeString();
              let mr = new Date(day.moonrise * 1000).toTimeString();
              let ms = new Date(day.moonset * 1000).toTimeString();
              return `<div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title p-2">${dt.toDateString()}</h5>
                                <img
                                    src="http://openweathermap.org/img/wn/${
                                        day.weather[0].icon
                                    }@4x.png"
                                    class="card-img-top align-content-center justify-content-center"
                                    style="width: 10rem;"
                                    alt="${day.weather[0].description}"
                                />
                            </div>
                            <div class="card-body shadow">
                                <h3 class="card-title">${day.weather[0].main}</h3>
                                <p class="card-text">High ${day.temp.max}&deg;C Low ${
                            day.temp.min
                        }&deg;C</p>
                                <p class="card-text">High Feels like ${
                                    day.feels_like.day
                                }&deg;C</p>
                                <p class="card-text">Pressure:  ${day.pressure}mb</p>
                                <p class="card-text">Humidity:  ${day.humidity}%</p>
                                <p class="card-text">UV Index:  ${day.uvi}</p>
                                <p class="card-text">Precipitation:  ${day.pop * 100}%</p>
                                <p class="card-text">Dewpoint:  ${day.dew_point}</p>
                                <p class="card-text">Wind:  ${day.wind_speed}m/s, ${
                            day.wind_deg
                        }&deg;</p>
                                <hr />
                                <p class="card-text">Sunrise ${sr}</p>
                                <p class="card-text">Sunset ${ss}</p>
                                <p class="card-text">Moonrise ${mr}</p>
                                <p class="card-text">Moonset ${ms}</p>
                            </div>
                        </div>
                        
                    </div>`;
            }
          })
          .join(' ');
        },
    graficaFunction: (resp) =>{
        let valoresDia = [];
        let valoresNoche = [];
        let date = [];

        for(let i = 0; i<7; i++){
            valoresDia.push(resp.daily[i].temp.day);
            valoresNoche.push(resp.daily[i].temp.night);
            let dt = new Date(resp.daily[i].dt * 1000); //timestamp * 1000
            date.push(dt.toString().substring(0, 15));
        }

        console.log(valoresDia);
        console.log(valoresNoche);
        console.log(date);

        const data = {
            label : [],
            datasets : [{ 
                data: [],
                label: 'Temperatura diurna',
                borderColor: "green",
                fill: false
              }, { 
                data: [],
                label: 'Temperatura nocturna',
                borderColor: "blue",
                fill: false
              }]
        };
        const config = {
            type : "line",
            data
        };

        const myChart = new Chart(
            document.getElementById('tiempoChart'),
            config
        );

        myChart.config.data.labels = date;
        myChart.config.data.datasets[0].data = valoresDia;
        myChart.config.data.datasets[1].data = valoresNoche;
        myChart.update();
        
    }
    };

    



llamadaAPI.ini();

/////////////////////////////////////////

function buscarMenu(){
    let busqueda = document.getElementById('buscar');

    if(busqueda.value.toLowerCase()=="con el medio ambiente"){
        window.open('con-el-medio-ambiente.html');
    }
    if(busqueda.value.toLowerCase()=="con las personas"){
        window.open('con-las-personas.html');
    }
    if(busqueda.value.toLowerCase()=="consejo de administracion"){
        window.open('consejo-de-administracion.html');
    }
    if(busqueda.value.toLowerCase()=="inditex en el mundo"){
        window.open('inditex-en-el-mundo.html');
    }
    if(busqueda.value.toLowerCase()=="inversores y accionistas"){
        window.open('inversores-y-accionistas.html');
    }
    if(busqueda.value.toLowerCase()=="nuestra historia"){
        window.open('nuestra-historia.html');
    }
    if(busqueda.value.toLowerCase()=="con las personas"){
        window.open('con-las-personas.html');
    }
    if(busqueda.value.toLowerCase()=="consejo de administracion"){
        window.open('consejo-de-administracion.html');
    }
    if(busqueda.value.toLowerCase()=="inditex en el mundo"){
        window.open('inditex-en-el-mundo.html');
    }
    if(busqueda.value.toLowerCase()=="informacion relativa al tiempo"){
        window.open('tiempo.html');
    }
    
}

buscarMenu();



