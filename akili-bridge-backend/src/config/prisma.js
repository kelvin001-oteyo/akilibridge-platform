const { PrismaClient } = require('@prisma/client');

// PrismaClient doesn't accept connectionLimit directly
// Use the datasource URL for connection pooling settings
const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error'],
});

module.exports = prisma;