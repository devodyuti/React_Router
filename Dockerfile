From node
#Add command or copy command is used to copy files which is already in one 
#particular directory into another directory from host to container

# env command_  this env command is used to set the enviroment variables into the container if 
# your application needs some enviromet variables to be set> these are basically some key value pairs
# ex_ ENV SERVER_WORKS $

#IN YOUR DOCKER CCONTAINER SOMETIMES YOU WOULD LIKE TO GO TO A SPECIFIC DIRECTORY AND EXECUTE YOUR COMMANDS 
#ESPECIALLY WHEN YOU HAVE CMD IN YOUR DOCKER FILE> DOCKER CONTAINER WILL OPEN A BASH WINDOW/Shell AND 
# you will be executin that in that path mentioned in your WORKDIR command in your Docker file
# usage: WORKDIR PATH~/

#EXPOSE 8080

# VOLUME COMMAND IS THE COMMAND WHERE THE CONTAINER IS USED TO PLACE ALL THE FILES IN YOUR CONTAINER

# USAGE: VOLUME  {*/MY_FILES}
RUN mkdir -p /usr/react-routes
WORKDIR /usr/react-routes
EXPOSE 8080
COPY package.json /usr/react-routes/
COPY bootstrap.css /usr/react-routes/
COPY webpack.config.js /usr/react-routes/
COPY index.html /usr/react-routes/
ADD src /usr/react-routes/src
RUN npm install
# RUN npm run build
CMD ['npm','run','build']

