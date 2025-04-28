import * as React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import calcite style sheets
import "@esri/calcite-components/dist/calcite/calcite.css";

import { setAssetPath } from "@esri/calcite-components/dist/components";
// CDN hosted assets
setAssetPath("https://js.arcgis.com/calcite-components/2.13.2/assets");

// import calcite components
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-shell-panel";
import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-icon";
import "@esri/calcite-components/dist/components/calcite-slider";
import "@esri/calcite-components/dist/components/calcite-navigation";
import "@esri/calcite-components/dist/components/calcite-navigation-logo";
import "@esri/calcite-components/dist/components/calcite-navigation-user";
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-menu";
import "@esri/calcite-components/dist/components/calcite-menu-item";
import "@esri/calcite-components/dist/components/calcite-dialog";
import "@esri/calcite-components/dist/components/calcite-label";
import "@esri/calcite-components/dist/components/calcite-dropdown";
import "@esri/calcite-components/dist/components/calcite-dropdown-group";
import "@esri/calcite-components/dist/components/calcite-dropdown-item";
import "@esri/calcite-components/dist/components/calcite-action-pad";
import "@esri/calcite-components/dist/components/calcite-action";
import "@esri/calcite-components/dist/components/calcite-action-group";
import "@esri/calcite-components/dist/components/calcite-action-bar";
import "@esri/calcite-components/dist/components/calcite-tooltip";
import "@esri/calcite-components/dist/components/calcite-link";
import "@esri/calcite-components/dist/components/calcite-popover";
import "@esri/calcite-ui-icons";
// tree
import "@esri/calcite-components/dist/components/calcite-tree";
import "@esri/calcite-components/dist/components/calcite-tree-item";
// fab
import "@esri/calcite-components/dist/components/calcite-fab";
// split button
import "@esri/calcite-components/dist/components/calcite-split-button";
// notice
import "@esri/calcite-components/dist/components/calcite-notice";

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
import "@arcgis/map-components/dist/components/arcgis-coordinate-conversion";

// measurement
import "@arcgis/map-components/dist/components/arcgis-distance-measurement-2d";
import "@arcgis/map-components/dist/components/arcgis-area-measurement-2d";
// import portal
import Portal from "@arcgis/core/portal/Portal";
// identity
import IdentityManager from "@arcgis/core/identity/IdentityManager";

