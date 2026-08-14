const app = require('./app');
const { port, nodeEnv } = require('./config/env');
const prisma = require('./config/prisma');
const logger = require('./utils/logger');

let isShuttingDown = false;

const startServer = async () => {
  let retries = 3;
  
  while (retries > 0) {
    try {
      await prisma.$connect();
      console.log('✅ Database connected successfully');
      break;
    } catch (error) {
      retries--;
      console.log(`❌ Database connection failed. Retries left: ${retries}`);
      console.log(error.message);
      
      if (retries === 0) {
        console.error('❌ Failed to connect to database after multiple attempts');
        console.log('💡 Tip: Make sure your Neon database is not paused');
        console.log('💡 Visit: https://neon.tech and resume your database');
        process.exit(1);
      }
      
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
  }

  // Start server
  const server = app.listen(port, () => {
    logger.info(`🚀 Server running on http://localhost:${port}`);
    logger.info(`📦 Environment: ${nodeEnv}`);
    logger.info(`📝 Health check: http://localhost:${port}/health`);
  });

  // Keep connection alive with ping
  setInterval(async () => {
    if (!isShuttingDown) {
      try {
        await prisma.$queryRaw`SELECT 1`;
      } catch (error) {
        console.log('⚠️ Database connection lost, reconnecting...');
        try {
          await prisma.$connect();
          console.log('✅ Database reconnected');
        } catch (reconnectError) {
          console.error('❌ Failed to reconnect:', reconnectError.message);
        }
      }
    }
  }, 30000); // Ping every 30 seconds

  return server;
};

// Graceful shutdown
const gracefulShutdown = async (signal) => {
  if (isShuttingDown) return;
  isShuttingDown = true;
  
  console.log(`\n🛑 Received ${signal}, shutting down gracefully...`);
  
  try {
    await prisma.$disconnect();
    console.log('🔌 Database disconnected');
  } catch (error) {
    console.error('Error disconnecting database:', error.message);
  }
  
  process.exit(0);
};

process.on('SIGINT', () => gracefulShutdown('SIGINT'));
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('💥 Uncaught Exception:', error.message);
  gracefulShutdown('uncaughtException');
});

// Handle unhandled rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('💥 Unhandled Rejection:', reason);
});

startServer();