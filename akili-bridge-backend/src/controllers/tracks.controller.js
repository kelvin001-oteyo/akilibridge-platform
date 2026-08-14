const prisma = require('../config/prisma');
const logger = require('../utils/logger');

const getAllTracks = async (req, res) => {
  try {
    const tracks = await prisma.track.findMany({
      orderBy: { createdAt: 'desc' },
    });

    res.json({
      success: true,
      data: tracks,
    });
  } catch (error) {
    logger.error('Get all tracks error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch tracks',
    });
  }
};

const getTrackById = async (req, res) => {
  try {
    const { id } = req.params;

    const track = await prisma.track.findUnique({
      where: { id: parseInt(id) },
    });

    if (!track) {
      return res.status(404).json({
        success: false,
        message: 'Track not found',
      });
    }

    res.json({
      success: true,
      data: track,
    });
  } catch (error) {
    logger.error('Get track by ID error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch track',
    });
  }
};

const createTrack = async (req, res) => {
  try {
    const { name, description, icon, color } = req.body;

    const track = await prisma.track.create({
      data: {
        name,
        description,
        icon,
        color,
      },
    });

    res.status(201).json({
      success: true,
      message: 'Track created successfully',
      data: track,
    });
  } catch (error) {
    logger.error('Create track error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to create track',
    });
  }
};

const updateTrack = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, icon, color } = req.body;

    const existingTrack = await prisma.track.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existingTrack) {
      return res.status(404).json({
        success: false,
        message: 'Track not found',
      });
    }

    const track = await prisma.track.update({
      where: { id: parseInt(id) },
      data: {
        name: name || existingTrack.name,
        description: description || existingTrack.description,
        icon: icon !== undefined ? icon : existingTrack.icon,
        color: color !== undefined ? color : existingTrack.color,
      },
    });

    res.json({
      success: true,
      message: 'Track updated successfully',
      data: track,
    });
  } catch (error) {
    logger.error('Update track error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to update track',
    });
  }
};

const deleteTrack = async (req, res) => {
  try {
    const { id } = req.params;

    const existingTrack = await prisma.track.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existingTrack) {
      return res.status(404).json({
        success: false,
        message: 'Track not found',
      });
    }

    await prisma.track.delete({
      where: { id: parseInt(id) },
    });

    res.json({
      success: true,
      message: 'Track deleted successfully',
    });
  } catch (error) {
    logger.error('Delete track error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to delete track',
    });
  }
};

module.exports = {
  getAllTracks,
  getTrackById,
  createTrack,
  updateTrack,
  deleteTrack,
};