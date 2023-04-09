FROM node
WORKDIR /
COPY . /
CMD ["yarn","run","start:tsc"]
