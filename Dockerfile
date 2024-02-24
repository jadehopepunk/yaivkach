# FRONTEND BUILDER
FROM --platform=$BUILDPLATFORM node:latest as vitebuilder
WORKDIR /app
ADD . .
RUN npm install && npm run build

# RUNNER
FROM alpine as runner
COPY --from=vitebuilder /app/dist /app/version/www
COPY --from=vitebuilder /app/deployment/nginx.app.conf /app/version/nginx/
COPY --from=vitebuilder /app/deployment/pibasho_app.json /app/version/registration/
CMD cp -rf /app/version/www/* /app/www/ && cp -rf /app/version/nginx/* /app/nginx/ && cp -rf /app/version/registration/* /app/registration/