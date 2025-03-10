# R-STEP Solar Siting Tool WebGIS App

> Author: Haolin Li (hli@5lakesenergy)
>
> Last Updated: 1/17/2025



## Project Description

[formal description pending]

This tool is for a Web tool based on ArcGIS developed to contextualize the setbacks of solar panel siting for local government.



## Project Hierarchy

```
/README.md - this document, the overall description
/doc - documentation and meeting notes
/map-component-sample-react - working src
/solar_siting_react - next.js attempt
```



## Configuration and Compatibility

The initial implementation method is to complete the development of this webapp using ArcGIS Experience. However, after doing some research it seems that the ArcGIS Experience toolkit does not provide enough element to construct a complete workflow to support the spatial analysis (more specifically buffer and overlay) that is intrinsically needed in this project.

Thus in the development process I switched and based the whole project on React with ArcGIS SDK for JavaScript for implementation.

**Tool versions**

- React 18.2.0
- ArcGIS SDK for JS 4.31
- node.js 22.13.0
- npm 10.9.2



## How to Run

1. Go to the source folder

2. `npm install` to install the node modules

3. `npm run` or `npm run dev` to see in debug mode

4. Go to https://localhost:3001 and explore

   Note that the port number might change due to setting



## Deployed Project

[TBD: Published Project Link]