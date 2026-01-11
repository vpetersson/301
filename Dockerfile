# Dockerfile
FROM vpetersson/dslf:builder AS static
COPY redirects.csv ./
COPY link-index.yaml ./
RUN bun run build

FROM vpetersson/dslf:latest
COPY --from=static /static/dist /app/static
COPY --from=static /static/redirects.csv /app/
