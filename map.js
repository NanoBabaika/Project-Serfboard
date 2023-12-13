let myMap;

const init = () => {
    myMap = new ymaps.Map("map", {
        center: [45.066115, 38.985679],
        zoom: 12,
        controls:[]
    });

    const coords = [
        [38.968108, 45.028738],
        [38.961065, 45.022922],
    ];


    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable:false,
        iconLayout:'default#image',
        iconImageHref:"./img/SVG/placeMark.svg",
        iconImageSize:[46, 57],
        iconImageOffset:[-35, -52]
    })

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    });

    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable('scrollZoom');
};

 
ymaps.ready(init);
 