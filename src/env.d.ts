/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
readonly DATABASE_URL: string;
readonly DATABASE_URL_UNPOOLED: string;
readonly PGHOST: string;
readonly PGHOST_UNPOOLED: string;
readonly PGUSER: string;
readonly PGDATABASE: string;
readonly PGPASSWORD: string;
readonly POSTGRES_URL: string;
readonly POSTGRES_URL_NON_POOLING: string;
readonly POSTGRES_USER: string;
readonly POSTGRES_HOST: string;
readonly POSTGRES_PASSWORD: string;
readonly POSTGRES_DATABASE: string;
readonly POSTGRES_URL_NO_SSL: string;
readonly POSTGRES_PRISMA_URL: string;
}