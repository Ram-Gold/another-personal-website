const projects = [
  {
    name: "Idol Mixes",
    url: "https://idol-mixes.vercel.app/",
    description: "Idol Chant and Mixes Dictionary",
  },
  {
    name: "Koncentrate",
    url: "https://github.com/Ram-Gold/koncentrate",
    description: "Focus and productivity tool",
  },
  {
    name: "Domodomo",
    url: "https://domodomo.site/",
    description: "Web tools & AI, Co-founded",
  },
]

const links = [
  { label: "ramguinto.tech", url: "https://ramguinto.tech" },
  { label: "LinkedIn", url: "https://linkedin.com/in/ram-guinto" },
  { label: "GitHub", url: "https://github.com/ramgolds" },
]

function App() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-8 max-w-md w-full space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Ram Achilles O. Guinto</h1>
          <p className="text-sm text-indigo-400 font-medium mt-1">AI Engineer / Developer / IT</p>
          <p className="text-sm text-gray-500 mt-1">
            <a href="mailto:ramgolds@proton.me" className="hover:text-gray-300 transition-colors">
              ramgolds@proton.me
            </a>
          </p>
        </div>

        <div className="border-t border-gray-800 pt-5">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Projects</h2>
          <ul className="space-y-2">
            {projects.map((project) => (
              <li key={project.url}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-lg px-3 py-2 -mx-3 text-sm text-gray-300 hover:bg-gray-800/60 hover:text-white transition-colors"
                >
                  <span className="font-medium">{project.name}</span>
                  <span className="text-xs text-gray-600 group-hover:text-gray-400 transition-colors">
                    {project.description}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-gray-800 pt-5 flex gap-3 flex-wrap">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
