import React from 'react'
import {FeatureGroup, GeoJSON, LayersControl, Map, TileLayer, WMSTileLayer} from 'react-leaflet';
import axios from 'axios';
import {CoordinatesControl} from 'react-leaflet-coordinates';
import {BoxZoomControl} from 'react-leaflet-box-zoom'
import Control from 'react-leaflet-control';
import {Button, Card, Collapse} from 'react-bootstrap';
import {FaInfo} from "react-icons/fa";

const {BaseLayer, Overlay} = LayersControl;

const popUpCustomOptions =
    {
        'maxWidth': '401',
        'width': '401',
        'className' : 'popupCustom'
    }

function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.title) {
        layer.bindPopup(feature.properties.popupContent, popUpCustomOptions);
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
            center: center,
            collapseOpen: false
        };
    }

    componentDidMount() {

        const dataUrl = 'https://polistes.net/idk/data.json';
        // const dataUrl = 'data.json';

        axios.get(dataUrl, {params: {}}
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

                        {/*<BaseLayer name="OSM B&W">*/}
                        {/*    <TileLayer*/}
                        {/*        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'*/}
                        {/*        url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"*/}
                        {/*    />*/}
                        {/*</BaseLayer>*/}

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

                        {/*<BaseLayer name="OpenTopoMap">*/}
                        {/*    <TileLayer*/}
                        {/*        url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"*/}
                        {/*        attribution='attribution: Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'*/}
                        {/*    />*/}
                        {/*</BaseLayer>*/}

                        <BaseLayer name="Bank Danych o Lasach">
                            <WMSTileLayer
                                attribution='&amp; Bank Danych o Lasach &copy; <a href="https://www.bdl.lasy.gov.pl/portal/">Bank Danych o Lasach</a> '
                                format="image/png"
                                layers={[1, 3, 5]}
                                url="https://mapserver.bdl.lasy.gov.pl/ArcGIS/services/WMS_BDL/mapserver/WMSServer"
                            />
                        </BaseLayer>

                        <BaseLayer name="Rezerwaty">
                            <WMSTileLayer
                                attribution='&amp; Generalna Dyrekcja Ochrony Środowiska &copy; <a href="http://geoserwis.gdos.gov.pl/mapy/">Generalna Dyrekcja Ochrony Środowiska</a> '
                                format="image/png"
                                url="http://sdi.gdos.gov.pl/wms?SERVICE=WMS&VERSION=1.1.1&LAYERS=Rezerwaty"
                            />
                        </BaseLayer>

                        <BaseLayer name="Parki Krajobrazowe">
                            <WMSTileLayer
                                attribution='&amp; Generalna Dyrekcja Ochrony Środowiska &copy; <a href="http://geoserwis.gdos.gov.pl/mapy/">Generalna Dyrekcja Ochrony Środowiska</a> '
                                format="image/png"
                                url="http://sdi.gdos.gov.pl/wms?SERVICE=WMS&VERSION=1.1.1&LAYERS=ParkiKrajobrazowe"
                            />
                        </BaseLayer>

                        <BaseLayer name="Parki Narodowe">
                            <WMSTileLayer
                                attribution='&amp; Generalna Dyrekcja Ochrony Środowiska &copy; <a href="http://geoserwis.gdos.gov.pl/mapy/">Generalna Dyrekcja Ochrony Środowiska</a> '
                                format="image/png"
                                url="http://sdi.gdos.gov.pl/wms?SERVICE=WMS&VERSION=1.1.1&LAYERS=ParkiNarodowe"
                            />
                        </BaseLayer>

                        <BaseLayer name="Obszary Chronionego Krajobrazu">
                            <WMSTileLayer
                                attribution='&amp; Generalna Dyrekcja Ochrony Środowiska &copy; <a href="http://geoserwis.gdos.gov.pl/mapy/">Generalna Dyrekcja Ochrony Środowiska</a> '
                                format="image/png"
                                url="http://sdi.gdos.gov.pl/wms?SERVICE=WMS&VERSION=1.1.1&LAYERS=ObszaryChronionegoKrajobrazu"
                            />
                        </BaseLayer>

                        <BaseLayer name="Natura 2000 - obszary ptasie">
                            <WMSTileLayer
                                attribution='&amp; Generalna Dyrekcja Ochrony Środowiska &copy; <a href="http://geoserwis.gdos.gov.pl/mapy/">Generalna Dyrekcja Ochrony Środowiska</a> '
                                format="image/png"
                                url="http://sdi.gdos.gov.pl/wms?SERVICE=WMS&VERSION=1.1.1&LAYERS=ObszarySpecjalnejOchrony"
                            />
                        </BaseLayer>

                        <BaseLayer name="Natura 2000 - obszary siedliskowe">
                            <WMSTileLayer
                                attribution='&amp; Generalna Dyrekcja Ochrony Środowiska &copy; <a href="http://geoserwis.gdos.gov.pl/mapy/">Generalna Dyrekcja Ochrony Środowiska</a> '
                                format="image/png"
                                url="http://sdi.gdos.gov.pl/wms?SERVICE=WMS&VERSION=1.1.1&LAYERS=SpecjalneObszaryOchrony"
                            />
                        </BaseLayer>

                        <Overlay checked name="Wyręby">
                            <FeatureGroup color="purple">
                                <GeoJSON key={data['key']} data={data} onEachFeature={onEachFeature}/>
                            </FeatureGroup>
                        </Overlay>

                    </LayersControl>

                    <CoordinatesControl position='bottomleft'/>

                    <BoxZoomControl
                        position="topleft"
                        sticky={false}
                    />

                    <Control position="topleft">
                        <Button variant="light"
                                onClick={() => this.setState({collapseOpen: !this.state.collapseOpen})}
                                aria-controls="example-collapse-text"
                                aria-expanded={this.state.collapseOpen}
                        >
                            <FaInfo/>
                        </Button>
                        <Collapse in={this.state.collapseOpen}>
                            <Card style={{width: '16rem'}}>
                                <Card.Body>
                                    <Card.Title>What is Lorem Ipsum?</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Lorem Ipsum</Card.Subtitle>
                                    <Card.Text>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type
                                        specimen book.
                                        It has survived not only five centuries, but also the leap into electronic
                                        typesetting, remaining essentially unchanged.
                                        It was popularised in the 1960s with the release of Letraset sheets containing
                                        Lorem Ipsum passages,
                                        and more recently with desktop publishing software like Aldus PageMaker
                                        including versions of Lorem Ipsum..
                                    </Card.Text>
                                    {/*<Card.Link href="#">Card Link</Card.Link>*/}
                                    {/*<Card.Link href="#">Another Link</Card.Link>*/}
                                </Card.Body>
                            </Card>
                        </Collapse>

                    </Control>

                </Map>
            </div>
        )
    }
}
