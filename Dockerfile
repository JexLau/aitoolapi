FROM node
WORKDIR /
COPY . /
EXPOSE 7012
CMD ["yarn","run","dev"]
