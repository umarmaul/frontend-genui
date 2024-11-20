import pg from "pg";

const poolConfig = {
    host: "145.223.117.210",
    port: 6543,
    user: "postgres",
    password:
        "Ep99DiEJ05RxqEjtgHPVG9O1JSIGDSvXgEMgv4x3OWgIl9XuMN9vHJo7FeIJD623",
    database: "postgres",
};

export const pool = new pg.Pool(poolConfig);
