FROM node
WORKDIR /
COPY . /
EXPOSE 7012
CMD ["yarn","run","start:tsc"]
