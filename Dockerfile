FROM node
WORKDIR /
COPY . /
RUN npm install
EXPOSE 7012
CMD ["npm","run","start:tsc"]
