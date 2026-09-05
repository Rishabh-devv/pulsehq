import TextInput from "@/components/common/TextInput";
import type { Profile } from "../types/profile";

interface ProfileSectionProps {
  profile: Profile;
  updateProfile: (field: keyof Profile, value: string) => void;
}

function ProfileSection({ profile, updateProfile }: ProfileSectionProps) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
        Profile
      </h2>

      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        Manage your personal and professional information.
      </p>

      <div className="my-6 border-b border-gray-200 dark:border-gray-700" />

      <div className="max-w-lg space-y-5">
        <TextInput
          label="Name"
          placeholder="Enter your name"
          value={profile.name}
          onChange={(e) => updateProfile("name", e.target.value)}
        />
        <TextInput
          label="Email"
          placeholder="Enter your email"
          value={profile.email}
          type="email"
          onChange={(e) => updateProfile("email", e.target.value)}
        />

        <TextInput
          label="Company"
          placeholder="Enter your company"
          value={profile.company}
          onChange={(e) => updateProfile("company", e.target.value)}
        />

        <TextInput
          label="Role"
          placeholder="Enter your role"
          value={profile.role}
          onChange={(e) => updateProfile("role", e.target.value)}
        />
      </div>
    </div>
  );
}

export default ProfileSection;
