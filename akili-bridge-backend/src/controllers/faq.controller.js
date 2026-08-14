const prisma = require('../config/prisma');
const logger = require('../utils/logger');

const getAllFaqs = async (req, res) => {
  try {
    const faqs = await prisma.fAQ.findMany({
      orderBy: [
        { category: 'asc' },
        { order: 'asc' },
      ],
    });

    res.json({
      success: true,
      data: faqs,
    });
  } catch (error) {
    logger.error('Get all FAQs error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch FAQs',
    });
  }
};

const getFaqById = async (req, res) => {
  try {
    const { id } = req.params;

    const faq = await prisma.fAQ.findUnique({
      where: { id: parseInt(id) },
    });

    if (!faq) {
      return res.status(404).json({
        success: false,
        message: 'FAQ not found',
      });
    }

    res.json({
      success: true,
      data: faq,
    });
  } catch (error) {
    logger.error('Get FAQ by ID error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch FAQ',
    });
  }
};

const createFaq = async (req, res) => {
  try {
    const { question, answer, category, order } = req.body;

    const faq = await prisma.fAQ.create({
      data: {
        question,
        answer,
        category,
        order: order || 0,
      },
    });

    res.status(201).json({
      success: true,
      message: 'FAQ created successfully',
      data: faq,
    });
  } catch (error) {
    logger.error('Create FAQ error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to create FAQ',
    });
  }
};

const updateFaq = async (req, res) => {
  try {
    const { id } = req.params;
    const { question, answer, category, order } = req.body;

    const existingFaq = await prisma.fAQ.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existingFaq) {
      return res.status(404).json({
        success: false,
        message: 'FAQ not found',
      });
    }

    const faq = await prisma.fAQ.update({
      where: { id: parseInt(id) },
      data: {
        question: question || existingFaq.question,
        answer: answer || existingFaq.answer,
        category: category || existingFaq.category,
        order: order !== undefined ? order : existingFaq.order,
      },
    });

    res.json({
      success: true,
      message: 'FAQ updated successfully',
      data: faq,
    });
  } catch (error) {
    logger.error('Update FAQ error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to update FAQ',
    });
  }
};

const deleteFaq = async (req, res) => {
  try {
    const { id } = req.params;

    const existingFaq = await prisma.fAQ.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existingFaq) {
      return res.status(404).json({
        success: false,
        message: 'FAQ not found',
      });
    }

    await prisma.fAQ.delete({
      where: { id: parseInt(id) },
    });

    res.json({
      success: true,
      message: 'FAQ deleted successfully',
    });
  } catch (error) {
    logger.error('Delete FAQ error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to delete FAQ',
    });
  }
};

module.exports = {
  getAllFaqs,
  getFaqById,
  createFaq,
  updateFaq,
  deleteFaq,
};