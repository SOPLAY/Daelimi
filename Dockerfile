FROM node:slim
WORKDIR "/usr/src/nextApp"
COPY . .
RUN yarn
RUN yarn build
CMD ["yarn","start"]