FROM oven/bun:latest

WORKDIR /app

COPY package.json ./
COPY bun.lock ./
COPY prisma/schema.prisma ./ 
COPY .env ./

RUN bun install

COPY . .

EXPOSE 3000

CMD ["bun", "dev"]
