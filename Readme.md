This is a template git repo for single-page visualization applications with a flask backend for running python code (e.g. for machine learning calls).  

/frontend uses a react app set up to use typescript. 
/backend uses a flask app.


### Running

The docker-compose file should be set up to run the app using 
>sudo docker-compose up

The system should be visible on localhost:8000 once the build process is finished. 
If using a vpn you may need to disable it for it to work

When running a production server you will need to edit the docker-compose.yml file to run docker/frontend/init.sh instead of docker/frontend/init-development.sh

### Making an actual project
If using this code as the base for a new project you will need to update the folder names to replace MLVis_Template in the following locations
* docker-compose.yml
* docker/frontend/init.sh
* docker/frontend/init-development.sh
* docker/backend/init.sh
* 
You will also probably want to change the container names to use a more project specific name in
* docker-compose.yml
* docker/proxy/https-forwarding
* frontend/src/modules/Endpoints.ts (when using development)

### deployment
When deploying to an EVL server it is recommended to make the following changes in a deployment branch so it's easier to rebase any changes.

You need to uncomment out the proxy container in the docker-compose.yml and edit the Endpoint.js file to replace
> http://localhost:8000

to

> https://\<servername>.evl.uic.edu/api

NOTE: keep all paths after http://localhost:8000 the same for queries. If you call 
> http://localhost:8000/backend


switch to 
> https://\<servername>.evl.uic.edu/api/backend

As well as update all folder paths and names in the following files in docker/proxy/https-forwarding.conf