// import group layer
import GroupLayer from "@arcgis/core/layers/GroupLayer";
// import useState from 'react';
import SlidingPanel from "react-sliding-side-panel";
import "react-sliding-side-panel/lib/index.css";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";

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
            full-name="User"
            username="username"
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
        &nbsp; | &nbsp; Powered by &nbsp;
        <a href="https://www.esri.com" target="_blank">
          Esri
        </a>
        &nbsp; | &nbsp; See&nbsp;
        <a target="_self" id="attributionLink" href="#">
          Attribution
        </a>
        <calcite-tooltip
          reference-element="attributionLink"
          placement="top"
          theme="dark"
          id="attributionTooltip"
          // closeOnClick
        ></calcite-tooltip>
      </div>
      {/* Action Bar */}
      <calcite-shell-panel position="start" slot="panel-start">
        <calcite-action-bar slot="action-bar" overflowActionsDisabled expanded>
          {/* Edit Action */}
          <calcite-action-group label="Edit">
            <calcite-action
              text="Define Solar Array"
              icon="polygon"
              id="AddAction"
              onClick={() => {
                document.getElementById("my-expand").toggle();
              }}
            ></calcite-action>
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
              <calcite-action-pad expandDisabled>
                {/* <calcite-action
                  id="DetectBuildingFootprints"
                  text="Detect Building Footprints"
                  icon="footprint"
                  onClick={addBuildingFootprints}
                ></calcite-action> */}
                <calcite-action
                  id="DetectRoads"
                  text="Road Segments"
                  icon="curve"
                ></calcite-action>
                <calcite-popover
                  reference-element="DetectRoads"
                  label="Roads"
                  autoClose
                >
                  <calcite-action-bar expandDisabled>
                    <calcite-action
                      id="selectRoadsbyExtent"
                      text="Select by Extent"
                      icon="extent"
                      onClick={addRoads}
                    ></calcite-action>
                    <calcite-action
                      id="selectRoadsbyClick"
                      text="Select by Clicking"
                      icon="select"
                      onClick={() => {
                        document.getElementById("ClickRoadsNotice").open = true;
                      }}
                    ></calcite-action>
                  </calcite-action-bar>
                </calcite-popover>
                <calcite-action
                  id="SelfDefinedPolyline"
                  text="Self-defined Polyline"
                  icon="line"
                  onClick={selfDefinedPolyline}
                ></calcite-action>
                <calcite-action
                  id="SelfDefinedPolygon"
                  text="Self-defined Polygon"
                  icon="polygon"
                  onClick={selfDefinedPolygon}
                ></calcite-action>
              </calcite-action-pad>
            </calcite-popover>
            <calcite-action
              id="EditBufferAction"
              text="Create/Edit Buffers"
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
                  Buffer Distance (US feet)
                  <calcite-slider
                    id="BufferSlider"
                    min="0"
                    max="100"
                    step="1"
                    value="0"
                    label-handles
                    label-ticks
                    min-label="1"
                    max-label="100"
                  ></calcite-slider>
                </calcite-label>
                <calcite-button
                  appearance="solid"
                  color="blue"
                  scale="m"
                  width="full"
                  onClick={deleteBufferClicked}
                >
                  Delete Buffer
                </calcite-button>
              </calcite-popover>
            </calcite-action>
            <calcite-action
              text="View/Update Clipped Results"
              icon="view-visible"
              onClick={clipResultClicked}
            ></calcite-action>
            <calcite-action
              text="Toggle Stats Table"
              icon="dock-bottom"
              onClick={() => {
                document.querySelector("#stats-dialog").open =
                  !document.querySelector("#stats-dialog").open;
              }}
            ></calcite-action>
            <calcite-action
              id="ClearAction"
              text="Clear Solar Array"
              icon="trash"
              onClick={clearBtnClicked}
              disabled
            ></calcite-action>
          </calcite-action-group>

          {/* Data Action */}
          <calcite-action-group>
            <calcite-action
              text="Upload Layer"
              icon="upload"
              onClick={uploadActionClicked}
            ></calcite-action>
            <calcite-action
              text="Edit Layer"
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
          </calcite-action-group>

          <calcite-action-group>
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
          </calcite-action-group>

          <calcite-tooltip slot="expand-tooltip" placement="right">
            Toggle Action Bar
          </calcite-tooltip>
        </calcite-action-bar>
        {/* <calcite-panel heading="Layers" id="panel-start" closable>
          <calcite-block
            collapsible
            heading="Symbology"
            description="Select type, color, and transparency"
            icon-start="map-pin"
          >
            <calcite-notice open>
              <div slot="message">The viewers are going to love this</div>
            </calcite-notice>
          </calcite-block>
        </calcite-panel> */}
      </calcite-shell-panel>
      {/* Map */}
      <calcite-panel>
        <arcgis-map
          // itemId="1d9aec5e950f46f9a35a0d399e7e0cf1"
          center="-83.74, 42.27"
          zoom="10"
          onarcgisViewReadyChange={onArcgisViewReadyChange}
        >
          {/* Sketch Actions */}
          <arcgis-search position="top-left"></arcgis-search>
          <arcgis-expand position="top-left" id="my-expand">
            <arcgis-sketch
              id="my-sketch"
              creationMode="single"
              // referenceElement="AddAction"
              onarcgisCreate={sketchCreated}
              // position="top-left"
              expanded
            ></arcgis-sketch>
          </arcgis-expand>

          <arcgis-coordinate-conversion
            position="bottom-left"
            hideExpandButton
            // conversions="[]"
          ></arcgis-coordinate-conversion>

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
                <arcgis-layer-list dragEnabled></arcgis-layer-list>
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
      </calcite-panel>

      {/* Dialogs */}
      {/* About */}
      <calcite-dialog heading="About" id="about-dialog" slot="dialogs" modal>
        <calcite-label>
          This tool is an auxiliary tool developed as part of the DOE R-STEP project that aims to help solar developers
          and local governments in Michigan to understand the potential for solar development in their communities.
          <br></br>
          <br></br>
          This tool is designed to help users visualize and analyze the setback requirements caused by roads, 
          transmission lines, buildings, and other features, in a user-friendly way. The ultimate goal is to help users
          understand what the installed capacity of solar energy in their communities could be, and to help them make informed
           decisions about solar development and lead to more efficient and effective solar siting discussions.
          <br></br>
          <br></br>
          <b>
            How to use this tool:
          </b>
        </calcite-label>
        <ul>
          <li>
            Start by defining one or more polygons with "<b>Define Solar Array</b>" on the map to represent solar
            arrays.
          </li>
          <li>
            Explore "<b>Add Clipping Features</b>" to see how to add clipping features to the
            map. You can add building footprints, road segments, and self-defined
            polylines and polygons.
          </li>
          <li>
            Use the "<b>Create/Edit Buffers</b>" to create a buffer around the selected
            features. You can also delete the buffer.
          </li>
          <li>
            To view the clipped results, click on "<b>View/Update Clipped Results</b>".
          </li>
          <li>
            You can always clear the solar array by clicking on "<b>Clear Solar Array</b>".
          </li>
          <li>
            To view the statistics of the solar array, click on "<b>Toggle Stats Table</b>".
            This will show you the number of features, total area, distance to nearest
            substation, distance to nearest transmission line, and perimeter.
          </li>
          <li>
            You can also upload a layer to the map by clicking on "<b>Upload Layer</b>".
          </li>
          <li>
            To edit the layer, click on "<b>Edit Layer</b>". This will open the ArcGIS
            Editor widget.
          </li>
          <li>
            You can also save your results by clicking on "<b>Export Results</b>".
          </li>
          <li>
            To import a file, click on "<b>Import from File</b>". This will open the
            file picker. Load your file and click on "Open". The file will be
            loaded into the map.
          </li>
          <li>
            Hope this tool helps you in your solar development journey!
          </li>
        </ul>
        <calcite-label>
          link to update logs: 
          <a
            href=""></a>
        </calcite-label>
      </calcite-dialog>
      {/* The Stats Table */}
      <calcite-dialog
        open="false"
        width="s"
        heading="Statistics"
        id="stats-dialog"
        placement="bottom-end"
        drag-enabled
        resizable
      >
        <p>
          Get started by adding a polygon to the map to represent a solar panel.
          <br></br>
          The statistics will be displayed here.
        </p>
      </calcite-dialog>
      {/* Notice */}
      {/* Alert */}
      <calcite-alert
        icon="information"
        id="selectRoadsNotice"
        kind="info"
        slot="alerts"
        placement="top"
      >
        <div slot="title"> Select road segments by extent</div>
        <div slot="message"> Drag and draw a rectangle on the map</div>
      </calcite-alert>
      <calcite-alert
        icon="information"
        id="ClickRoadsNotice"
        kind="info"
        slot="alerts"
        placement="top"
      >
        <div slot="title"> Select by Clicking</div>
        <div slot="message">
          {" "}
          Press <i>Control</i> or <i>Shift</i> and click on road segements to
          make selection
        </div>
        <calcite-action
          scale="m"
          icon="plus"
          text="Add to Clipping Features"
          text-enabled
          slot="actions-end"
          onClick={ClickingAddClicked}
        ></calcite-action>
      </calcite-alert>
      <calcite-alert
        icon="smile"
        id="buffer-alert"
        scale="m"
        autoCloseDuration="fast"
        autoClose
        slot="alerts"
        placement="top"
      >
        <div slot="title">Buffer Editing</div>
        <div slot="message">
          Please select a feature from the <b>"Clipping Features"</b> Layer to
          continue
        </div>
        <calcite-button slot="controls" appearance="clear">
          Close
        </calcite-button>
      </calcite-alert>
      <calcite-alert
        icon="frown"
        id="result-alert"
        scale="m"
        autoCloseDuration="fast"
        autoClose
        slot="alerts"
        kind="warning"
        placement="top"
      >
        <div slot="title">Clipped results</div>
        <div slot="message">
          Please create buffer and solar array layers first
        </div>
        <calcite-button slot="controls" appearance="clear">
          Close
        </calcite-button>
      </calcite-alert>
      {/* tooltips */}
      <calcite-tooltip
        referenceElement="DetectBuildingFootprints"
        // placement="right"
      >
        <span>Select and detect building footprints within an area</span>
      </calcite-tooltip>
      <calcite-tooltip
        referenceElement="DetectRoads"
        closeOnClick
        // placement="right"
      >
        <span>Select and detect road segments within an area</span>
      </calcite-tooltip>
      <calcite-tooltip
        referenceElement="SelfDefinedPolyline"
        // placement="right"
      >
        <span>Create a self-defined polyline</span>
      </calcite-tooltip>
      <calcite-tooltip
        referenceElement="SelfDefinedPolygon"
        // placement="right"
      >
        <span>Create a self-defined polygon</span>
      </calcite-tooltip>
    </calcite-shell>
  </StrictMode>
);

