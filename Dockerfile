# Builds the link index and bakes it, with the redirect table, into dslf.
#
# Images come from GHCR: dslf moved off Docker Hub, and while it still mirrors
# there, GHCR is the source of truth.
FROM ghcr.io/vpetersson/dslf:builder AS static
COPY redirects.csv ./
COPY link-index.yaml ./
RUN bun run build

FROM ghcr.io/vpetersson/dslf:latest
COPY --from=static /static/dist /app/static
COPY --from=static /static/redirects.csv /app/
