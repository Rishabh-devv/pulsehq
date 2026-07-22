export default function SettingsActions() {
  return (
    <div className="mt-6 flex justify-end gap-3">
      <button className="rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-700 transition hover:bg-gray-100">
        Cancel
      </button>

      <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700">
        Save Changes
      </button>
    </div>
  );
}