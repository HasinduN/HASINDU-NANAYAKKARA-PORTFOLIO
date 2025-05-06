const projects = [
  {
    title: 'Weather App',
    description: 'Weather forecasts using OpenWeather API and React.',
    github: 'https://github.com/yourusername/weather-app',
    image: '/images/weather.png',
    tags: ['React', 'API', 'Tailwind'],
  },
  {
    title: 'Task Manager',
    description: 'Full-stack task manager built with Next.js and MongoDB.',
    github: 'https://github.com/yourusername/task-manager',
    image: '/images/tasks.png',
    tags: ['Next.js', 'MongoDB', 'Tailwind'],
  },
];

export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto mt-10 space-y-8">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <img src={project.image} alt={project.title} className="rounded mb-4 w-full h-48 object-cover" />
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map((tag, i) => (
                <span key={i} className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-white text-xs px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              className="inline-block mt-4 text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}