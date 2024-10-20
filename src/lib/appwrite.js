// profileService.js
const PROFILE_KEY = 'userProfile';

export const profileService = {
  // Create/Update profile
  saveProfile: (profileData) => {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profileData));
    return profileData;
  },

  // Read profile
  getProfile: () => {
    const profile = localStorage.getItem(PROFILE_KEY);
    return profile ? JSON.parse(profile) : null;
  },

  // Delete profile
  deleteProfile: () => {
    localStorage.removeItem(PROFILE_KEY);
  },

  // Check if profile exists
  hasProfile: () => {
    return !!localStorage.getItem(PROFILE_KEY);
  }
};

