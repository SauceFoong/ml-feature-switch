FROM node:16
WORKDIR /
COPY package*.json ./
COPY prisma ./prisma/
COPY __test__ ./__test__/

RUN npm install
COPY . .

RUN rm -rf build
RUN npx prisma generate
RUN npm run build
EXPOSE 8000
CMD [ "npm", "run", "dev" ]