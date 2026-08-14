const prisma = require('../config/prisma');
const logger = require('../utils/logger');

const getAllMentors = async (req, res) => {
  try {
    const mentors = await prisma.mentor.findMany({
      orderBy: { createdAt: 'desc' },
    });

    res.json({
      success: true,
      data: mentors,
    });
  } catch (error) {
    logger.error('Get all mentors error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch mentors',
    });
  }
};

const getMentorById = async (req, res) => {
  try {
    const { id } = req.params;

    const mentor = await prisma.mentor.findUnique({
      where: { id: parseInt(id) },
    });

    if (!mentor) {
      return res.status(404).json({
        success: false,
        message: 'Mentor not found',
      });
    }

    res.json({
      success: true,
      data: mentor,
    });
  } catch (error) {
    logger.error('Get mentor by ID error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch mentor',
    });
  }
};

const createMentor = async (req, res) => {
  try {
    const { name, title, bio, imageUrl, expertise } = req.body;

    const mentor = await prisma.mentor.create({
      data: {
        name,
        title,
        bio,
        imageUrl,
        expertise: expertise || [],
      },
    });

    res.status(201).json({
      success: true,
      message: 'Mentor created successfully',
      data: mentor,
    });
  } catch (error) {
    logger.error('Create mentor error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to create mentor',
    });
  }
};

const updateMentor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, title, bio, imageUrl, expertise } = req.body;

    const existingMentor = await prisma.mentor.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existingMentor) {
      return res.status(404).json({
        success: false,
        message: 'Mentor not found',
      });
    }

    const mentor = await prisma.mentor.update({
      where: { id: parseInt(id) },
      data: {
        name: name || existingMentor.name,
        title: title || existingMentor.title,
        bio: bio || existingMentor.bio,
        imageUrl: imageUrl !== undefined ? imageUrl : existingMentor.imageUrl,
        expertise: expertise !== undefined ? expertise : existingMentor.expertise,
      },
    });

    res.json({
      success: true,
      message: 'Mentor updated successfully',
      data: mentor,
    });
  } catch (error) {
    logger.error('Update mentor error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to update mentor',
    });
  }
};

const deleteMentor = async (req, res) => {
  try {
    const { id } = req.params;

    const existingMentor = await prisma.mentor.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existingMentor) {
      return res.status(404).json({
        success: false,
        message: 'Mentor not found',
      });
    }

    await prisma.mentor.delete({
      where: { id: parseInt(id) },
    });

    res.json({
      success: true,
      message: 'Mentor deleted successfully',
    });
  } catch (error) {
    logger.error('Delete mentor error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to delete mentor',
    });
  }
};

module.exports = {
  getAllMentors,
  getMentorById,
  createMentor,
  updateMentor,
  deleteMentor,
};