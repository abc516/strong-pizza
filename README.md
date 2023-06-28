## Prerequisites for running the app Locally
* .Net Core (v7+)
* Visual Studio Code / Visual Studio (optional)

## How to build 
### From command line.
* Run `dotnet build`
* Run `dotnet start` 
### From VSCode
* Open the `Run and Debug` option from the Activity Panel
* Select the `.Net Core Launch (web)` option and click `Start Debugging (F5)`
* Open the browser to https://localhost:44403/pizzas 


## How to run tests
* Run `dotnet test`

## A note on data persistence
In order to simplify deployment, we are using an InMemory data provider from Microsoft. 