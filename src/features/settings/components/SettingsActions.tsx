interface SettingsActionsProps {
  isDirty: boolean;
  onCancel: () => void;
  onSave: () => void;
}

import Button from "@/components/common/Button";

export default function SettingsActions({
  isDirty,
  onCancel,
  onSave,
}: SettingsActionsProps) {
  return (
    <div className="mt-6 flex justify-end gap-3">
      <Button variant="secondary" onClick={onCancel}>
        Cancel
      </Button>

      <Button onClick={onSave} disabled={!isDirty}>
        Save Changes
      </Button>
    </div>
  );
}
