## Prerequisites for running the app Locally
* .Net Core (v7+)
* Node js (v18+)
* Visual Studio Code / Visual Studio (optional)

## How to build 
### From command line.
* Run `dotnet build`
* Run `dotnet start` 
### From VSCode
* Open the `Run and Debug` option from the Activity Panel
* Select the `.Net Core Launch (web)` option and click `Start Debugging (F5)`
* Open the browser to https://localhost:44403/pizzas to view the Web UI
* Swagger UI for API Endpoints can be found here: https://localhost:7100/swagger/index.html 


## How to run tests
* Run `dotnet test`

## A note on data persistence and deployment
In order to simplify deployment, we are using an InMemory data provider from Microsoft. 

The web application can be packaged as a docker container and deployed to fly.io. See repo link here: https://github.com/Arshu/ASP.NET-Core-In-Fly.io 

and fly.io documentation here: https://fly.io/docs/languages-and-frameworks/dockerfile/ 