type ThemeToggleProps = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

function ThemeToggle({
  theme,
  toggleTheme,
}: ThemeToggleProps) {
  return (
    <div>
      <button
        onClick={toggleTheme}
        className={`rounded-lg px-4 py-2 text-white transition ${
          theme === "light"
            ? "bg-yellow-500 hover:bg-yellow-600"
            : "bg-gray-800 hover:bg-gray-900"
        }`}
      >
        {theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
}

export default ThemeToggle;