FROM trion/ng-cli-karma
RUN apt-get update && apt-get -y install procps
WORKDIR /app
COPY /angular/package.json /app
RUN npm install
COPY /angular /app
#RUN ./node_modules/@angular/cli/bin/ng lint
#RUN ./node_modules/@angular/cli/bin/ng test --code-coverage  
RUN ./node_modules/@angular/cli/bin/ng e2e --protractorConfig=e2e/protractor-ci.conf.js
ARG CONTEXT
RUN mkdir /app/$CONTEXT
RUN npm run ng -- build --prod --base-href /$CONTEXT/ --outputPath ../$CONTEXT

#FROM nexus.d.lowes.com:8800/digital/node-v8:8.11.1-alpine
FROM node:9.6.1-alpine
ARG ROOT=lowes
ARG CONTEXT
WORKDIR /$ROOT
COPY --from=0 /app/$CONTEXT /$ROOT/$CONTEXT
#COPY --from=0 /app/coverage /$ROOT/$CONTEXT/coverage
COPY /server /$ROOT
RUN npm install
CMD npm run start-node