// import Color
import Color from "@arcgis/core/Color.js";
// simple line symbol
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol.js";
// simple fill symbol
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol.js";
// renderer
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer.js";

// import query
import Query from "@arcgis/core/rest/support/Query.js";
import * as geodesicUtils from "@arcgis/core/geometry/support/geodesicUtils.js";
import * as geodeticAreaOperator from "@arcgis/core/geometry/operators/geodeticAreaOperator.js";
import * as projectOperator from "@arcgis/core/geometry/operators/projectOperator.js";
import { SpatialReference } from "@arcgis/core/geometry";

// import union operation
import * as unionOperator from "@arcgis/core/geometry/operators/unionOperator.js";
// add buffer
import * as bufferOperator from "@arcgis/core/geometry/operators/bufferOperator.js";
import * as centroidOperator from "@arcgis/core/geometry/operators/centroidOperator.js";
import * as geodeticDistanceOperator from "@arcgis/core/geometry/operators/geodeticDistanceOperator.js";
import * as geodesicProximityOperator from "@arcgis/core/geometry/operators/geodesicProximityOperator.js";
import * as lengthOperator from "@arcgis/core/geometry/operators/lengthOperator.js";

import TopFeaturesQuery from "@arcgis/core/rest/support/TopFeaturesQuery.js";
import TopFilter from "@arcgis/core/rest/support/TopFilter.js";

// import esri request
import esriRequest from "@arcgis/core/request.js";
// esri graphic
import Graphic from "@arcgis/core/Graphic.js";
// esri feature layer
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import TileLayer from "@arcgis/core/layers/TileLayer.js";

