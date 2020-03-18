import React from 'react'
import {FeatureGroup, GeoJSON, LayersControl, Map, TileLayer} from 'react-leaflet';
import axios from 'axios';
import {CoordinatesControl} from 'react-leaflet-coordinates';
// import 'leaflet/dist/leaflet.css'

const {BaseLayer, Overlay} = LayersControl;

function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.title) {
        layer.bindPopup(feature.properties.popupContent);
    }
}

const center = [49.20, 22.5];

export default class MainMap extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            zoom: 12,
            data: [],
            collapsed: true,
            // selected: "home",
            center: center,
        };

    }

    componentDidMount() {

        const dataUrl = 'https://polistes.net/idk/data.json';
        // const dataUrl = 'data.json';

        axios.get(dataUrl, {params:{}}
        )
            .then(({data}) => this.setState({data}))
            .catch(error => Promise.reject(error));
    };

    render() {

        const data = this.state.data;
        // console.log(data);

        return (
            <div>
                <Map center={this.state.center} zoom={this.state.zoom}>

                    <LayersControl position="topright">
                        <BaseLayer checked name="OSM Mapnik">
                            <TileLayer
                                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                        </BaseLayer>

                        <BaseLayer name="OSM B&W">
                            <TileLayer
                                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
                            />
                        </BaseLayer>


                        <BaseLayer name="ESRI Imagery">
                            <TileLayer
                                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png"
                                attribution='&copy; <a href="Esri &mdash">Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community</a> contributors'
                            />
                        </BaseLayer>

                        <BaseLayer name="ESRI NatGeoWorldMap">
                            <TileLayer
                                url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
                                attribution='&copy; <a href="Esri &mdash">Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community</a> contributors'
                            />
                        </BaseLayer>

                        <BaseLayer name="OpenTopoMap">
                            <TileLayer
                                url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                                attribution='attribution: Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
                            />
                        </BaseLayer>


                        <Overlay checked name="Wyręby">
                            <FeatureGroup color="purple">
                                <GeoJSON key={data['key']} data={data} onEachFeature={onEachFeature}/>
                            </FeatureGroup>
                        </Overlay>

                    </LayersControl>

                    <CoordinatesControl position='bottomleft'/>
                </Map>
            </div>
        )
    }
}
