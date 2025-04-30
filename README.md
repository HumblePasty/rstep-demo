# R-STEP Solar Siting Tool WebGIS App

> Author: Haolin Li (hli@5lakesenergy)
>
> Last Updated: 4/30/2025



## Project Description

This tool is an auxiliary tool developed as part of the DOE R-STEP project that aims to help solar developers and local governments in Michigan to understand the potential for solar development in their communities.

This tool is designed to help users visualize and analyze the setback requirements caused by roads, transmission lines, buildings, and other features, in a user-friendly way. The ultimate goal is to help users understand what the installed capacity of solar energy in their communities could be, and to help them make informed decisions about solar development and lead to more efficient and effective solar siting discussions.



## How to Use

**How to use this tool:**

- Start by defining one or more polygons with "**Define Solar Array**" on the map to represent solar arrays.
- Explore "**Add Clipping Features**" to see how to add clipping features to the map. You can add building footprints, road segments, and self-defined polylines and polygons.
- Use "**Create/Edit Buffers**" to create a buffer around the selected features. You can also delete the buffer.
- To view the clipped results, click on "**View/Update Clipped Results**".
- You can always clear the solar array by clicking on "**Clear Solar Array**".
- To view the statistics of the solar array, click on "**Toggle Stats Table**". This will show you the number of features, total area, distance to nearest substation, distance to nearest transmission line, and perimeter.
- You can also upload a layer to the map by clicking on "**Upload Layer**".
- To edit the layer, click on "**Edit Layer**". This will open the ArcGIS Editor widget.
- You can also save your results by clicking on "**Export Results**".
- To import a file, click on "**Import from File**". This will open the file picker. Load your file and click on "Open". The file will be loaded into the map.
- Hope this tool helps you in your solar development journey!



## Project Hierarchy

```
/README.md - this document, the overall description
/doc - documentation and meeting notes
/src - working src
	index.jsx - main script
	index.css - styles
/dist - build export
/public
```



## Configuration and Compatibility

The initial implementation method is to complete the development of this webapp using ArcGIS Experience. However, after doing some research it seems that the ArcGIS Experience toolkit does not provide enough element to construct a complete workflow to support the spatial analysis (more specifically buffer and overlay) that is intrinsically needed in this project.

Thus in the development process I switched and based the whole project on React with ArcGIS SDK for JavaScript for implementation.

**Tool versions**

- [React 19.0.0](https://react.dev/)
- [ArcGIS SDK for JS 4.31](https://developers.arcgis.com/javascript/latest/)
- [Calcite Design System 2.13.2](https://developers.arcgis.com/calcite-design-system/)
- [node.js 22.13.0](https://nodejs.org/en)
- [npm 10.9.2](https://www.npmjs.com/)



## How to Run in Dev mode

1. Go to the source folder

2. `npm install` to install the node modules

3. `npm run` or `npm run dev` to see in debug mode

4. Go to https://localhost:3001 and explore

   Note that the port number might change due to setting



## How to Build

1. Go to the source folder

2. `npm install` to install the node modules

3. `npm run` or `npm run dev` to see in debug mode

4. Go to https://localhost:3001 and explore

   Note that the port number might change due to setting



## Deployed Project

[TBD: Published Project Link]