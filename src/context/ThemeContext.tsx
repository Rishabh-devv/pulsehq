import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined
);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme");

    if (
      savedTheme === "light" ||
      savedTheme === "dark" ||
      savedTheme === "system"
    ) {
      return savedTheme;
    }

    return "light";
  });

  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">(
    "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);

    const root = document.documentElement;

    if (theme === "light") {
      setResolvedTheme("light");
      root.classList.remove("dark");
      return;
    }

    if (theme === "dark") {
      setResolvedTheme("dark");
      root.classList.add("dark");
      return;
    }

    const mediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const applySystemTheme = () => {
      if (mediaQuery.matches) {
        setResolvedTheme("dark");
        root.classList.add("dark");
      } else {
        setResolvedTheme("light");
        root.classList.remove("dark");
      }
    };

    applySystemTheme();

    mediaQuery.addEventListener("change", applySystemTheme);

    return () => {
      mediaQuery.removeEventListener("change", applySystemTheme);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}