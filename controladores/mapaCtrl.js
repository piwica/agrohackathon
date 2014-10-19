app.controller("mapactrl", [ "$scope", function($scope) {
    angular.extend($scope, {
        mycenter: {
            lat: 42.33,
            lng: -2.50,
            zoom: 7
        },
        layers: {
            baselayers: {
                osm: {
                    name: "OpenStreetMap (XYZ)",
                    url: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                    type: "xyz",
                    layerParams: {},
                    layerOptions: {
                        attribution:'© OpenStreetMap contributors',
                    }
                },
                cycle: {
                    name: 'OpenCycleMap',
                    type: 'xyz',
                    url: 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
                    layerOptions: {
                        subdomains: ['a', 'b', 'c'],
                        attribution: '© OpenCycleMap contributors',
                        continuousWorld: true
                    }
                },
                satellite: {
                    name: 'satellite',
                    type: 'wms',
                    url: 'http://www.ign.es/wms-inspire/pnoa-ma',
                    layerOptions: {
                        layers:"OI.OrthoimageCoverage",
                        format: "image/png",
                        attribution: 'PNOA © Instituto Geográfico Nacional de España'
                    }
                }
            },
            overlays: {
                Camino: {
                    name: "Camino de Santiago",
                    type: "wms",
                    visible: true,
                    url: "http://www.ign.es/wms-inspire/camino-santiago?SERVICE=WMS&",
                    layerOptions: {
                        layers: "PS.ProtectedSite",
                        format: "image/png",
                        transparent: true,
                        attribution: "© Instituto Geografico Nacional de España"
                    }
                },
                Provincias: {
                    name: "Provincias",
                    type: "wms",
                    url: "http://www.ign.es/wms-inspire/camino-santiago?SERVICE=WMS&",
                    layerOptions: {
                        layers: "AU.AdministrativeUnit",
                        format: "image/png",
                        transparent: true,
                        attribution: "© Instituto Geografico Nacional de España"
                    }
                },
                CiudadesCamino: {
                    name: "Ciudades del Camino",
                    type: "wms",
                    url: "http://www.ign.es/wms-inspire/camino-santiago?SERVICE=WMS&",
                    layerOptions: {
                        layers: "GN.GeographicalNames",
                        format: "image/png",
                        transparent: true,
                        attribution: "© Instituto Geografico Nacional de España"
                    }
                }
            }
        }

    });
}]);