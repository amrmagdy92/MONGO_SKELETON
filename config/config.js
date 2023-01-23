const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "SECRET_KEY",
    mongoURI: process.env.MONGODB_URI || process.env.MONGO_HOST || `mongodb://${process.env.HOST_IP || '127.0.0.1'}:${process.env.MONGO_PORT || 27017}`,
    jwtExpiry: 999
}

export default config