function onArcgisViewReadyChange(event) {
  // change the avatar
  const portal = new Portal();
  portal.authMode = "immediate";
  portal.load().then(() => {
    document.querySelector("#header-user").fullName = portal.user.fullName;
    document.querySelector("#header-user").username = portal.user.username;
    // get avatar
    document.querySelector("#header-user").avatarUrl = portal.user.thumbnailUrl;
  });
  const aboutBtn = document.getElementById("about-btn");
  const aboutDialog = document.getElementById("about-dialog");

  // add event listener for about button
  aboutBtn.addEventListener("click", () => {
    aboutDialog.open = true;
  });

  // Adjust the visibilities of the layers
  const map = event.target.map;

  // change the name of the sketch layer
  const sketchLayer = document.querySelector("#my-sketch").layer;
  sketchLayer.title = "Solar Array";

  // create a group layer to hold the solar data layers
  const solarDataLayer = new GroupLayer({
    title: "Solar Data",
    visible: true,
    visibilityMode: "independent",
    layers: [],
  });

  // add layers to the group layer
  // substation layer
  const substationsLayer = new FeatureLayer({
    url: "https://services6.arcgis.com/b0gOZ1Tb5FUNjEkv/arcgis/rest/services/Substations/FeatureServer",
    title: "Substations",
    outFields: ["*"],
    popupTemplate: {
      title: "{Name}",
      content: "{*}",
    },
  });
  // add to solar data layer
  solarDataLayer.add(substationsLayer);

  // Transmission Line Layer
  const transmissionLineLayer = new FeatureLayer({
    url: "https://services2.arcgis.com/FiaPA4ga0iQKduv3/arcgis/rest/services/US_Electric_Power_Transmission_Lines/FeatureServer/0",
    title: "Transmission_Lines",
    outFields: ["*"],
    popupTemplate: {
      title: "{Name}",
      content: "{*}",
    },
  });
  // add to solar data layer
  solarDataLayer.add(transmissionLineLayer);

  // // Michigan bound
  // const michiganBoundLayer = new FeatureLayer({
  //   url: "https://services6.arcgis.com/b0gOZ1Tb5FUNjEkv/arcgis/rest/services/R_STEP_Base_Layers_WFL1/FeatureServer/3",
  //   title: "Michigan",
  //   outFields: ["*"],
  //   popupTemplate: {
  //     title: "{Name}",
  //     content: "{*}",
  //   },
  //   visible: false,
  // });
  // // add to solar data layer
  // solarDataLayer.add(michiganBoundLayer);

  // Michigan roads layer
  const michiganRoadsLayer = new FeatureLayer({
    url: "https://gisagocss.state.mi.us/arcgis/rest/services/OpenData/michigan_geographic_framework/MapServer/20",
    title: "All Roads",
    outFields: ["*"],
    popupTemplate: {
      title: "{Name}",
      content: "{*}",
    },
  });
  // add to solar data layer
  solarDataLayer.add(michiganRoadsLayer);

  // Regrid data
  const regridLayer = new TileLayer({
    url: "https://tiles.arcgis.com/tiles/KzeiCaQsMoeCfoCq/arcgis/rest/services/Regrid_Nationwide_Parcel_Boundaries_v1/MapServer",
    title: "Parcel Layer",
    outFields: ["*"],
    popupTemplate: {
      title: "{Name}",
      content: "{*}",
    },
    visible: false,
  });
  // add to solar data layer
  solarDataLayer.add(regridLayer);

  // add the solar data layer to the map
  map.add(solarDataLayer);

  // create a selected group layer
  const selectedLayer = new GroupLayer({
    title: "Clipping Features",
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

  // get the attribution widget
  const attributionWidget = document
    .querySelector("arcgis-map")
    .view.ui.find("attribution");
  attributionWidget.visible = false;

  // show attribution
  const attributionTooltip = document.getElementById("attributionTooltip");
  attributionTooltip.addEventListener("calciteTooltipBeforeOpen", (event) => {
    // console.log("Tooltip before open", event);
    document.getElementById("attributionTooltip").innerHTML =
      attributionWidget.attributionText;
  });

  // create a graphic layer for selection
  const selectionLayer = new GraphicsLayer({
    title: "Highlights",
  });
  map.add(selectionLayer);

  let ctrl = false;
  let shift = false;

  const view = document.querySelector("arcgis-map").view;

  // add event listener for key down
  view.on("key-down", (event) => {
    if (event.key === "Control") {
      ctrl = true;
    }
    if (event.key === "Shift") {
      shift = true;
    }
  });

  // add event listener for key up
  view.on("key-up", (event) => {
    if (event.key === "Control") {
      ctrl = false;
    }
    if (event.key === "Shift") {
      shift = false;
    }
  });

  // add event listener for view click
  view.on("click", (event) => {
    if (!ctrl && !shift) {
      selectionLayer.removeAll();
    } else {
      const roadLayer = map.allLayers.find(
        (layer) => layer.title === "All Roads"
      );
      const point = view.toMap(event);
      roadLayer
        .queryFeatures({
          geometry: point,
          spatialRelationship: "intersects",
          distance: 5,
          units: "meters",
          returnGeometry: true,
          returnQueryGeometry: true,
          outFields: ["*"],
        })
        .then((result) => {
          // add the selected features to the selection layer
          selectionLayer.addMany(result.features);
        });
    }
  });

  // listen the sketch change of sketch layer for stats table
  sketchLayer.graphics.on("after-changes", async (event) => {
    // get the stats table
    const statsDialog = document.querySelector("#stats-dialog");
    // get the graphics from the sketch layer
    const graphics = sketchLayer.graphics;
    const numberOfFeatures = graphics.length;
    // calculate area
    if (!geodeticAreaOperator.isLoaded()) {
      await geodeticAreaOperator.load();
    }
    const geodesticArea = geodeticAreaOperator.execute(
      unionOperator.executeMany(
        graphics.items.map((graphic) => graphic.geometry)
      ),
      { unit: "acres" }
    );
    // get the centroid of the solar array
    const centroid = centroidOperator.execute(
      unionOperator.executeMany(
        graphics.items.map((graphic) => graphic.geometry)
      )
    );
    // calculate distance to nearest substation
    const substationLayer = map.allLayers.find(
      (layer) => layer.title === "Substations"
    );
    const transmissionLineLayer = map.allLayers.find(
      (layer) => layer.title === "Transmission_Lines"
    );
    if (!geodeticDistanceOperator.isLoaded()) {
      await geodeticDistanceOperator.load();
    }
    // geodeticDistanceOperator.supportsCurves = true;
    if (!geodesicProximityOperator.isLoaded()) {
      await geodesicProximityOperator.load();
    }

    // distance to nearest transmission line
    const transmissionLineQuery = new Query();
    transmissionLineQuery.geometry = unionOperator.executeMany(
      graphics.items.map((graphic) => graphic.geometry)
    );
    transmissionLineQuery.spatialRelationship = "intersects";
    transmissionLineQuery.distance = 20; // query within 80 km
    transmissionLineQuery.units = "kilometers";
    transmissionLineQuery.returnGeometry = true;
    transmissionLineQuery.outFields = ["*"];

    var distanceTrans = 0;

    await transmissionLineLayer
      .queryFeatures(transmissionLineQuery)
      .then((result) => {
        if (result.features.length > 0) {
          // console.log(result.features);
          const nearTransmissionLine = unionOperator.executeMany(
            result.features.map((feature) => feature.geometry)
          );
          distanceTrans = geodeticDistanceOperator.execute(
            unionOperator.executeMany(
              graphics.items.map((graphic) => graphic.geometry)
            ),
            // The nearest point on the transmission line
            nearTransmissionLine,
            {
              unit: "feet",
            }
          );
        }
      });

    // distance to nearest substation
    const substationQuery = new Query();
    substationQuery.geometry = centroid;
    substationQuery.spatialRelationship = "intersects";
    substationQuery.distance = 10; // query within 10 km
    substationQuery.units = "kilometers";
    substationQuery.returnGeometry = true;
    substationQuery.outFields = ["*"];

    var distanceSub = 0;

    await substationLayer.queryFeatures(substationQuery).then((result) => {
      if (result.features.length > 0) {
        const nearestSubstation = result.features[0];
        distanceSub = geodeticDistanceOperator.execute(
          unionOperator.executeMany(
            graphics.items.map((graphic) => graphic.geometry)
          ),
          nearestSubstation.geometry,
          {
            unit: "feet",
          }
        );
      }
    });

    // perimeter
    const perimeters = graphics.items.map((graphic) => {
      const polyline = new Polyline({
        paths: graphic.geometry.rings[0].slice(0, -1),
        spatialReference: graphic.geometry.spatialReference,
      });
      return lengthOperator.execute(polyline, {
        unit: "feet",
      });
    });
    const perimeter = perimeters.reduce((a, b) => a + b, 0);

    statsDialog.innerHTML = `
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="background-color: #f2f2f2;">
            <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Attribute</th>
            <th style="padding: 8px; border: 1px solid #ddd; text-align: right;">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;">Number of Features</td>
            <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">${numberOfFeatures}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;">Total Area (acres)</td>
            <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">${geodesticArea.toFixed(
              2
            )}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;">Distance to Nearest Substation (ft)</td>
            <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">${distanceSub.toFixed(
              2
            )}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;">Distance to Nearest Transmission Line (ft)</td>
            <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">${distanceTrans.toFixed(
              2
            )}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;">Perimeter (ft)</td>
            <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">${perimeter.toFixed(
              2
            )}</td>
          </tr>
        </tbody>
      </table>
    `;
  });
}

function ClickingAddClicked() {
  // get the selected features layer
  const highlightsLayer = document
    .querySelector("arcgis-map")
    .map.allLayers.find((layer) => layer.title === "Highlights");
  if (highlightsLayer.graphics.length === 0) {
    // create a alert
    alert("Please select road segments first");
  }
  // get the clipping features layer
  const clippingLayer = document
    .querySelector("arcgis-map")
    .map.allLayers.find((layer) => layer.title === "Clipping Features");
  // create selected polyline if not exist
  if (
    !clippingLayer.allLayers.find(
      (layer) => layer.title === "Selected Road Segments"
    )
  ) {
    // get the added graphic
    let graphics = highlightsLayer.graphics.toArray();
    // define the attributes for each graphic
    let i = 0;
    graphics.forEach((graphic) => {
      i++;
      graphic.attributes = {
        id: i,
        name: `Selected Road Segment ${i}`,
      };
    });
    console.log(graphics);
    // create a action object
    const deletAction = {
      title: "Delete",
      id: "delete-this",
      className: "esri-icon-trash",
    };

    // get the selected features
    const selectedRoads = new FeatureLayer({
      source: [],
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
        },
      ],
      objectIdField: "OBJECTID",
      title: "Selected Road Segments",
      geometryType: "polyline",
      // spatialReference: { wkid: 4326 },
      popupTemplate: {
        actions: [deletAction],
        title: "{name}",
        content: "This is a user-selected polyline",
      },
    });
    // add the selected polyline to the selected features layer
    clippingLayer.add(selectedRoads);
    // create edits
    const addRoadsEdits = {
      addFeatures: graphics,
    };
    // apply edits
    selectedRoads.applyEdits(addRoadsEdits);
  } else {
    // get the selected polyline
    const selectedRoads = clippingLayer.allLayers.find(
      (layer) => layer.title === "Selected Road Segments"
    );
    // get the added graphic
    let graphics = highlightsLayer.graphics.toArray();
    // define the attributes for each graphic
    let i = selectedRoads.source.length;
    graphics.forEach((graphic) => {
      i++;
      graphic.attributes = {
        id: i,
        name: `Selected Road Segment ${i}`,
      };
    });
    // create edits
    const addRoadsEdits = {
      addFeatures: graphics,
    };
    // apply edits
    selectedRoads.applyEdits(addRoadsEdits);
  }
  // add event listener for trigger action
  const view = document.querySelector("arcgis-map").view;
  reactiveUtils.on(
    () => view.popup,
    "trigger-action",
    (event) => {
      if (event.action.id === "delete-this") {
        const popUpFeature = view.popup.selectedFeature;
        // get the selected features layer
        const myLayer = popUpFeature.layer;
        // apply edits
        myLayer.applyEdits({
          deleteFeatures: [popUpFeature],
        });
        // close the popup
        view.popup.close();
      }
    }
  );
}

