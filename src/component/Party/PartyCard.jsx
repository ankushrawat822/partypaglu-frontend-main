
import { useState } from "react"
import { Calendar, MapPin, Users, Zap, Wine, Music, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"

const party = {
  title: "One Adda, Many Cheers: A Kolkata House Party Bash",
  description: "Unwind with strangers and music in a cozy setting. BYOB.",
  location: {
    address: "123, Some Street",
    area: "Rajarhat",
    city: "Kolkata",
  },
  date: "2025-06-14T18:30:00.000Z",
  time: "7 PM onwards",
  ageRange: { min: 23, max: 35 },
  coverCharge: 749,
  category: "House Party",
  imageUrl: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=200&fit=crop",
  attendeesCount: 23,
  isFillingFast: true,
}

export default function PartyCard() {
  const [isHovered, setIsHovered] = useState(false)

  const formatDate = () => {
    const date = new Date()
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 text-white to-slate-900 p-8 flex items-center justify-center">
      <div
        className="w-full max-w-md bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700/50 backdrop-blur-sm overflow-hidden rounded-xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Image Section with Overlay */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={party.imageUrl || "/placeholder.svg"}
            alt={party.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

          {/* Floating Icons Animation */}
          <div className="absolute inset-0 pointer-events-none">
            <Wine
              className={`absolute top-4 right-4 w-5 h-5 text-purple-300 transition-all duration-1000 ${
                isHovered ? "animate-bounce" : ""
              }`}
            />
            <Music
              className={`absolute top-8 left-6 w-4 h-4 text-blue-300 transition-all duration-1000 delay-200 ${
                isHovered ? "animate-pulse" : ""
              }`}
            />
            <Sparkles
              className={`absolute bottom-8 right-8 w-4 h-4 text-pink-300 transition-all duration-1000 delay-400 ${
                isHovered ? "animate-spin" : ""
              }`}
            />
          </div>

          {/* Category Badge */}
          <div className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-medium rounded-full shadow-lg">
            {party.category}
          </div>

          {/* Filling Fast Badge */}
          {party.isFillingFast && (
            <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-medium rounded-full animate-pulse flex items-center gap-1">
              <Zap className="w-3 h-3" />
              Filling Fast
            </div>
          )}
        </div>

        <div className="p-6 space-y-4 relative">
          {/* Title */}
          <h3 className="text-xl font-bold text-white leading-tight group-hover:text-purple-200 transition-colors duration-300">
            {party.title}
          </h3>

          {/* Description */}
          <p className="text-slate-300 text-sm leading-relaxed">{party.description}</p>

          {/* Details Grid */}
          <div className="space-y-3">
            {/* Date & Time */}
            <div className="flex items-center gap-3 text-slate-300">
              <Calendar className="w-4 h-4 text-blue-400" />
              <span className="text-sm">
                {formatDate(party.date)} • {party.time}
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 text-slate-300">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span className="text-sm">
                {party.location.area}, {party.location.city}
              </span>
            </div>

            {/* Age Range & Attendees */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-slate-300">
                <Users className="w-4 h-4 text-green-400" />
                <span className="text-sm">
                  Ages {party.ageRange.min}-{party.ageRange.max}
                </span>
              </div>
              <div className="flex items-center gap-1 text-slate-300">
                <div className="flex -space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-slate-800"
                    />
                  ))}
                </div>
                <span className="text-sm ml-2">+{party.attendeesCount} going</span>
              </div>
            </div>
          </div>

          {/* Price & Action */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
            <div className="text-white">
              <span className="text-2xl font-bold">₹{party.coverCharge}</span>
              <span className="text-slate-400 text-sm ml-1">per person</span>
            </div>

              <Link to="/party-details/1">
            <button className="px-6 py-2 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group flex items-center gap-2">
              Join Party
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
            </Link>
          </div>
        

          {/* Animated Bottom Border */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>
      </div>
    </div>
  )
}
