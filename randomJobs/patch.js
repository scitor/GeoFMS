'use strict';

(function patch() {
    if (!geofs || !geofs.map || !geofs.map.addRunwayMarker)
        return setTimeout(patch, 10);

    const geofs_map_addRunwayMarker = geofs.map.addRunwayMarker;
    geofs.map.addRunwayMarker = function geofs_map_addRunwayMarker__patch(a) {
        const [,name,icao] = a.name.split('|');
        if (icao && icao.length) {
            const s = a.major ? 1 : 0;
            let ap = aList[s][icao];
            if (ap === undefined) {
                ap = [a.lat, a.lon, name];
            } else {
                const [lat,lon,apName] = ap;
                ap = [(lat+a.lat)/2, (lon+a.lon)/2, apName || name];
            }
            aList[s][icao] = ap;
        }
        return geofs_map_addRunwayMarker(a);
    };
})();