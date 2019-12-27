ymaps.ready(init);

function init() {
    var map = new ymaps.Map('map', {
        center: [59.94, 30.32],
        zoom: 12,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    var placemark = new ymaps.placemark([59.97,30.31],{
      ballonContent:'<div class="popup">'
    })

    map.geoObjects.add(placemark);

    const renderBallon = (coords, address)=>{
        var layoutClass = ymaps.tempLateLayoutFactory.createClass(
            
        )
    }

    map.events.add('click', (e) => {
        const coords = e.get('coords');
        ymaps.geocode(coords);


        const BallonLayout=renderBallon;

        map.ballon.open(coords, null, {
            layout: BallonLayout
        })
    })
  }
