'use client';

import Navbar from '@/components/Navbar';
import ToasterProvider from '@/providers/ToasterProvider';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ToasterProvider />
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<Navbar>{children}</Navbar>
				</LocalizationProvider>
			</body>
		</html>
	);
}
