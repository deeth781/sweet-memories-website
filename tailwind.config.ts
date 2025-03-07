
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				love: {
					'50': '#fff1f2',
					'100': '#ffe4e6',
					'200': '#fecdd3',
					'300': '#fda4af',
					'400': '#fb7185',
					'500': '#f43f5e',
					'600': '#e11d48',
					'700': '#be123c',
					'800': '#9f1239',
					'900': '#881337',
				},
				rose: {
					'50': '#fff1f2',
					'100': '#ffe4e6',
					'200': '#fecdd3',
					'300': '#fda4af',
					'400': '#fb7185',
					'500': '#f43f5e',
					'600': '#e11d48',
					'700': '#be123c',
					'800': '#9f1239',
					'900': '#881337',
				}
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
				'float': {
					'0%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
					'100%': { transform: 'translateY(0px)' }
				},
				'float-reverse': {
					'0%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(20px)' },
					'100%': { transform: 'translateY(0px)' }
				},
				'float-horizontal': {
					'0%': { transform: 'translateX(0px)' },
					'50%': { transform: 'translateX(20px)' },
					'100%': { transform: 'translateX(0px)' }
				},
				'float-horizontal-reverse': {
					'0%': { transform: 'translateX(0px)' },
					'50%': { transform: 'translateX(-20px)' },
					'100%': { transform: 'translateX(0px)' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-out': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' }
				},
				'scale-up': {
					'0%': { transform: 'scale(0.8)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'scale-down': {
					'0%': { transform: 'scale(1.2)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-down': {
					'0%': { transform: 'translateY(-100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'pulse': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				'bounce-slight': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-25%)' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'heart-float': {
					'0%': { transform: 'translateY(0) scale(1) rotate(0deg)', opacity: '1' },
					'100%': { transform: 'translateY(-100vh) scale(0) rotate(360deg)', opacity: '0' }
				},
				'letter-open': {
					'0%': { transform: 'rotateX(0deg)' },
					'100%': { transform: 'rotateX(180deg)' }
				},
				'flicker': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'float-reverse': 'float-reverse 5s ease-in-out infinite',
				'float-horizontal': 'float-horizontal 7s ease-in-out infinite',
				'float-horizontal-reverse': 'float-horizontal-reverse 8s ease-in-out infinite',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'fade-out': 'fade-out 0.5s ease-in forwards',
				'scale-up': 'scale-up 0.5s ease-out forwards',
				'scale-down': 'scale-down 0.5s ease-out forwards',
				'slide-up': 'slide-up 0.5s ease-out forwards',
				'slide-down': 'slide-down 0.5s ease-out forwards',
				'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'bounce-slight': 'bounce-slight 1s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 10s linear infinite',
				'heart-float': 'heart-float 4s ease-out forwards',
				'letter-open': 'letter-open 1s ease-in-out forwards',
				'flicker': 'flicker 2s ease-in-out infinite'
			},
			backgroundImage: {
				'love-gradient': 'linear-gradient(to right, #ff6b6b, #ff8e8e)',
				'love-radial': 'radial-gradient(circle, rgba(255,162,162,1) 0%, rgba(255,107,107,1) 100%)',
				'love-shine': 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%)',
				'love-pink': 'linear-gradient(to right, #ff758c, #ff7eb3)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
