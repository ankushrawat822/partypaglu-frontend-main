import { useState } from "react";
import {
  Calendar,
  MapPin,
  Users,
  Zap,
  Wine,
  Music,
  Sparkles,
  ArrowLeft,
  Clock,
  CheckCircle,
  XCircle,
  Car,
  Cigarette,
  AirVent,
  Building,
  Volume2,
  Heart,
  Baby,
  Footprints,
} from "lucide-react";
import { Link } from "react-router-dom";

const partyData = {
  id: "party_001",
  title: "One Adda, Many Cheers: A Kolkata House Party Bash",
  description: "Unwind with strangers and music in a cozy setting. BYOB.",
  location: {
    address: "123, Some Street",
    area: "Rajarhat",
    city: "Kolkata",
  },
  dateTime: "2025-06-14T18:30:00.000Z",
  time: "7 PM onwards",
  coverCharge: 749,
  ageRange: { min: 23, max: 35 },
  attendeesCount: 23,
  expectedAttendees: "8 - 20 people",
  genderRatio: "60:40 (Male:Female)",
  imageUrl: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=400&fit=crop",
  category: "House Party",
  isFillingFast: true,
  priceIncludes: ["1 Drink", "Nibbles", "Experience", "BYOB"],
  about:
    "A night that captures the heart and soul of Kolkata — full of laughter, stories, and spirits that never run dry. One Adda, Many Cheers: A Kolkata House Bash is where timeless charm meets modern mischief, where chaayer cup meets cocktail glass, and where every corner buzzes with music, memories, and madness.",
  whatToExpect: [
    {
      title: "Break the Ice, Baby!",
      description:
        "Ease into the night with light-hearted ice breakers that melt away awkward vibes and spark fresh convos.",
    },
    {
      title: "Game On!",
      description:
        "Get the party pumping with fun social games — perfect for laughs, bonding, and showing off your playful side.",
    },
    {
      title: "Feel the Vibes",
      description:
        "Let the music take over! Whether it's live performances or a fire playlist, the energy will be totally filmi.",
    },
    {
      title: "Chat and Chill",
      description:
        "End the night on a cozy note with heart-to-heart chats, new friendships, and memories worth replaying.",
    },
  ],
  offerings: [
    {
      title: "Cheers to That!",
      description: "1-2 drinks on the house to get you started — or bring your own if you're feeling extra spirited!",
    },
    {
      title: "Snack Attack!",
      description: "Light bites and tasty treats to keep your hunger in check while you mingle and move.",
    },
    {
      title: "Feed the Feels",
      description: "Yummy, soulful food to keep your energy up and your belly happy.",
    },
    {
      title: "Shake It Up!",
      description: "Enjoy custom concoctions from our in-house bartender, mixing up something special just for you!",
    },
  ],
  thingsToKnow: [
    "Be fashionably on time – Arrive early to soak in all the fun!",
    "Keep it chill – Casual, comfy, and 100% inclusive.",
    "Our team's got you – Need anything? Look for a friendly face — we've got your back!",
    "No pressure, no drama – Whether you're the life of the party or like to vibe low-key, there's a space for you.",
    "Bring the magic – The best party ingredient? You. Come with good vibes and good energy!",
    "Thoroughly checked, thoroughly fun – Verified guest list for everyone's comfort and safety.",
  ],
  etiquette: [
    "BYOB, Don't Forget!",
    "Respect the Space – Treat the venue and guests with love and care.",
    "Sip Smartly – Fun over frenzy. Drink responsibly.",
    "Keep It Clean – Help us keep the space tidy — it's a group effort!",
    "Strictly No No's – No banned substances. Let's keep it safe, sassy, and classy.",
    "21+ Only – Grown-up fun only. Let's keep it lit and legit!",
  ],
  amenities: {
    beveragesServed: "Limited",
    byob: true,
    smokingAllowed: true,
    petsAtHome: true,
    guestPetsAllowed: false,
    guestKidsAllowed: false,
    footwearInside: false,
    elevator: true,
    ac: true,
    parking: true,
    music: true,
  },
  rules: [
    "Respect the property and other guests",
    "Drink Responsibly",
    "Help the host keep the house clean",
    "Banned substances not allowed",
    "Entry above 21 years of age only",
  ],
  howItWorks: [
    "Send a request to attend the house party.",
    "Process the payment and wait for the approval from the host.",
    "If approved, you'll receive party details via email and dashboard.",
    "If not approved, receive a 100% refund within 5-7 days.",
  ],
  cancellationPolicy: [
    "100% refund if you cancel 48+ hours before the party OR if the host cancels.",
    "50% refund if you cancel 24-48 hours before the party.",
    "No refund if you cancel within 24 hours of the party start time.",
  ],
};

