# FRONTEND BUILDER
FROM --platform=$BUILDPLATFORM node:latest as vitebuilder
WORKDIR /app
ADD . .
RUN npm install && npm run build

# RUNNER
FROM alpine as runner
COPY --from=vitebuilder /app/dist /app/version/www
CMD cp -rf /app/version/www/* /app/www/
