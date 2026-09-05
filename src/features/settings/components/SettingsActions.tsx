import Button from "@/components/common/Button";

interface SettingsActionsProps {
  isDirty: boolean;
  onCancel: () => void;
  onSave: () => void;
}

function SettingsActions({ isDirty, onCancel, onSave }: SettingsActionsProps) {
  return (
    <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
      <Button variant="secondary" onClick={onCancel} disabled={!isDirty}>
        Cancel
      </Button>

      <Button onClick={onSave} disabled={!isDirty}>
        Save Changes
      </Button>
    </div>
  );
}

export default SettingsActions;
