FROM node
WORKDIR /app
COPY package.json .
RUN yarn
COPY . .
EXPOSE 9000
CMD ["yarn", "dev"]