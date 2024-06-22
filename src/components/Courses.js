import React from 'react';

const Courses = () => {
  // Example course data with images
  const Courses = [
    {
      id: 1,
      name: 'React Basics',
      description: 'Learn the basics of React.',
      videoUrl: 'https://www.youtube.com/watch?v=1stVideo'
    },
    {
      id: 2,
      name: 'Advanced React',
      description: 'Dive deeper into React.',
      videoUrl: 'https://www.youtube.com/watch?v=2ndVideo'
    },
    {
      id: 3,
      name: 'JavaScript Essentials',
      description: 'Understand the fundamentals of JavaScript.',
      videoUrl: 'https://www.youtube.com/watch?v=3rdVideo'
    },
    {
      id: 4,
      name: 'Node.js for Beginners',
      description: 'Introduction to Node.js and backend development.',
      videoUrl: 'https://www.youtube.com/watch?v=4thVideo'
    },
    {
      id: 5,
      name: 'Python Fundamentals',
      description: 'Learn the basics of Python programming language.',
      videoUrl: 'https://www.youtube.com/watch?v=5thVideo'
    },
    {
      id: 6,
      name: 'Advanced JavaScript',
      description: 'Explore advanced concepts in JavaScript programming.',
      videoUrl: 'https://www.youtube.com/watch?v=6thVideo'
    },
    {
      id: 7,
      name: 'React Native Essentials',
      description: 'Build mobile apps using React Native framework.',
      videoUrl: 'https://www.youtube.com/watch?v=7thVideo'
    },
    {
      id: 8,
      name: 'Docker Mastery',
      description: 'Master containerization using Docker and Kubernetes.',
      videoUrl: 'https://www.youtube.com/watch?v=8thVideo'
    },
    {
      id: 9,
      name: 'Vue.js Crash Course',
      description: 'Get up to speed with Vue.js framework quickly.',
      videoUrl: 'https://www.youtube.com/watch?v=9thVideo'
    },
    {
      id: 10,
      name: 'Angular Essentials',
      description: 'Essential concepts for building applications with Angular.',
      videoUrl: 'https://www.youtube.com/watch?v=10thVideo'
    },
    {
      id: 11,
      name: 'Java Programming Basics',
      description: 'Introduction to Java programming language.',
      videoUrl: 'https://www.youtube.com/watch?v=11thVideo'
    },
    {
      id: 12,
      name: 'C# Fundamentals',
      description: 'Learn the basics of C# programming language.',
      videoUrl: 'https://www.youtube.com/watch?v=12thVideo'
    },
    {
      id: 13,
      name: 'PHP Crash Course',
      description: 'Quick dive into PHP scripting language.',
      videoUrl: 'https://www.youtube.com/watch?v=13thVideo'
    },
    {
      id: 14,
      name: 'Ruby on Rails Intro',
      description: 'Introduction to Ruby on Rails web framework.',
      videoUrl: 'https://www.youtube.com/watch?v=14thVideo'
    },
    {
      id: 15,
      name: 'SQL for Beginners',
      description: 'Fundamentals of Structured Query Language (SQL).',
      videoUrl: 'https://www.youtube.com/watch?v=15thVideo'
    }
    
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {Courses.map(course => (
        <div key={course.id} style={{ width: 'calc(50% - 10px)' }}>
          <h2>{course.name}</h2>
          <div style={{ position: 'relative', paddingTop: '56.25%', marginBottom: '20px' }}>
            <iframe
              src={course.videoUrl.replace('watch?v=', 'embed/')}
              title={course.name}
              frameBorder="0"
              allowFullScreen
              style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}
            ></iframe>
          </div>
          <p>{course.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Courses;