// function for log out
function logout() {
  // log out the user
  const myIdentityManager = IdentityManager;
  myIdentityManager.destroyCredentials();
  // reload the page
  window.location.reload();
}

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

  // open the notice
  document.getElementById("selectRoadsNotice").open = true;

  // start the sketch
  roadSketch.create("rectangle");

  // add event listener for graphics change
  roadSketch.layer.graphics.on("after-add", (event) => {
    // close the notice
    document.getElementById("selectRoadsNotice").open = false;
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
    var myTemplate = roadLayer.popupTemplate;
    myTemplate.actions = [
      {
        id: "delete-this",
        title: "Delete",
        className: "esri-icon-trash",
      },
    ];
    roadLayer.queryFeatures(query).then((result) => {
      const selectedFeaturesLayer = map.allLayers.find(
        (layer) => layer.title === "Clipping Features"
      );
      // if selected roads layer does not exist in the selected features layer, create it
      if (
        !selectedFeaturesLayer.allLayers.find(
          (layer) => layer.title === "Selected Roads"
        )
      ) {
        // get the selected features
        const selectedRoads = new FeatureLayer({
          source: result.features,
          fields: result.fields,
          objectIdField: "OBJECTID",
          title: "Selected Roads",
          geometryType: result.geometryType,
          renderer: roadLayer.renderer,
          popupTemplate: myTemplate,
        });
        // console.log("Selected layer created");
        // add the selected roads to the selected features layer
        selectedFeaturesLayer.add(selectedRoads);
      } else {
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

  // add event listener for trigger action
  reactiveUtils.on(
    () => view.popup,
    "trigger-action",
    (event) => {
      if (event.action.id === "delete-this") {
        const popUpFeature = view.popup.selectedFeature;
        // get the selected features layer
        const myLayer = popUpFeature.layer;
        // apply edits
        myLayer.applyEdits({
          deleteFeatures: [popUpFeature],
        });
        // close the popup
        view.popup.close();
      }
    }
  );
}

function selfDefinedPolyline() {
  // get the current view
  const view = document.querySelector("arcgis-map").view;

  // construct a new sketch
  const polylineSketch = new Sketch({
    layer: new GraphicsLayer(),
    view: view,
    creationMode: "single",
    updateOnGraphicClick: true,
  });

  // start the sketch
  polylineSketch.create("polyline");

  // get the selected features layer
  const selectedLayer = document
    .querySelector("arcgis-map")
    .map.allLayers.find((layer) => layer.title === "Clipping Features");

  // add event listener for graphics change
  polylineSketch.layer.graphics.on("after-add", (event) => {
    let graphic = event.item;
    // console.log("Polyline added", event.item);
    // if polyline layer does not exist in the selected features layer, create it
    if (
      !selectedLayer.allLayers.find(
        (layer) => layer.title === "Selected Polyline"
      )
    ) {
      // get the added graphic
      // define the attributes
      graphic.attributes = {
        id: 1,
        name: "Self Defined Polyline 1",
      };
      // create a action object
      const deletAction = {
        title: "Delete",
        id: "delete-this",
        className: "esri-icon-trash",
      };

      // get the selected features
      const selectedPolyline = new FeatureLayer({
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
          },
        ],
        objectIdField: "OBJECTID",
        title: "Selected Polyline",
        geometryType: graphic.geometry.type,
        popupTemplate: {
          actions: [deletAction],
          title: "{name}",
          content: "This is a self-defined polyline",
        },
      });
      // add the selected polyline to the selected features layer
      selectedLayer.add(selectedPolyline);
    } else {
      // get the selected polyline layer
      const selectedPolylineLayer = selectedLayer.allLayers.find(
        (layer) => layer.title === "Selected Polyline"
      );
      // get the number of graphics in the layer
      selectedPolylineLayer.queryFeatureCount().then((count) => {
        // console.log(graphic);
        // polylineCount = count;
        graphic.attributes = {
          id: count + 1,
          name: `Self Defined Polyline ${count + 1}`,
        };
        // create edits
        const addPolylineEdits = {
          addFeatures: [graphic],
        };
        // apply edits
        selectedPolylineLayer.applyEdits(addPolylineEdits);
      });
    }
    // add event listener for trigger action
    reactiveUtils.on(
      () => view.popup,
      "trigger-action",
      (event) => {
        if (event.action.id === "delete-this") {
          const popUpFeature = view.popup.selectedFeature;
          // get the selected features layer
          const myLayer = popUpFeature.layer;
          // apply edits
          myLayer.applyEdits({
            deleteFeatures: [popUpFeature],
          });
          // close the popup
          view.popup.close();
        }
      }
    );
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
    .map.allLayers.find((layer) => layer.title === "Clipping Features");

  // add event listener for graphics change
  polygonSketch.layer.graphics.on("after-add", (event) => {
    let graphic = event.item;
    // console.log("Polygon added", event.item);
    // if polygon layer does not exist in the selected features layer, create it
    if (
      !selectedLayer.allLayers.find(
        (layer) => layer.title === "Selected Polygon"
      )
    ) {
      // get the added graphic
      // define the attributes
      graphic.attributes = {
        id: 1,
        name: "Self Defined Polygon 1",
      };
      // create a action object
      const deletAction = {
        title: "Delete",
        id: "delete-this",
        className: "esri-icon-trash",
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
          },
        ],
        objectIdField: "OBJECTID",
        title: "Selected Polygon",
        geometryType: graphic.geometry.type,
        popupTemplate: {
          actions: [deletAction],
          title: "{name}",
          content: "This is a self-defined polygon",
        },
      });
      // add the selected polygon to the selected features layer
      selectedLayer.add(selectedPolygon);
    } else {
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
    // add event listener for trigger action
    reactiveUtils.on(
      () => view.popup,
      "trigger-action",
      (event) => {
        if (event.action.id === "delete-this") {
          const popUpFeature = view.popup.selectedFeature;
          // get the selected features layer
          const myLayer = popUpFeature.layer;
          // apply edits
          myLayer.applyEdits({
            deleteFeatures: [popUpFeature],
          });
          // close the popup
          view.popup.close();
        }
      }
    );
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
    // console.log("No popup");
    // bring up an alert
    document.querySelector("#buffer-alert").open = true;
  } else {
    // open the buffer popover
    BufferEditPopOver.open = true;
    // get the selected features of the popup
    const popupFeature = view.popup.features[0];
    // get the buffer layer
    const bufferLayer = view.map.allLayers.find(
      (layer) => layer.title === "Buffers"
    );
    // find the associated buffer graphic
    const bufferFeature = bufferLayer.graphics.find(
      (graphic) =>
        graphic.attributes.associatedFeatureID ===
        popupFeature.attributes.OBJECTID
    );
    // if the buffer graphic exists
    if (bufferFeature) {
      // console.log(bufferFeature);
      // get the buffer slider
      const bufferSlider = document.querySelector("#BufferSlider");
      // set the slider value to the buffer distance
      bufferSlider.value = bufferFeature.attributes.bufferDistance;
    }
  }
}

// slider change
function bufferSliderChange(event) {
  // get the current view
  const view = document.querySelector("arcgis-map").view;
  // get the popup features
  const popupFeatures = view.popup.features;
  // get the buffer layer
  const bufferLayer = view.map.allLayers.find(
    (layer) => layer.title === "Buffers"
  );
  // get the buffer slider value
  var sliderValue = event.target.value;
  // get the selected features
  const popupFeature = view.popup.features[0];
  // find the associated buffer graphic
  const bufferGraphic = bufferLayer.graphics.find(
    (graphic) =>
      graphic.attributes.associatedFeatureID ===
      popupFeature.attributes.OBJECTID
  );
  // if the buffer graphic exists
  if (bufferGraphic) {
    // clear the buffer graphic
    bufferLayer.remove(bufferGraphic);
    // create a new buffer graphic
    const bufferGraphics = popupFeatures.map((feature) => {
      const geometry = feature.geometry.clone();
      const options = {
        unit: "feet",
      };
      const bufferGeometry = bufferOperator.execute(
        geometry,
        sliderValue,
        options
      );
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
        attributes: {
          associatedFeatureID: feature.attributes.OBJECTID,
          bufferDistance: sliderValue,
          bufferUnit: options.unit,
        },
      });
    });
    // add the buffer graphics to the buffer layer
    bufferLayer.addMany(bufferGraphics);
  } else {
    // create a buffer around the selected features
    const bufferGraphics = popupFeatures.map((feature) => {
      const geometry = feature.geometry.clone();
      const options = {
        unit: "feet",
      };
      const bufferGeometry = bufferOperator.execute(
        geometry,
        sliderValue,
        options
      );
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
        attributes: {
          associatedFeatureID: feature.attributes.OBJECTID,
          bufferDistance: sliderValue,
          bufferUnit: options.unit,
        },
      });
    });

    // add the buffer graphics to the buffer layer
    bufferLayer.addMany(bufferGraphics);
  }
}

