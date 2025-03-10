import * as React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import calcite components
import "@esri/calcite-components/dist/calcite/calcite.css";

import { setAssetPath } from "@esri/calcite-components/dist/components";
// CDN hosted assets
setAssetPath("https://js.arcgis.com/calcite-components/2.13.2/assets");

// import calcite components
// shell
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-shell-panel";
// Button
import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-icon";
import "@esri/calcite-components/dist/components/calcite-slider";
import "@esri/calcite-components/dist/components/calcite-navigation";
import "@esri/calcite-components/dist/components/calcite-navigation-logo";
// navigation user
import "@esri/calcite-components/dist/components/calcite-navigation-user";
// navigation menu
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-shell-panel";
import "@esri/calcite-components/dist/components/calcite-menu";
import "@esri/calcite-components/dist/components/calcite-menu-item";
// dialog
import "@esri/calcite-components/dist/components/calcite-dialog";
// label
import "@esri/calcite-components/dist/components/calcite-label";
// dropdown
import "@esri/calcite-components/dist/components/calcite-dropdown";
import "@esri/calcite-components/dist/components/calcite-dropdown-group";
import "@esri/calcite-components/dist/components/calcite-dropdown-item";
// Action Pad
import "@esri/calcite-components/dist/components/calcite-action-pad";
import "@esri/calcite-components/dist/components/calcite-action";
// Tooltip
import "@esri/calcite-components/dist/components/calcite-tooltip";
// link
import "@esri/calcite-components/dist/components/calcite-link";
// popover
import "@esri/calcite-components/dist/components/calcite-popover";
// icons
import "@esri/calcite-ui-icons";

// Import map components
import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-legend";
import "@arcgis/map-components/dist/components/arcgis-search";
import "@arcgis/map-components/dist/components/arcgis-editor";
import "@arcgis/map-components/dist/components/arcgis-sketch";
import "@arcgis/map-components/dist/components/arcgis-layer-list";
import "@arcgis/map-components/dist/components/arcgis-expand";
import "@arcgis/map-components/dist/components/arcgis-basemap-gallery";
import "@arcgis/map-components/dist/components/arcgis-placement";
// measurement
import "@arcgis/map-components/dist/components/arcgis-distance-measurement-2d";
import "@arcgis/map-components/dist/components/arcgis-area-measurement-2d";
// import portal
import Portal from "@arcgis/core/portal/Portal";
// identity
import IdentityManager from "@arcgis/core/identity/IdentityManager";

// import group layer
import GroupLayer from "@arcgis/core/layers/GroupLayer";



// function parcelsclicked(event) {
//   // console.log("Button clicked");
//   // get the sketch layer
//   const sketchLayer = document.querySelector("arcgis-sketch").layer;
//   // get the parcels layer
//   const parcelsLayer = document
//     .querySelector("arcgis-map")
//     .map.allLayers.find(
//       (layer) => layer.title === "Regrid_Nationwide_Parcel_Boundaries_May24"
//     );
//   // get the sketch graphics
//   const graphics = sketchLayer.graphics;
//   // get the parcels graphics
//   const parcelsGraphics = parcelsLayer.graphics;
//   // find the parcels that intersect the sketch graphics
//   const intersectingParcels = parcelsGraphics.filter((parcel) =>
//     graphics.some((graphic) => parcel.geometry.intersects(graphic.geometry))
//   );
//   // highlight the intersecting parcels
//   parcelsLayer.highlight(intersectingParcels);
// }

