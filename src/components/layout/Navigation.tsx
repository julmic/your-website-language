import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import logoArkadhya from "@/assets/logo-arkadhya.webp";
import { getNavigationSettings } from "@/lib/settings-loader";
import { ThemeToggle } from "@/components/ui/theme-toggle";

// Load navigation from CMS
const navigationSettings = getNavigationSettings();
const navigationItems = navigationSettings.menuItems;

const ListItem = ({
  className,
  title,
  description,
  href,
  ...props
}: {
  className?: string;
  title: string;
  description: string;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {description}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setOpenMobileMenu(null);
  }, [location.pathname]);

  const toggleMobileSubmenu = (label: string) => {
    setOpenMobileMenu(openMobileMenu === label ? null : label);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="site-branding flex items-center gap-3 branding-hover">
            <img 
              src={logoArkadhya}
              alt="Arkadhya - Ayurveda Respect de la Vie"
              className={`h-14 w-auto logo-animated transition-all duration-500 ${
                hasAnimated ? 'loaded' : 'animate'
              }`}
            />
            <div className="flex flex-col">
              <span 
                className={`site-description text-[10px] uppercase tracking-wider text-muted-foreground ${
                  hasAnimated ? 'loaded' : 'animate'
                }`}
              >
                Centre Ayurvédique
              </span>
              <span 
                className={`site-title text-xl font-serif font-semibold text-foreground ${
                  hasAnimated ? 'loaded' : 'animate'
                }`}
              >
                Arkadhya
              </span>
              <span 
                className={`site-description text-[10px] text-muted-foreground ${
                  hasAnimated ? 'loaded' : 'animate'
                }`}
              >
                en Aquitaine
              </span>
            </div>
          </Link>

          {/* Desktop Navigation with Dropdowns */}
          <div className="hidden lg:flex items-center gap-2">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((navItem) => (
                  <NavigationMenuItem key={navItem.label}>
                    {navItem.items.length === 0 ? (
                      <NavigationMenuLink asChild>
                        <Link
                          to={(navItem as any).href || "/"}
                          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                        >
                          {navItem.label}
                        </Link>
                      </NavigationMenuLink>
                    ) : (
                      <>
                        <NavigationMenuTrigger className="bg-transparent">
                          {navItem.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {navItem.items.map((item) => (
                              <ListItem
                                key={item.href}
                                title={item.label}
                                description={item.description}
                                href={item.href}
                              />
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <ThemeToggle />
            <Button asChild className="ml-4">
              <Link to={navigationSettings.ctaButtonLink}>{navigationSettings.ctaButtonText}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 max-h-[70vh] overflow-y-auto">
            <div className="flex flex-col gap-2">
              {navigationItems.map((navItem) => (
                <div key={navItem.label} className="border-b border-border/50 pb-2">
                  {navItem.items.length === 0 ? (
                    <Link
                      to={(navItem as any).href || "/"}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block py-2 text-sm font-medium transition-colors hover:text-primary",
                        location.pathname === (navItem as any).href
                          ? "text-primary"
                          : "text-foreground"
                      )}
                    >
                      {navItem.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => toggleMobileSubmenu(navItem.label)}
                        className="flex items-center justify-between w-full py-2 text-sm font-medium text-foreground"
                      >
                        {navItem.label}
                        <ChevronDown 
                          className={cn(
                            "h-4 w-4 transition-transform",
                            openMobileMenu === navItem.label && "rotate-180"
                          )} 
                        />
                      </button>
                      {openMobileMenu === navItem.label && (
                        <div className="ml-4 mt-2 space-y-2">
                          {navItem.items.map((item) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              onClick={() => setIsOpen(false)}
                              className={cn(
                                "block py-2 text-sm transition-colors hover:text-primary",
                                location.pathname === item.href
                                  ? "text-primary font-medium"
                                  : "text-muted-foreground"
                              )}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
              <div className="flex items-center justify-between py-3 border-b border-border/50">
                <span className="text-sm text-muted-foreground">Thème</span>
                <ThemeToggle />
              </div>
              <Button asChild className="w-full mt-4">
                <Link to={navigationSettings.ctaButtonLink} onClick={() => setIsOpen(false)}>
                  {navigationSettings.ctaButtonText}
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