export default function PartyDetails() {
  const [activeSection, setActiveSection] = useState("about");

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getAmenityIcon = (amenity) => {
    const icons = {
      parking: Car,
      smokingAllowed: Cigarette,
      ac: AirVent,
      elevator: Building,
      music: Volume2,
      petsAtHome: Heart,
      guestKidsAllowed: Baby,
      footwearInside: Footprints,
    };
    return icons[amenity] || CheckCircle;
  };

  return (
    <div
      className="min-h-screen bg-slate-900 text-white"
      style={{ background: "linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)" }}
    >
      {/* Header */}
      <div
        className="sticky top-0 z-50 bg-slate-900 border-b border-slate-700"
        style={{ backdropFilter: "blur(12px)" }}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
         <Link to="/party"> <button className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Parties
          </button>
          </Link>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-white font-bold text-xl">₹{partyData.coverCharge}</div>
              <div className="text-slate-400 text-sm">per person</div>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium">
              Join Party
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={partyData.imageUrl || "/placeholder.svg"}
          alt={partyData.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <Wine className="absolute top-8 right-8 w-6 h-6 text-purple-300 animate-bounce" />
          <Music className="absolute top-16 left-8 w-5 h-5 text-blue-300 animate-pulse" />
          <Sparkles className="absolute bottom-16 right-16 w-5 h-5 text-pink-300 animate-spin" />
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-full">
                    {partyData.category}
                  </div>
                  {partyData.isFillingFast && (
                    <div className="px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-medium rounded-full animate-pulse flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      Filling Fast
                    </div>
                  )}
                </div>
                <h1 className="text-4xl font-bold text-white mb-4 leading-tight">{partyData.title}</h1>
                <p className="text-slate-300 text-lg mb-6 max-w-2xl">{partyData.description}</p>

                {/* Quick Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-slate-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="font-medium">{formatDate(partyData.dateTime)}</div>
                      <div className="text-sm">{partyData.time}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="font-medium">{partyData.location.area}</div>
                      <div className="text-sm">{partyData.location.city}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-green-400" />
                    <div>
                      <div className="font-medium">{partyData.expectedAttendees}</div>
                      <div className="text-sm">
                        Ages {partyData.ageRange.min}-{partyData.ageRange.max}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div
              className="bg-slate-800 rounded-xl p-6 border border-slate-700"
              style={{ background: "linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%)" }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-purple-400" />
                About This Party
              </h2>
              <p className="text-slate-300 leading-relaxed">{partyData.about}</p>
            </div>

            {/* What to Expect */}
            <div
              className="bg-slate-800 rounded-xl p-6 border border-slate-700"
              style={{ background: "linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%)" }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">What to Expect</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {partyData.whatToExpect.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-slate-700 rounded-lg border border-slate-600 hover:border-purple-500 transition-colors"
                  >
                    <h3 className="font-semibold text-purple-300 mb-2">{item.title}</h3>
                    <p className="text-slate-300 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Offerings */}
            <div
              className="bg-slate-800 rounded-xl p-6 border border-slate-700"
              style={{ background: "linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%)" }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {partyData.offerings.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-slate-700 rounded-lg border border-slate-600 hover:border-green-500 transition-colors"
                  >
                    <h3 className="font-semibold text-green-300 mb-2">{item.title}</h3>
                    <p className="text-slate-300 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Things to Know */}
            <div
              className="bg-slate-800 rounded-xl p-6 border border-slate-700"
              style={{ background: "linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%)" }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Things to Know</h2>
              <div className="space-y-3">
                {partyData.thingsToKnow.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Etiquette */}
            <div
              className="bg-slate-800 rounded-xl p-6 border border-slate-700"
              style={{ background: "linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%)" }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Party Etiquette</h2>
              <div className="space-y-3">
                {partyData.etiquette.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Wine className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div
              className="bg-slate-800 rounded-xl p-6 border border-slate-700"
              style={{ background: "linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%)" }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">How It Works</h2>
              <div className="space-y-4">
                {partyData.howItWorks.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-slate-300 pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cancellation Policy */}
            <div
              className="bg-slate-800 rounded-xl p-6 border border-slate-700"
              style={{ background: "linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%)" }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Cancellation Policy</h2>
              <div className="space-y-3">
                {partyData.cancellationPolicy.map((policy, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-300">{policy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price Card */}
            <div
              className="bg-slate-800 rounded-xl p-6 border border-slate-700 sticky top-24"
              style={{ background: "linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%)" }}
            >
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-white mb-2">₹{partyData.coverCharge}</div>
                <div className="text-slate-400">per person</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Expected Attendees</span>
                  <span className="text-white">{partyData.expectedAttendees}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Gender Ratio</span>
                  <span className="text-white">{partyData.genderRatio}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Age Range</span>
                  <span className="text-white">
                    {partyData.ageRange.min}-{partyData.ageRange.max} years
                  </span>
                </div>
              </div>

              <button className="w-full py-3 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium mb-4">
                Join Party
              </button>

              <div className="text-center">
                <p className="text-slate-400 text-sm">Price includes:</p>
                <div className="flex flex-wrap gap-2 mt-2 justify-center">
                  {partyData.priceIncludes.map((item, index) => (
                    <span key={index} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div
              className="bg-slate-800 rounded-xl p-6 border border-slate-700"
              style={{ background: "linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%)" }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Amenities</h3>
              <div className="space-y-3">
                {Object.entries(partyData.amenities).map(([key, value]) => {
                  const IconComponent = getAmenityIcon(key);
                  const label = key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase());

                  return (
                    <div key={key} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <IconComponent className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-300 text-sm">{label}</span>
                      </div>
                      {typeof value === "boolean" ? (
                        value ? (
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        ) : (
                          <XCircle className="w-4 h-4 text-red-400" />
                        )
                      ) : (
                        <span className="text-slate-400 text-sm">{value}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Rules */}
            <div
              className="bg-slate-800 rounded-xl p-6 border border-slate-700"
              style={{ background: "linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%)" }}
            >
              <h3 className="text-xl font-bold text-white mb-4">House Rules</h3>
              <div className="space-y-2">
                {partyData.rules.map((rule, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-300 text-sm">{rule}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}