// Create a root React component
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <calcite-shell>
      {/* Header */}
      <calcite-navigation slot="header" id="header">
        <calcite-navigation-logo
          id="header-title"
          slot="logo"
          heading="R-STEP Solar Panel Planning"
          href="#"
          description="A web toolkit for solar panel planning"
        ></calcite-navigation-logo>
        <calcite-menu slot="content-end">
          <calcite-menu-item text="Map" icon-start="globe"></calcite-menu-item>
          {/* About Fab */}
          <calcite-menu-item
            text="About"
            icon-start="information"
            id="about-btn"
          ></calcite-menu-item>
          {/* GitHub Fab*/}
          <calcite-menu-item
            text="GitHub"
            icon-start="code"
            href="https://github.com/HumblePasty/rstep-siting-tool"
            target="_blank"
            id="about-btn"
          ></calcite-menu-item>
        </calcite-menu>
        {/* User */}
        <calcite-dropdown id="header-dropdown" slot="content-end">
          <calcite-navigation-user
            id="header-user"
            // slot="user"
            full-name="Jane Doe"
            username="jane.doe"
            slot="trigger"
          ></calcite-navigation-user>
          <calcite-dropdown-group
            group-title="User Settings"
            selection-mode="none"
          >
            <calcite-dropdown-item onClick={logout}>
              Log out
            </calcite-dropdown-item>
          </calcite-dropdown-group>
        </calcite-dropdown>
      </calcite-navigation>
      {/* Footer */}
      <div
        slot="footer"
        id="footer"
        justify-content="center"
        align-items="center"
      >
        Created by &nbsp;
        <a href="https://5lakesenergy.com/" target="_blank">
          5 Lakes Energy LLC
        </a>
        &nbsp; | &nbsp; Learn more about the &nbsp;
        <a
          href="https://www.energy.gov/eere/renewable-energy-siting-through-technical-engagement-and-planning-r-steptm"
          target="_blank"
        >
          R-STEP Program
        </a>
      </div>
      {/* Map */}
      <arcgis-map
        itemId="1d9aec5e950f46f9a35a0d399e7e0cf1"
        center="-83.74, 42.27"
        zoom="15"
        onarcgisViewReadyChange={onArcgisViewReadyChange}
      >
        {/* Actions */}
        <arcgis-placement position="top-left">
          <calcite-action-pad expanded="true" overlayPositioning="fixed">
            {/* Add Polygon Action */}
            <calcite-action
              text="Define Solar Array"
              icon="polygon"
              id="AddAction"
            ></calcite-action>
            <calcite-popover
              reference-element="AddAction"
              label="Add"
              overlayPositioning="fixed"
              autoClose
            >
              <arcgis-sketch
                id="my-sketch"
                onarcgisCreate={sketchCreated}
              ></arcgis-sketch>
            </calcite-popover>
            <calcite-action
              text="Upload Base Data"
              icon="upload"
              onClick={uploadActionClicked}
            ></calcite-action>
            <calcite-action
              text="Edit Base Data"
              icon="pencil"
              id="EditAction"
            ></calcite-action>
            <calcite-popover
              reference-element="EditAction"
              label="Edit"
              overlayPositioning="fixed"
              autoClose
              // scale="l"
            >
              <arcgis-editor></arcgis-editor>
            </calcite-popover>
            <calcite-action
              text="Add Clipping Features"
              icon="crop"
              id="CropAction"
            ></calcite-action>
            <calcite-popover
              reference-element="CropAction"
              label="Crop"
              overlayPositioning="fixed"
              autoClose
            >
              <calcite-action-pad expandDisabled expanded>
                <calcite-action
                  text="Add Building Footprints"
                  icon="footprint"
                  onClick={addBuildingFootprints}
                ></calcite-action>
                <calcite-action
                  text="Add Roads"
                  icon="curve"
                  onClick={addRoads}
                ></calcite-action>
                <calcite-action
                  text="Self-defined Polygon"
                  icon="polygon"
                  onClick={selfDefinedPolygon}
                ></calcite-action>
              </calcite-action-pad>
            </calcite-popover>
            <calcite-action
              id="EditBufferAction"
              text="Edit Buffer Distance"
              icon="rings"
              onClick={BufferActionclicked}
            >
              <calcite-popover
                id="EditBufferPopover"
                reference-element="EditBufferAction"
                label="Buffer"
                overlayPositioning="fixed"
                triggerDisabled
                autoClose
              >
                <calcite-label alignment="center">
                  Buffer Distance
                  <calcite-slider
                    id="BufferSlider"
                    min="0"
                    max="100"
                    step="1"
                    value="50"
                    label-handles
                    label-ticks
                    min-label="1"
                    max-label="100"
                  ></calcite-slider>
                </calcite-label>
              </calcite-popover>
            </calcite-action>
            <calcite-action
              text="View Clipped Results"
              icon="view-visible"
              onClick={clipResultClicked}
            ></calcite-action>
            <calcite-action
              text="Import from File"
              icon="upload"
              onClick={importBtnClicked}
            ></calcite-action>
            <calcite-action
              id="ExportAction"
              text="Export Results"
              icon="download"
              onClick={exportBtnClicked}
              disabled
            ></calcite-action>
            <calcite-action
              id="ClearAction"
              text="Clear"
              icon="trash"
              onClick={clearBtnClicked}
              disabled
            ></calcite-action>
            <calcite-tooltip slot="expand-tooltip">
              Toggle Action Bar
            </calcite-tooltip>
          </calcite-action-pad>
        </arcgis-placement>

        {/* Map Views */}
        <arcgis-placement position="top-right">
          <calcite-action-pad
            expanded="false"
            overlayPositioning="fixed"
            id="map-views-pad"
          >
            <calcite-action
              text="Basemap"
              icon="basemap"
              id="BasemapAction"
            ></calcite-action>
            <calcite-popover
              reference-element="BasemapAction"
              label="Basemap"
              overlayPositioning="fixed"
              autoClose
            >
              <arcgis-basemap-gallery></arcgis-basemap-gallery>
            </calcite-popover>
            <calcite-action
              text="Layer List"
              icon="layers"
              id="LayerListAction"
            ></calcite-action>
            <calcite-popover
              reference-element="LayerListAction"
              label="Layer List"
              overlayPositioning="fixed"
              autoClose
            >
              <arcgis-layer-list></arcgis-layer-list>
            </calcite-popover>
            <calcite-action
              text="Legend"
              icon="legend"
              id="LegendAction"
            ></calcite-action>
            <calcite-popover
              reference-element="LegendAction"
              label="Legend"
              overlayPositioning="fixed"
              autoClose
            >
              <arcgis-legend></arcgis-legend>
            </calcite-popover>
            <calcite-action
              text="Measure Distance"
              icon="measure-line"
              id="MeasureDistanceAction"
            ></calcite-action>
            <calcite-popover
              reference-element="MeasureDistanceAction"
              label="Measure Distance"
              overlayPositioning="fixed"
              autoClose
            >
              <arcgis-distance-measurement-2d></arcgis-distance-measurement-2d>
            </calcite-popover>
            <calcite-action
              text="Measure Area"
              icon="measure-area"
              id="MeasureAreaAction"
            ></calcite-action>
            <calcite-popover
              reference-element="MeasureAreaAction"
              label="Measure Area"
              overlayPositioning="fixed"
              autoClose
            >
              <arcgis-area-measurement-2d></arcgis-area-measurement-2d>
            </calcite-popover>
            {/* <calcite-tooltip slot="expand-tooltip">
              Toggle Action Bar
            </calcite-tooltip> */}
          </calcite-action-pad>
        </arcgis-placement>
      </arcgis-map>
    </calcite-shell>

    {/* Dialogs */}
    {/* About */}
    <calcite-dialog modal heading="About" id="about-dialog">
      <calcite-label>
        This is a web toolkit for solar panel planning.
      </calcite-label>
      <ul>
        <li>
          Start by adding a polygon to the map to represent a solar panel array.
        </li>
        <li>
          Use the "Edit Layers" button to edit the polygon or other layers on
          the map.
        </li>
        <li>
          You can also import and export GeoJSON files to save and share your
          work.
        </li>
        <li>Use the "Clear" button to remove all the graphics from the map.</li>
        <li>TBD...</li>
      </ul>
    </calcite-dialog>
    {/* Alert */}
    <calcite-alert icon="smile" id="buffer-alert" scale="m" autoCloseDuration="fast" autoClose>
      <div slot="title">Buffer Editing</div>
      <div slot="message">Please select a feature from the <b>"Selected Features"</b> Layer to continue</div>
      <calcite-button slot="controls" appearance="clear">
        Close
      </calcite-button>
    </calcite-alert>
  </StrictMode>
);

