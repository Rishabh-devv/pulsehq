interface SettingsActionsProps {
  isDirty: boolean;
  onCancel: ()=>void;
  onSave: ()=>void
}

export default function SettingsActions({
  isDirty,onCancel,onSave
}: SettingsActionsProps) {
  return (
    <div className="mt-6 flex justify-end gap-3">
      <button className="rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-700 transition hover:bg-gray-100" onClick={onCancel}>
        Cancel
      </button>

      <button
        disabled={!isDirty}
        onClick={onSave}
        className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Save Changes
      </button>
    </div>
  );
}