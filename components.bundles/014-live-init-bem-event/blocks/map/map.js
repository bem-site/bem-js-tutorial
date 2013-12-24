modules.define('i-bem__dom', ['jquery', 'ymaps'], function(provide, $, ymaps, DOM) {

DOM.decl('map', {

    onSetMod: {
        'js' : {
            'inited' : function () {
                var address = this.params['address'];
                var myMap = new ymaps.Map (this.domElem[0], {
                    center: [55.76, 37.64],
                    zoom: 7
                });
                ymaps.geocode(address).then(function(res){
                var firstGeoObject = res.geoObjects.get(0),
                    // Координаты геообъекта.
                    coords = firstGeoObject.geometry.getCoordinates(),
                    // Область видимости геообъекта.
                    bounds = firstGeoObject.properties.get('boundedBy');

                    //myMap.geoObjects.add(firstGeoObject);
                    myMap.setBounds(bounds, {
                        checkZoomRange: true // проверяем наличие тайлов на данном масштабе.
                    });
                    var myPlacemark = new ymaps.Placemark(coords, {
                        iconContent: address,
                    }, {
                        preset: 'twirl#violetStretchyIcon'
                    });

                    myMap.geoObjects.add(myPlacemark);
                });
            }
        }
    }

});

provide(DOM);

});