function onArcgisViewReadyChange(event) {
  // const view = event.detail;
  // console.log("MapView ready", event);
  // get the signed in user
  const portal = new Portal();
  portal.authMode = "immediate";
  portal.load().then(() => {
    // console.log("Portal loaded", portal);
    document.querySelector("#header-user").fullName = portal.user.fullName;
    document.querySelector("#header-user").username = portal.user.username;
    // get avatar
    document.querySelector("#header-user").avatarUrl = portal.user.thumbnailUrl;
  });
  const aboutBtn = document.getElementById("about-btn");
  const aboutDialog = document.getElementById("about-dialog");

  aboutBtn.addEventListener("click", () => {
    aboutDialog.open = true;
  });
  // Adjust the visibilities of the layers
  const map = event.target.map;
  map.allLayers.forEach((layer) => {
    if (layer.title === "Regrid_Nationwide_Parcel_Boundaries_May24") {
      layer.visible = false;
    }
    if (layer.title === "Michigan") {
      layer.visible = false;
    }
    if (layer.title === "Michigan Counties") {
      layer.visible = false;
    }
  });
  // there are two substation layers, delete the one that is not needed
  const substationLayer = map.allLayers.find(
    (layer) => layer.title === "Substations"
  );
  map.remove(substationLayer);

  // create a selected group layer
  const selectedLayer = new GroupLayer({
    title: "Selected Features",
    visible: true,
    visibilityMode: "independent",
    layers: [],
  });

  // add the selected layer to the map
  map.add(selectedLayer);

  // get buffer slider
  const bufferSlider = document.querySelector("#BufferSlider");
  // add event listener for slider change
  bufferSlider.addEventListener("calciteSliderChange", bufferSliderChange);
}

