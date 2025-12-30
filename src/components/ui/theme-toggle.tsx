import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="relative h-7 w-14 rounded-full bg-muted" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative h-7 w-14 rounded-full bg-muted border border-border transition-colors duration-300 hover:bg-muted/80"
      aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
    >
      <div
        className={`absolute top-0.5 h-6 w-6 rounded-full bg-foreground shadow-md transition-all duration-300 flex items-center justify-center ${
          isDark ? "left-0.5" : "left-[calc(100%-1.625rem)]"
        }`}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5 text-background" />
        ) : (
          <Sun className="h-3.5 w-3.5 text-background" />
        )}
      </div>
    </button>
  );
}
