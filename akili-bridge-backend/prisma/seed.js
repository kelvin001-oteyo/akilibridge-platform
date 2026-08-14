const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Seed Admin
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@akilibridge.org';
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
  
  const hashedPassword = await bcrypt.hash(adminPassword, 10);
  
  const admin = await prisma.admin.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      password: hashedPassword,
      username: 'Admin',
      role: 'admin',
    },
  });
  console.log(`✅ Admin created: ${admin.email}`);

  // Seed Tracks
  const tracks = [
    {
      name: 'EdTech & Digital Learning',
      description: 'Research on innovative educational technologies and digital learning solutions for African classrooms.',
      icon: '📚',
      color: '#2fb3ff',
    },
    {
      name: 'Energy Storage & Battery Technology',
      description: 'Developing sustainable energy storage solutions and battery technologies for off-grid communities.',
      icon: '🔋',
      color: '#ffd93d',
    },
    {
      name: 'Nanotechnology & Advanced Materials',
      description: 'Exploring nanomaterials and advanced materials for applications in medicine, electronics, and manufacturing.',
      icon: '🧪',
      color: '#ff6b9d',
    },
    {
      name: 'Artificial Intelligence & Data Science',
      description: 'Building AI solutions and data science applications to address African challenges.',
      icon: '🤖',
      color: '#8a7ff7',
    },
    {
      name: 'Biotechnology & Health Innovations',
      description: 'Advancing biotechnology research for disease prevention and healthcare delivery in Africa.',
      icon: '🧬',
      color: '#4CAF50',
    },
    {
      name: 'Renewable Energy Systems',
      description: 'Designing and optimizing renewable energy systems for sustainable development across the continent.',
      icon: '☀️',
      color: '#ff6a00',
    },
  ];

  for (const track of tracks) {
    await prisma.track.upsert({
      where: { id: track.id || 0 },
      update: {},
      create: track,
    });
  }
  console.log(`✅ ${tracks.length} tracks seeded`);

  // Seed Mentors
  const mentors = [
    {
      name: 'Dr. Alice Mwangi',
      title: 'Senior Research Scientist',
      bio: 'Expert in AI and machine learning with over 15 years of experience in African research institutions.',
      imageUrl: 'https://ui-avatars.com/api/?name=Alice+Mwangi&background=2fb3ff&color=fff&size=128',
      expertise: ['Artificial Intelligence', 'Machine Learning', 'Data Science'],
    },
    {
      name: 'Prof. David Kagame',
      title: 'Director of Research',
      bio: 'Leading researcher in renewable energy systems and sustainable development technologies.',
      imageUrl: 'https://ui-avatars.com/api/?name=David+Kagame&background=8a7ff7&color=fff&size=128',
      expertise: ['Renewable Energy', 'Sustainable Development', 'Energy Storage'],
    },
    {
      name: 'Dr. Grace Uwimana',
      title: 'Biotechnology Research Lead',
      bio: 'Specializing in biotechnology and health innovations for African healthcare systems.',
      imageUrl: 'https://ui-avatars.com/api/?name=Grace+Uwimana&background=ff6b9d&color=fff&size=128',
      expertise: ['Biotechnology', 'Health Innovations', 'Medical Research'],
    },
    {
      name: 'Prof. James Oduor',
      title: 'Nanotechnology Expert',
      bio: 'Pioneering nanotechnology research for materials science and industrial applications in East Africa.',
      imageUrl: 'https://ui-avatars.com/api/?name=James+Oduor&background=ffd93d&color=000&size=128',
      expertise: ['Nanotechnology', 'Materials Science', 'Industrial Research'],
    },
    {
      name: 'Dr. Sarah Akinyi',
      title: 'Research Methodologist',
      bio: 'Expert in research methodologies, data analysis, and scientific writing for early-career researchers.',
      imageUrl: 'https://ui-avatars.com/api/?name=Sarah+Akinyi&background=4CAF50&color=fff&size=128',
      expertise: ['Research Methods', 'Data Analysis', 'Scientific Writing'],
    },
  ];

  for (const mentor of mentors) {
    await prisma.mentor.upsert({
      where: { id: mentor.id || 0 },
      update: {},
      create: mentor,
    });
  }
  console.log(`✅ ${mentors.length} mentors seeded`);

  // Seed FAQs
  const faqs = [
    {
      question: 'Who can apply for the fellowship?',
      answer: 'Undergraduate students in Rwanda who are passionate about STEM and eager to gain hands-on research experience.',
      category: 'Eligibility',
      order: 1,
    },
    {
      question: 'What fields are covered?',
      answer: 'We accept applications from all STEM fields including but not limited to Computer Science, Engineering, Biology, Chemistry, Physics, and Mathematics.',
      category: 'Eligibility',
      order: 2,
    },
    {
      question: 'How long is the program?',
      answer: 'The fellowship is a one-year program with structured mentorship, research training, and professional development.',
      category: 'Process',
      order: 1,
    },
    {
      question: 'Is there a deadline?',
      answer: 'Applications are accepted on a rolling basis. Check our website for specific cohort deadlines.',
      category: 'Process',
      order: 2,
    },
    {
      question: 'Is the program fully funded?',
      answer: 'Yes, selected fellows receive full funding including tuition support, research materials, and mentorship.',
      category: 'Logistics',
      order: 1,
    },
    {
      question: 'Do I need prior research experience?',
      answer: 'No prior research experience is required. We welcome students who are curious and motivated to learn.',
      category: 'Eligibility',
      order: 3,
    },
    {
      question: 'What happens after the program?',
      answer: 'Graduates join our alumni network with access to continued mentorship, research opportunities, and career support.',
      category: 'After',
      order: 1,
    },
  ];

  for (const faq of faqs) {
    await prisma.fAQ.upsert({
      where: { id: faq.id || 0 },
      update: {},
      create: faq,
    });
  }
  console.log(`✅ ${faqs.length} FAQs seeded`);

  console.log('🎉 Seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });