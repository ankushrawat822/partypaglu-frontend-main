// stores/guestProfileStore.js
import { create } from 'zustand';
import axios from 'axios';
import { supabase } from '../Supabase.js';
import API_KEY from '../utils/_helper.js';

export const useGuestProfileStore = create((set) => ({
  guestProfile: {
    name: '',
    email: '',
    profilePic: '',
    gender: '',
    interests: [],
    city: '',
  },
  error: '',
  loading: false,

  // Set a single field value
  setField: (field, value) =>
    set((state) => ({
      guestProfile: { ...state.guestProfile, [field]: value },
      error: '',
    })),

  // Set an error message
  setError: (msg) => set({ error: msg }),

  // Set loading flag
  setLoading: (val) => set({ loading: val }),

  // Load entire guest profile object
  loadFullProfile: (data) =>
    set({
      guestProfile: {
        name: data.name || '',
        email: data.email || '',
        profilePic: data.profilePic || '',
        gender: data.gender || '',
        interests: data.interests || [],
        city: data.city || '',
      },
      error: '',
    }),

  // Upload image to Supabase
  uploadProfilePic: async (file) => {
    if (!file) return;
    set({ loading: true });

    const { guestProfile } = useGuestProfileStore.getState();

    const fileExt = file.name.split('.').pop();
    const safeEmail = guestProfile.email.replace(/[^a-zA-Z0-9]/g, '_');
    const fileName = `guest_${safeEmail}.${fileExt}`;

    const { data, error } = await supabase.storage
      .from('guest-profile-image')
      .upload(fileName, file, { upsert: true });

    if (error) {
      console.error(error);
      set({ error: 'Failed to upload image', loading: false });
      return;
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from('guest-profile-image').getPublicUrl(fileName);

    const cacheBustedUrl = `${publicUrl}?t=${Date.now()}`;

    set((state) => ({
      guestProfile: { ...state.guestProfile, profilePic: cacheBustedUrl },
      loading: false,
    }));
  },

  // Submit profile to backend
  submitProfile: async () => {
    try {
      const { guestProfile } = useGuestProfileStore.getState();
      await axios.post(`${API_KEY}/api/guest-profile`, guestProfile);
      alert('Profile submitted successfully!');
    } catch (err) {
      console.error(err);
      set({ error: 'Failed to submit. Try again.' });
    }
  },
}));
