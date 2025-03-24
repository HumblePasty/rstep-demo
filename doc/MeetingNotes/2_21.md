# Meeting Notes 2/21

## Ella's Updates



## Updates in to-do list

**UI Adjustments**

![image-20250220191940415](./Meeting Notes 2_21.assets/image-20250220191940415.png)

- [x] Reorganized the buttons, now categorized in action sets
  - [x] Adjusted the "Create new polygon" function - now with better interaction
- [x] Adjusted the visibilities of the layers after loading - now web tool is less messy
- [x] Updated "About" page, now with web tool description and using instructions
- [x] Completed the "User" section, now can log out



**Data Functions**

- [x] "Add new layer" button

  import user-uploaded shapefiles (in zip folder)

- [ ] Buffer tools

  - [x] **Road buffer tool**:  select roads -> generate buffer -> clip with road buffer

    **Partially done**

  - [ ] **House buffer tool**: select house -> generate buffer -> clip with house buffer

    - [x] Step one: Add building footprint data

      A nice platform: https://planetarycomputer.microsoft.com/catalog

      MS building footprint project: https://planetarycomputer.microsoft.com/dataset/ms-buildings

      [Or, Google Map API: https://developers.google.com/maps/documentation/geocoding/building-attributes]

      Request building data with API: 

      **Data conversion and add to current map as a new feature layer**



**Debugs**

- [ ] Solved issue in website deployment

  now accessible at GitHub Pages: https://humblepasty.github.io/rstep-siting-tool

  due to reconstruction, deployment is not fully done

- [x] Solved issues in data exporting, now results are downloaded as shapefiles

- [x] Solved issues in polygon editing, now editing is updated every time a polygon is closed



## Standing issues and next steps

- [ ] Proceed with buffer tools
  - [ ] Complete road buffer tool (overlaying)
  - [ ] Complete the household buffer tool step two:
- [ ] Statistics summary (report) tab (ideally collapsible from bottom)
  - [ ] Distance to substations
  - [ ] Distance to other solar panel sites
  - [ ] Distance to transmission lines
- [ ] Update the "About" tab
  - [ ] Add more instructions
  - [ ] [Pending] better instructions interactions (notes in tooltips with link to pop-up windows)
- [ ] [Pending] Navigating issue
  - [ ] Might involve reconstructing the project



- keep minimum of GIS knowledge
- Adjust the text (descriptions) to be project-specific 
- buffer range slider
  - workflow: select the polygon
  - intersect 
  - select buffer distance
  - for buildings, each feature should be able to have unique buffer distance
- try hosting on ArcGIS online
  - EGLE: https://www.michigan.gov/egle/maps-data