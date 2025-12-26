import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		fontFamily: {
  			serif: [
  				'Cormorant Garamond',
  				'ui-serif',
  				'Georgia',
  				'Cambria',
  				'Times New Roman',
  				'Times',
  				'serif'
  			],
  			sans: [
  				'Lato',
  				'ui-sans-serif',
  				'system-ui',
  				'sans-serif',
  				'Apple Color Emoji',
  				'Segoe UI Emoji',
  				'Segoe UI Symbol',
  				'Noto Color Emoji'
  			],
  			mono: [
  				'ui-monospace',
  				'SFMono-Regular',
  				'Menlo',
  				'Monaco',
  				'Consolas',
  				'Liberation Mono',
  				'Courier New',
  				'monospace'
  			]
  		},
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			gold: {
  				DEFAULT: 'hsl(var(--gold))',
  				light: 'hsl(var(--gold-light))'
  			},
  			sage: {
  				DEFAULT: 'hsl(var(--sage))',
  				light: 'hsl(var(--sage-light))'
  			},
  			cream: 'hsl(var(--cream))',
  			forest: 'hsl(var(--forest))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: { height: '0' },
  				to: { height: 'var(--radix-accordion-content-height)' }
  			},
  			'accordion-up': {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: '0' }
  			},
  			'fade-in': {
  				from: { opacity: '0', transform: 'translateY(20px)' },
  				to: { opacity: '1', transform: 'translateY(0)' }
  			},
  			'fade-in-up': {
  				from: { opacity: '0', transform: 'translateY(30px)' },
  				to: { opacity: '1', transform: 'translateY(0)' }
  			},
  			'fade-in-down': {
  				from: { opacity: '0', transform: 'translateY(-30px)' },
  				to: { opacity: '1', transform: 'translateY(0)' }
  			},
  			'fade-in-left': {
  				from: { opacity: '0', transform: 'translateX(-40px)' },
  				to: { opacity: '1', transform: 'translateX(0)' }
  			},
  			'fade-in-right': {
  				from: { opacity: '0', transform: 'translateX(40px)' },
  				to: { opacity: '1', transform: 'translateX(0)' }
  			},
  			'scale-fade-in': {
  				from: { opacity: '0', transform: 'scale(0.9)' },
  				to: { opacity: '1', transform: 'scale(1)' }
  			},
  			'blur-in': {
  				from: { opacity: '0', filter: 'blur(10px)', transform: 'scale(0.95)' },
  				to: { opacity: '1', filter: 'blur(0)', transform: 'scale(1)' }
  			},
  			'slide-up-spring': {
  				'0%': { opacity: '0', transform: 'translateY(40px)' },
  				'60%': { opacity: '1', transform: 'translateY(-8px)' },
  				'100%': { opacity: '1', transform: 'translateY(0)' }
  			},
  			'float': {
  				'0%, 100%': { transform: 'translateY(0)' },
  				'50%': { transform: 'translateY(-10px)' }
  			},
  			'pulse-glow': {
  				'0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
  				'50%': { opacity: '0.8', transform: 'scale(1.1)' }
  			},
  			'rotate-slow': {
  				from: { transform: 'rotate(0deg)' },
  				to: { transform: 'rotate(360deg)' }
  			},
  			'elegant-unroll': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateX(-80px) scale(0.8) rotate(-5deg)',
  					filter: 'blur(5px)'
  				},
  				'60%': {
  					opacity: '1',
  					transform: 'translateX(8px) scale(1.05) rotate(1deg)',
  					filter: 'blur(0)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateX(0) scale(1) rotate(0)',
  					filter: 'blur(0)'
  				}
  			},
  			'text-reveal': {
  				'0%': { opacity: '0', transform: 'translateX(-30px)' },
  				'100%': { opacity: '1', transform: 'translateX(0)' }
  			},
  			'simple-fade': {
  				from: { opacity: '0' },
  				to: { opacity: '1' }
  			},
  			'stagger-fade-in': {
  				from: { opacity: '0', transform: 'translateY(20px)' },
  				to: { opacity: '1', transform: 'translateY(0)' }
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'fade-in': 'fade-in 0.6s ease-out forwards',
  			'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
  			'fade-in-down': 'fade-in-down 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
  			'fade-in-left': 'fade-in-left 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
  			'fade-in-right': 'fade-in-right 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
  			'scale-fade-in': 'scale-fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
  			'blur-in': 'blur-in 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
  			'slide-up-spring': 'slide-up-spring 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
  			'float': 'float 6s ease-in-out infinite',
  			'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
  			'rotate-slow': 'rotate-slow 20s linear infinite',
  			'elegant-unroll': 'elegant-unroll 1.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
  			'text-reveal': 'text-reveal 1.5s ease-out forwards',
  			'simple-fade': 'simple-fade 0.5s ease forwards',
  			'stagger-fade-in': 'stagger-fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
