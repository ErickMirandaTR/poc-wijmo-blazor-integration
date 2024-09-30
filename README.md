# [POC] Cusmtom components with Blazor wrappers for wijmo
This repository is intended for creating a custom components with wrapper components for Wijmo, useful for working with Blazor.

---

## Project structrure

| Porject | Use |
|--------------------|-----------|
| TR.AngularBlazorWijmoClient | Angular application used as client for consuming final web assemblies custom components with wrapper components for wijmo|
| TR.BlazorWijmoComponents | Library with class wrappers for wijmo and useful content. Using RenderTreeBuilder. |
| TR.BlazorWijmoLibrary | Blazor WebAssembly project with custom elements, ready to distribute through NPM. |

---
## Debug custom components
1. Run following commands under TR.BlazorWijmoLibrary/NpmJS.
```shell
npm install
npm run build #Generates bundle
```
2. Start debugging using Debug configuration.

![image](https://github.com/user-attachments/assets/48c883c6-5631-46eb-9672-cbd94fbfa702)

## Publish project
1. Rigth click on TR.BlazorWijmoLibrary and select **Publish...**
2. Select **NpmPublish** profile and click on **Publish** button.

![image](https://github.com/user-attachments/assets/85c0fdbf-c8a9-4d4a-8899-40092b948139)

Once it is done, the published files will be under TR.BlazorWijmoLibrary/NpmJS/dist, now the following commands are optional commands to distribute the files using NPM.
```shell
npm link # Tests on local environment. Use "npm link blazor-wijmo-libary" on client application to complete the link.
npm package # Creates zip file with dist files.
npm publish # Publishes a package to the registry.
```
