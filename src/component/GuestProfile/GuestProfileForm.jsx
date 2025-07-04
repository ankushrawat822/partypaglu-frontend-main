// GuestProfileForm.jsx
import { useEffect, useState } from 'react';
import { app } from '../../Firebase.js'
import { useGuestProfileStore } from '../../store/useGuestProfileStore.js';
import { getAuth , onAuthStateChanged, signOut } from 'firebase/auth'
import API_KEY from '../../utils/_helper.js';

export default function GuestProfileForm() {
  const {
    guestProfile,
    setField,
    submitProfile,
    error,
    setError,
    uploadProfilePic,
    loadFullProfile
  } = useGuestProfileStore();

  const [uploading, setUploading] = useState(false);


  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("yes login", user);
        setField('email', user.email); 
  
        try {
          const res = await fetch(`${API_KEY}/api/guest-profile/${user.email}`);
          if (res.ok) {
            const data = await res.json();
            loadFullProfile(data); // <-- correct usage
          } else {
            console.log("No existing profile found");
          }
        } catch (err) {
          console.error("Error fetching guest profile:", err);
        }
      } else {
        console.log("not logged in");
      }
    });
  
    return () => unsubscribe();
  }, []);
  


  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    await uploadProfilePic(file);
    setUploading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!guestProfile.name || !guestProfile.gender) {
      setError('Name and Gender are required.');
      return;
    }
    submitProfile();
  };

  return (
    <div className="min-h-screen bg-[#161616] text-white flex items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <h2 className="text-2xl font-semibold text-center">Guest Profile</h2>

        <label className="block">
          Name
          <input
            type="text"
            className="w-full p-2 mt-1 bg-gray-800 rounded"
            value={guestProfile.name}
            onChange={(e) => setField('name', e.target.value)}
          />
        </label>

        <label className="block">
          Email (read-only)
          <input
            type="email"
            className="w-full p-2 mt-1 bg-gray-800 rounded cursor-not-allowed"
            value={guestProfile.email}
            readOnly
          />
        </label>

        <label className="block">
          Gender
          <select
            className="w-full p-2 mt-1 bg-gray-800 rounded"
            value={guestProfile.gender}
            onChange={(e) => setField('gender', e.target.value)}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="transgender">Transgender</option>
          </select>
        </label>

        <label className="block">
          Interests (comma separated)
          <input
            type="text"
            className="w-full p-2 mt-1 bg-gray-800 rounded"
            value={guestProfile.interests?.join(', ') || ''}
            onChange={(e) =>
              setField(
                'interests',
                e.target.value.split(',').map((item) => item.trim())
              )
            }
          />
        </label>

        <label className="block">
          City
          <input
            type="text"
            className="w-full p-2 mt-1 bg-gray-800 rounded"
            value={guestProfile.city}
            onChange={(e) => setField('city', e.target.value)}
          />
        </label>

        <label className="block">
          Upload Profile Picture
          <input
            type="file"
            accept="image/*"
            className="w-full p-2 mt-1 bg-gray-800 rounded"
            onChange={handleImageUpload}
          />
        </label>

        {uploading && (
          <p className="text-sm text-gray-400">Uploading image...</p>
        )}

        {guestProfile.profilePic && (
          <img
            src={guestProfile.profilePic}
            alt="Profile Preview"
            className="w-24 h-24 object-cover rounded-full border mt-2"
          />
        )}

        {error && <p className="text-red-400 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