function deleteBufferClicked() {
  // get the current view
  const view = document.querySelector("arcgis-map").view;
  // get the buffer layer
  const bufferLayer = view.map.allLayers.find(
    (layer) => layer.title === "Buffers"
  );
  // get the selected features
  const popupFeature = view.popup.features[0];
  // find the associated buffer graphic
  const bufferGraphic = bufferLayer.graphics.find(
    (graphic) =>
      graphic.attributes.associatedFeatureID ===
      popupFeature.attributes.OBJECTID
  );
  // if the buffer graphic exists
  if (bufferGraphic) {
    // clear the buffer graphic
    bufferLayer.remove(bufferGraphic);
  }
}

// clip opeator
import * as differenceOperator from "@arcgis/core/geometry/operators/differenceOperator.js";
// import * as unionTypes from "@arcgis/core/unionTypes.js";

// on clip result action clicked
async function clipResultClicked() {
  // get the current view
  const view = document.querySelector("arcgis-map").view;
  // get the buffer layer
  const bufferLayer = view.map.allLayers.find(
    (layer) => layer.title === "Buffers"
  );
  // get the solar array layer
  const solarArrayLayer = view.map.allLayers.find(
    (layer) => layer.title === "Solar Array"
  );
  // Ensure both layers exist
  if (!bufferLayer || !solarArrayLayer) {
    document.querySelector("#result-alert").open = true;
    return;
  }
  const bufferUnions = unionOperator.executeMany(
    bufferLayer.graphics.items.map((graphic) => graphic.geometry)
  );
  const solarArrayUnions = unionOperator.executeMany(
    solarArrayLayer.graphics.items.map((graphic) => graphic.geometry)
  );
  // difference the solar array layer with the buffer layer
  const clippedSolarArray = differenceOperator.execute(
    solarArrayUnions,
    bufferUnions
  );
  // clear the buffer layer
  bufferLayer.removeAll();
  // clear the clipping features layer
  const clippingLayer = view.map.layers.find(
    (layer) => layer.title === "Clipping Features"
  );
  // clear all sub layers
  clippingLayer.removeAll();
  // create result layer if it does not exist
  if (
    !view.map.allLayers.find((layer) => layer.title === "Clipped Solar Array")
  ) {
    const resultLayer = new GraphicsLayer({
      title: "Clipped Solar Array",
    });
    // add the clipped solar array to the result layer
    resultLayer.add(
      new Graphic({
        geometry: clippedSolarArray,
        // symbol: solarArrayLayer.renderer.symbol.clone(),
        symbol: {
          type: "simple-fill",
          color: "blue",
          outline: {
            color: [0, 0, 0, 1],
            width: 1,
          },
        },
      })
    );

    solarArrayLayer.graphics = resultLayer.graphics.clone();
    // update the stats dialog
    const statsDialog = document.querySelector("#stats-dialog");
    statsDialog.open = true;
    // number of features
    const numberOfFeatures = resultLayer.graphics.length;
    // total area

    const geodesticArea = geodeticAreaOperator.execute(
      unionOperator.executeMany(
        resultLayer.graphics.items.map((graphic) => graphic.geometry)
      ),
      {
        unit: "acres",
      }
    );
    // distance to nearest substation
    const substationLayer = view.map.allLayers.find(
      (layer) => layer.title === "Substations"
    );
    const substationQuery = new Query();
    substationQuery.geometry = clippedSolarArray;
    substationQuery.spatialRelationship = "intersects";
    substationQuery.distance = 10; // query within 10 km
    substationQuery.units = "kilometers";
    substationQuery.returnGeometry = true;
    substationQuery.outFields = ["*"];

    var distanceSub = 0;

    await substationLayer.queryFeatures(substationQuery).then((result) => {
      if (result.features.length > 0) {
        const nearestSubstation = result.features[0];
        distanceSub = geodeticDistanceOperator.execute(
          clippedSolarArray,
          nearestSubstation.geometry,
          {
            unit: "feet",
          }
        );
      }
    });

    // distance to nearest transmission line
    const transmissionLineLayer = view.map.allLayers.find(
      (layer) => layer.title === "Transmission_Lines"
    );
    const transmissionLineQuery = new Query();
    transmissionLineQuery.geometry = clippedSolarArray;
    transmissionLineQuery.spatialRelationship = "intersects";
    transmissionLineQuery.distance = 10; // query within 10 km
    transmissionLineQuery.units = "kilometers";
    transmissionLineQuery.returnGeometry = true;
    transmissionLineQuery.outFields = ["*"];
    var distanceTrans = 0;
    await transmissionLineLayer
      .queryFeatures(transmissionLineQuery)
      .then((result) => {
        if (result.features.length > 0) {
          distanceTrans = geodeticDistanceOperator.execute(
            clippedSolarArray,
            unionOperator.executeMany(
              result.features.map((feature) => feature.geometry)
            ),
            {
              unit: "feet",
            }
          );
        }
      });

    // perimeter
    const perimeter = lengthOperator.execute(
      clippedSolarArray,
      {
        unit: "feet",
      }
    );

    // update the stats dialog
    statsDialog.innerHTML = `
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="background-color: #f2f2f2;">
            <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Attribute</th>
            <th style="padding: 8px; border: 1px solid #ddd; text-align: right;">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;">Number of Features</td>
            <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">${numberOfFeatures}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;">Total Area (acres)</td>
            <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">${geodesticArea.toFixed(2)}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;">Distance to Nearest Substation (ft)</td>
            <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">${distanceSub.toFixed(2)}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;">Distance to Nearest Transmission Line (ft)</td>
            <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">${distanceTrans.toFixed(2)}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;">Perimeter (ft)</td>
            <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">${perimeter.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    `;
    // add the result layer to the map
    view.map.add(resultLayer);
  } else {
    // get the result layer
    const resultLayer = view.map.allLayers.find(
      (layer) => layer.title === "Clipped Solar Array"
    );
    // clear the result layer
    resultLayer.removeAll();
    // add the clipped solar array to the result layer
    resultLayer.add(
      new Graphic({
        geometry: clippedSolarArray,
        // symbol: solarArrayLayer.renderer.symbol.clone(),
        symbol: {
          type: "simple-fill",
          color: "blue",
          outline: {
            color: [0, 0, 0, 1],
            width: 1,
          },
        },
      })
    );

    solarArrayLayer.graphics = resultLayer.graphics.clone();

    // update the stats dialog
    const statsDialog = document.querySelector("#stats-dialog");
    statsDialog.open = true;
    // number of features
    const numberOfFeatures = resultLayer.graphics.length;
    // total area

    const geodesticArea = geodeticAreaOperator.execute(
      unionOperator.executeMany(
        resultLayer.graphics.items.map((graphic) => graphic.geometry)
      ),
      {
        unit: "acres",
      }
    );
    // distance to nearest substation
    const substationLayer = view.map.allLayers.find(
      (layer) => layer.title === "Substations"
    );
    const substationQuery = new Query();
    substationQuery.geometry = clippedSolarArray;
    substationQuery.spatialRelationship = "intersects";
    substationQuery.distance = 10; // query within 10 km
    substationQuery.units = "kilometers";
    substationQuery.returnGeometry = true;
    substationQuery.outFields = ["*"];

    var distanceSub = 0;

    await substationLayer.queryFeatures(substationQuery).then((result) => {
      if (result.features.length > 0) {
        const nearestSubstation = result.features[0];
        distanceSub = geodeticDistanceOperator.execute(
          clippedSolarArray,
          nearestSubstation.geometry,
          {
            unit: "feet",
          }
        );
      }
    });

    // distance to nearest transmission line
    const transmissionLineLayer = view.map.allLayers.find(
      (layer) => layer.title === "Transmission_Lines"
    );
    const transmissionLineQuery = new Query();
    transmissionLineQuery.geometry = clippedSolarArray;
    transmissionLineQuery.spatialRelationship = "intersects";
    transmissionLineQuery.distance = 10; // query within 10 km
    transmissionLineQuery.units = "kilometers";
    transmissionLineQuery.returnGeometry = true;
    transmissionLineQuery.outFields = ["*"];
    var distanceTrans = 0;
    await transmissionLineLayer
      .queryFeatures(transmissionLineQuery)
      .then((result) => {
        if (result.features.length > 0) {
          distanceTrans = geodeticDistanceOperator.execute(
            clippedSolarArray,
            unionOperator.executeMany(
              result.features.map((feature) => feature.geometry)
            ),
            {
              unit: "feet",
            }
          );
        }
      });
    // update the stats dialog
    statsDialog.innerHTML = `
      <p>Number of features: ${numberOfFeatures}</p>
      <p>Total area: ${geodesticArea.toFixed(2)} sqft</p>
      <p>Distance to nearest substation: ${distanceSub.toFixed(2)} ft</p>
      <p>Distance to nearest transmission line: ${distanceTrans.toFixed(
        2
      )} ft</p>
    `;
  }
}
