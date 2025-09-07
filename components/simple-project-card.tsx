interface SimpleProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  link?: string
  repo?: string
}

export function SimpleProjectCard({ title, description, tags, image }: SimpleProjectCardProps) {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 group">
      <div className="aspect-video bg-gray-700 rounded-lg mb-4 overflow-hidden relative">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = `/placeholder.svg?height=200&width=300&text=${encodeURIComponent(title)}`
          }}
        />
        <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-300 text-sm mb-4 line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full transition-all duration-300 hover:bg-blue-500 hover:scale-110 cursor-default"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
