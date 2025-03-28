import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import NavHeader from "@/components/NavHeader";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fitting Blue",
  description: "New generation for shoping",
};

// export default async function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang={locale}>
//       <body className={`${geistMono.variable}`}>
//         <ThemeProvider>
//           <NextIntlClientProvider>
//             <SidebarProvider>
//               <AppSidebar />
//               <SidebarInset>
//                 <NavHeader />
//                 {children}
//               </SidebarInset>
//             </SidebarProvider>
//           </NextIntlClientProvider>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <>
      <html lang={locale}>
        <body className={`${geistMono.variable}`}>
          <ThemeProvider>
            <NextIntlClientProvider messages={messages}>
              <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                  <NavHeader />
                  {children}
                </SidebarInset>
              </SidebarProvider>
            </NextIntlClientProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