// function for log out
function logout() {
  // log out the user
  const myIdentityManager = IdentityManager;
  myIdentityManager.destroyCredentials();
  // reload the page
  window.location.reload();
}

// import esri request
import esriRequest from "@arcgis/core/request.js";
// esri graphic
import Graphic from "@arcgis/core/Graphic.js";
// esri feature layer
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";

function uploadActionClicked() {
  const portalUrl = "https://www.arcgis.com";

  const view = document.querySelector("arcgis-map").view;

  // the function to upload shp zip file
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".zip";
  input.onchange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    // reader.readAsArrayBuffer(file);
    reader.onload = (loadEvent) => {
      const params = {
        name: file.name,
        targetSR: view.spatialReference,
        maxRecordCount: 1000,
        enforceInputFileSizeLimit: true,
        enforceOutputJsonSizeLimit: true,
      };
      const resolution = view.resolution;
      params.generalize = true;
      params.maxAllowableOffset = resolution;
      params.reducePrecision = true;
      params.numberOfDigitsAfterDecimal = 0;

      // const filedata = loadEvent.target.result;
      const formData = new FormData();
      formData.append("filetype", "shapefile");
      formData.append("publishParameters", JSON.stringify(params));
      formData.append("f", "json");
      formData.append("file", file);

      esriRequest(portalUrl + "/sharing/rest/content/features/generate", {
        method: "POST",
        body: formData,
        // responseType: "json",
      }).then(function (response) {
        console.log(response);
        if (!response) {
          if (response.error) {
            console.error(response.error);
            return;
          }
        }
        // var layerName = response.featureCollection.layers[0].layerDefinition.name;
        addShapefileToMap(response.data.featureCollection);
      });
    };
    reader.readAsArrayBuffer(file);
  };
  input.click();
}

// import esri geometry
import Point from "@arcgis/core/geometry/Point.js";
import Polygon from "@arcgis/core/geometry/Polygon.js";
import Polyline from "@arcgis/core/geometry/Polyline.js";

function addShapefileToMap(featureCollection) {
  var layers = [];
  featureCollection.layers.forEach(function (layer) {
    var featureLayer = new FeatureLayer({
      objectIdField: "ObjectID",
    });

    switch (layer.featureSet.geometryType) {
      case "esriGeometryPoint":
        //Overwrite the geometry to an actual Point
        layer.featureSet.features.forEach(function (feature) {
          feature.geometry = new Point({
            x: feature.geometry.x,
            y: feature.geometry.y,
            spatialReference: feature.geometry.spatialReference,
          });
        });
        featureLayer.renderer = {
          type: "simple",
          symbol: { type: "simple-marker", size: 6, color: "black" },
        };
        break;
      case "esriGeometryPolygon":
        //Overwrite the geometry to an actual Polygon
        layer.featureSet.features.forEach(function (feature) {
          feature.geometry = new Polygon({
            rings: feature.geometry.rings,
            spatialReference: feature.geometry.spatialReference,
          });
        });
        featureLayer.renderer = {
          type: "simple",
          symbol: { type: "simple-fill", size: 6, color: "black" },
        };
        break;
      case "esriGeometryPolyline":
        //Overwrite the geometry to an actual Polyline
        layer.featureSet.features.forEach(function (feature) {
          feature.geometry = new Polyline({
            paths: feature.geometry.paths,
            spatialReference: feature.geometry.spatialReference,
          });
        });
        featureLayer.renderer = {
          type: "simple",
          symbol: { type: "simple-line", size: 6, color: "white" },
        };
        break;
      default:
        console.log("Not a valid shapefile");
    }

    featureLayer.source = layer.featureSet.features;
    layers.push(featureLayer);
  });
  const map = document.querySelector("arcgis-map").map;
  map.addMany(layers);
  // document.getElementById('upload-status').innerHTML = '';
}

