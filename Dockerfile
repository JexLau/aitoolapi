FROM node
WORKDIR /
COPY . /
RUN yarn
EXPOSE 7012
CMD ["yarn","run","start:tsc"]
