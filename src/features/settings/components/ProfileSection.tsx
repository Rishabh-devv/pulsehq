import TextInput from "@/components/common/TextInput";
import type { Profile } from "../types/Profile";

interface ProfileSectionProps {
  profile: Profile;
  updateProfile: (
    field: keyof Profile,
    value: string
  ) => void;
}

function ProfileSection({
  profile,
  updateProfile,
}: ProfileSectionProps) {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-semibold">
        Profile
      </h2>
      <div className="my-6 border-b border-gray-200" />

      <div className="max-w-lg space-y-6">
        <TextInput
          label="Name"
          placeholder="Enter your name"
          value={profile.name}
          onChange={(value) => updateProfile("name", value)}
        />

        <TextInput
          label="Email"
          placeholder="Enter your email"
          value={profile.email}
          onChange={(value) => updateProfile("email", value)}
          type="email"
        />

        <TextInput
          label="Company"
          placeholder="Enter your company"
          value={profile.company}
          onChange={(value) => updateProfile("company", value)}
        />

        <TextInput
          label="Role"
          placeholder="Enter your role"
          value={profile.role}
          onChange={(value) => updateProfile("role", value)}
        />
      </div>
    </div>
  );
}

export default ProfileSection;