function importBtnClicked() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".geojson";
  input.onchange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const geoJson = JSON.parse(event.target.result);
      console.log(geoJson);
      const sketchLayer = document.querySelector("#my-sketch").layer;
      sketchLayer.addMany(geoJson.features);
    };
    reader.readAsText(file);
  };
  input.click();
}

function exportBtnClicked() {
  // get the sketch layer
  const sketchLayer = document.querySelector("#my-sketch").layer;
  // get the graphics from the sketch layer
  const graphics = sketchLayer.graphics;
  // export the graphics to a GeoJSON file
  const geoJson = {
    type: "FeatureCollection",
    features: graphics.map((graphic) => graphic.toJSON()),
  };
  const blob = new Blob([JSON.stringify(geoJson)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "sketch.geojson";
  a.click();
}

function clearBtnClicked() {
  // clear the sketch layer
  document.querySelector("#my-sketch").layer.removeAll();

  // clear the measure widgets
  // document.querySelector("#measure-distance").viewModel.clear();
  // document.querySelector("#measure-area").viewModel.clear();

  // clear all selected features
  // document.querySelector("arcgis-map").map.allLayers.forEach((layer) =>
  //   layer.clearSelection()
  // );

  // disable the export button
  document.querySelector("#ExportAction").disabled = true;
  // disable the clear button
  document.querySelector("#ClearAction").disabled = true;
}

function sketchCreated(event) {
  // get the sketch layer
  const sketchLayer = document.querySelector("#my-sketch").layer;
  // add event listener for graphics change
  sketchLayer.graphics.on("after-changes", (event) => {
    // get the graphics
    // console.log("Graphics changed", event);
    // enable the export button if there are graphics
    document.querySelector("#ExportAction").disabled = event.length === 0;
    // enable the clear button if there are graphics
    document.querySelector("#ClearAction").disabled = event.length === 0;
    // exit create mode if there are graphics
    // document.querySelector("#my-sketch").cancel();
  });
}
// import query
import Query from "@arcgis/core/rest/support/Query.js";
// import GraphicsLayerView

function RoadActionclicked() {
  // get the sketch layer
  const sketchLayer = document.querySelector("#my-sketch").layer;
  // get the road layer
  const roadLayer = document
    .querySelector("arcgis-map")
    .map.allLayers.find((layer) => layer.title === "All Roads");

  // find the road graphics that intersect the sketch graphics
  const my_query = new Query();
  my_query.geometry = sketchLayer.graphics.items[0].geometry;
  my_query.spatialRelationship = "intersects";
  roadLayer.queryFeatures(my_query).then((result) => {
    // create a buffer around the road graphics
    const buffer = roadLayer.renderer.symbol.width;
    const bufferGraphics = result.features.map((feature) => {
      const geometry = feature.geometry.clone();
      geometry.buffer(buffer);
      return new Graphic({
        geometry: geometry,
        symbol: roadLayer.renderer.symbol.clone(),
      });
    });
    // create a graphic for the sketch geometry
    const sketchGraphic = sketchLayer.graphics.items[0];
    // clip the sketch geometry with the buffer graphics
    const clippedGraphics = bufferGraphics.map((graphic) => {
      const geometry = sketchGraphic.geometry.clone();
      geometry.clip(graphic.geometry);
      return new Graphic({
        geometry: geometry,
        symbol: sketchGraphic.symbol.clone(),
      });
    });
  });
}

// import Sketch
import Sketch from "@arcgis/core/widgets/Sketch.js";
// import GraphicsLayer
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer.js";

// on building footprints action clicked
function addBuildingFootprints() {
  // get the current view
  const view = document.querySelector("arcgis-map").view;

  // construct a new sketch
  const bldSketch = new Sketch({
    layer: new GraphicsLayer({
      title: "Building Footprints",
    }),
    view: view,
    creationMode: "single",
    updateOnGraphicClick: true,
  });

  // start the sketch
  bldSketch.create("polygon");

  // add the sketch to the map
  // document.querySelector("arcgis-map").map.add(bldSketch.layer);

  // add event listener for graphics change
  bldSketch.layer.graphics.on("after-add", (event) => {
    // log the coordinates of the graphic
    // console.log(event.item.geometry);
    // get the added graphic
    const graphic = event.item;
  });
}

// import union operation
import * as unionOperator from "@arcgis/core/geometry/operators/unionOperator.js";
// add buffer
import * as bufferOperator from "@arcgis/core/geometry/operators/bufferOperator.js";

// on roads action clicked
function addRoads() {
  // get the current view
  const view = document.querySelector("arcgis-map").view;
  // get current map
  const map = document.querySelector("arcgis-map").map;

  // construct a new sketch
  const roadSketch = new Sketch({
    layer: new GraphicsLayer({
      title: "Roads",
    }),
    view: view,
    creationMode: "single",
    updateOnGraphicClick: true,
  });

  // start the sketch
  roadSketch.create("rectangle");

  // add event listener for graphics change
  roadSketch.layer.graphics.on("after-add", (event) => {
    // log the coordinates of the graphic
    // console.log(event.item.geometry);
    // get the added graphic
    const graphic = event.item;
    // get the road layer
    const roadLayer = map.allLayers.find(
      (layer) => layer.title === "All Roads"
    );
    // query the road layer
    const query = roadLayer.createQuery();
    query.geometry = graphic.geometry;
    query.spatialRelationship = "intersects";
    roadLayer.queryFeatures(query).then((result) => {
      const selectedFeaturesLayer = map.allLayers.find((layer) => layer.title === "Selected Features")
      // if selected roads layer does not exist in the selected features layer, create it
      if (!selectedFeaturesLayer.allLayers.find((layer) => layer.title === "Selected Roads")) {
        // get the selected features
        const selectedRoads = new FeatureLayer({
          source: result.features,
          fields: result.fields,
          objectIdField: "OBJECTID",
          title: "Selected Roads",
          geometryType: result.geometryType,
          renderer: roadLayer.renderer,
          popupTemplate: roadLayer.popupTemplate,
        });
        // console.log("Selected layer created");
        // add the selected roads to the selected features layer
        selectedFeaturesLayer.add(selectedRoads);
      }
      else {
        // add the road graphics to the selected layer
        const selectedLayer = selectedFeaturesLayer.allLayers.find(
          (layer) => layer.title === "Selected Roads"
        );
        const addRoadsEdits = {
          addFeatures: result.features,
        };
        selectedLayer.applyEdits(addRoadsEdits);
      }
    });
  });
}

// on self defined polygon action clicked
function selfDefinedPolygon() {
  // get the current view
  const view = document.querySelector("arcgis-map").view;

  // construct a new sketch
  const polygonSketch = new Sketch({
    layer: new GraphicsLayer(),
    view: view,
    creationMode: "single",
    updateOnGraphicClick: true,
  });

  // start the sketch
  polygonSketch.create("polygon");

  // get the selected features layer
  const selectedLayer = document
    .querySelector("arcgis-map")
    .map.allLayers.find((layer) => layer.title === "Selected Features");

  // add event listener for graphics change
  polygonSketch.layer.graphics.on("after-add", (event) => {
    let graphic = event.item;
    // console.log("Polygon added", event.item);
    // if polygon layer does not exist in the selected features layer, create it
    if (!selectedLayer.allLayers.find((layer) => layer.title === "Selected Polygon")) {
      // get the added graphic
      // define the attributes
      graphic.attributes = {
        id: 1,
        name: "Self Defined Polygon 1",
      };
      // get the selected features
      const selectedPolygon = new FeatureLayer({
        source: [graphic],
        fields: [
          {
            name: "OBJECTID",
            alias: "ID",
            type: "oid",
          },
          {
            name: "name",
            alias: "Name",
            type: "string",
          }
        ],
        objectIdField: "OBJECTID",
        title: "Selected Polygon",
        geometryType: graphic.geometry.type,
        popupTemplate: {
          title: "{name}",
          content: "This is a self-defined polygon",
        },
      });
      // add the selected polygon to the selected features layer
      selectedLayer.add(selectedPolygon);
    }
    else {
      // get the selected polygon layer
      const selectedPolygonLayer = selectedLayer.allLayers.find(
        (layer) => layer.title === "Selected Polygon"
      );
      // get the number of graphics in the layer
      selectedPolygonLayer.queryFeatureCount().then((count) => {
        // console.log(graphic);
        // polygonCount = count;
        graphic.attributes = {
          id: count + 1,
          name: `Self Defined Polygon ${count + 1}`,
        };
        // create edits
        const addPolygonEdits = {
          addFeatures: [graphic],
        };
        // apply edits
        selectedPolygonLayer.applyEdits(addPolygonEdits);
      });
    }
  });
}

// import calcite alert
import "@esri/calcite-components/dist/components/calcite-alert";

function BufferActionclicked() {
  const BufferEditPopOver = document.querySelector("#EditBufferPopover");
  if (BufferEditPopOver.open) {
    BufferEditPopOver.open = false;
    return;
  }
  // get the current view
  const view = document.querySelector("arcgis-map").view;
  // create a buffer layer if it does not exist
  if (!view.map.allLayers.find((layer) => layer.title === "Buffers")) {
    const bufferLayer = new GraphicsLayer({
      title: "Buffers",
    });
    view.map.add(bufferLayer);
  }
  // if there is no popup, raise an alert
  // popup={}
  if (Object.keys(view.popup).length === 0 || view.popup.visible === false) {
    console.log("No popup");
    // bring up an alert
    document.querySelector("#buffer-alert").open = true;
  }
  else {
    // open the buffer popover
    BufferEditPopOver.open = true;
  }
}

// slider change
function bufferSliderChange(event) {
  // get the current view
  const view = document.querySelector("arcgis-map").view;
  // get the popup features
  const popupFeatures = view.popup.features;
  // get the selected features layer
  const selectedLayer = view.map.allLayers.find(
    (layer) => layer.title === "Selected Features"
  );
  // get the buffer layer
  const bufferLayer = view.map.allLayers.find(
    (layer) => layer.title === "Buffers"
  );
  // get the buffer slider value
  var sliderValue = event.target.value;
  // create a buffer around the selected features
  const bufferGraphics = popupFeatures.map((feature) => {
    const geometry = feature.geometry.clone();
    const bufferGeometry = bufferOperator.execute(geometry, sliderValue);
    return new Graphic({
      geometry: bufferGeometry,
      symbol: {
        type: "simple-fill",
        color: [0, 0, 0, 0.5],
        outline: {
          color: [0, 0, 0, 1],
          width: 1,
        },
      },
    });
  });

  // add the buffer graphics to the buffer layer
  bufferLayer.addMany(bufferGraphics);
}

// clip opeator
import * as differenceOperator from "@arcgis/core/geometry/operators/differenceOperator.js";

// on clip result action clicked
function clipResultClicked() {
  // get the sketch layer (solar array)
  const sketchLayer = document.querySelector("#my-sketch").layer;
  // get the buffers layer
  const bufferLayer = document
    .querySelector("arcgis-map")
    .map.allLayers.find((layer) => layer.title === "Buffers");
  // subtract the buffer graphics from the sketch graphics
  const sketchGraphics = sketchLayer.graphics;
  const bufferGraphics = bufferLayer.graphics;
  // convert to polygon
  const clippedGraphics = differenceOperator.execute(sketchGraphics.items[0].geometry, bufferGraphics.items[0].geometry);
  console.log("Clipped Graphics", clippedGraphics
  );
  // create a new layer for the clipped result
  const clippedLayer = new GraphicsLayer({
    title: "Clipped Result",
  });
  // add the clipped graphics to the clipped layer
  clippedLayer.addMany(clippedGraphics);
  // add the clipped layer to the map
  document.querySelector("arcgis-map").map.add(clippedLayer);
}
