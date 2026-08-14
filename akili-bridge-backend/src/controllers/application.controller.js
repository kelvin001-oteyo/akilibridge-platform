const prisma = require('../config/prisma');
const logger = require('../utils/logger');

// Submit new application
const submitApplication = async (req, res) => {
  try {
    const {
      fullName, email, phone, country, university, degree,
      yearOfStudy, gpa, availability, timezone, labFirst,
      labSecond, portfolio, type
    } = req.body;

    // Get file paths from multer
    const files = req.files || {};
    const cv = files.cv ? files.cv[0].filename : null;
    const transcript = files.transcript ? files.transcript[0].filename : null;
    const sop = files.sop ? files.sop[0].filename : null;
    const sampleWork = files.sampleWork ? files.sampleWork[0].filename : null;

    // Validate required files
    if (!cv) {
      return res.status(400).json({
        success: false,
        message: 'CV is required'
      });
    }

    if (!transcript) {
      return res.status(400).json({
        success: false,
        message: 'Transcript is required'
      });
    }

    // Create application
    const application = await prisma.application.create({
      data: {
        fullName,
        email,
        phone,
        country,
        university,
        degree,
        yearOfStudy,
        gpa,
        availability,
        timezone,
        labFirst,
        labSecond: labSecond || null,
        portfolio: portfolio || null,
        cv,
        transcript,
        sop: sop || null,
        sampleWork: sampleWork || null,
        type: type || 'fellowship',
        status: 'pending'
      }
    });

    // Send confirmation email (will implement later)
    // await sendApplicationConfirmation(email, fullName);

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully',
      data: application
    });

  } catch (error) {
    logger.error('Submit application error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to submit application',
      error: error.message
    });
  }
};

// Get all applications (Admin)
const getAllApplications = async (req, res) => {
  try {
    const { status, type, search } = req.query;
    
    const where = {};
    if (status) where.status = status;
    if (type) where.type = type;
    if (search) {
      where.OR = [
        { fullName: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
      ];
    }

    const applications = await prisma.application.findMany({
      where,
      orderBy: { createdAt: 'desc' }
    });

    res.json({
      success: true,
      data: applications
    });
  } catch (error) {
    logger.error('Get applications error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch applications'
    });
  }
};

// Get single application
const getApplicationById = async (req, res) => {
  try {
    const { id } = req.params;

    const application = await prisma.application.findUnique({
      where: { id: parseInt(id) }
    });

    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Application not found'
      });
    }

    res.json({
      success: true,
      data: application
    });
  } catch (error) {
    logger.error('Get application error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch application'
    });
  }
};

// Update application status (Admin)
const updateApplicationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, feedback } = req.body;

    const application = await prisma.application.update({
      where: { id: parseInt(id) },
      data: {
        status,
        feedback: feedback || null
      }
    });

    // Send status update email
    // await sendStatusUpdateEmail(application.email, application.fullName, status);

    res.json({
      success: true,
      message: 'Application status updated',
      data: application
    });
  } catch (error) {
    logger.error('Update application status error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to update application status'
    });
  }
};

// Delete application
const deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.application.delete({
      where: { id: parseInt(id) }
    });

    res.json({
      success: true,
      message: 'Application deleted successfully'
    });
  } catch (error) {
    logger.error('Delete application error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to delete application'
    });
  }
};

// Get application stats
const getApplicationStats = async (req, res) => {
  try {
    const total = await prisma.application.count();
    const pending = await prisma.application.count({ where: { status: 'pending' } });
    const reviewed = await prisma.application.count({ where: { status: 'reviewed' } });
    const accepted = await prisma.application.count({ where: { status: 'accepted' } });
    const rejected = await prisma.application.count({ where: { status: 'rejected' } });

    res.json({
      success: true,
      data: {
        total,
        pending,
        reviewed,
        accepted,
        rejected
      }
    });
  } catch (error) {
    logger.error('Get application stats error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch application stats'
    });
  }
};

module.exports = {
  submitApplication,
  getAllApplications,
  getApplicationById,
  updateApplicationStatus,
  deleteApplication,
  getApplicationStats
};