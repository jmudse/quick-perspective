# Quick Perspective

This is a template directory that creates a custom perspective in Cognos Analytics when uploaded as an extension. Perspectives are blank html/css/js containers where the only limitation is your imagination.

## Repository Tour

### ./ext/

The primary directory where you'll build the custom page. This entire directory gets zipped and uploaded to your Cognos environment as an extension.

> **./ext/spec.json** 
>
> Defines the Cognos extension to add the new glass custom perspective called `Quick_Perspective` that can be reached at `http://<your_cognos_url>:port/bi/?perspective=quickPerspective`. 

>**./ext/index.js**
>
> The core script that provides the content for the perspective.

> **./ext/index.css**
> 
> Primary CSS for the main content

> **./ext/headerBackground.png**
> 
> Included background image for the landing page header.

---
### ./dist_prod
The mirror of `./ext/` where a built zip directory will be created. No need to make changes in here.

---
### ./build.sh
The shell script that bundles the `./ext/` directory and deposits a zipped, versioned folder into the `/dist_prod/` directory

---

## Getting Started

You'll want to make changes to customize this template for your perspective.

1. Update `./package.json` to refelct your project name, description and author.
2. Update perspective naming in `./ext/spec.json`: 

    * What you choose for the `"name"` field needs to match the path name in the `"type"` and `"cssStyles"` fields. 

    * The `"perspective"` field needs to match the `"id"` field. This will also be the value of `<perspective_name>` in `http://<your_cognos_url>:port/bi/?perspective=<perspective_name>`

## How to build

*Run the following:*

```npm install```

then 

```./build.sh```

The last command will build and create a zip file under ```dist_prod``` folder.

The zip file can be upload the as an extension in the Cognos Analytcis `Manage` UI to activate the custom application.
