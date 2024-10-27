import localFont from "next/font/local";
import "./globals.css";
var geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
var geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});
export var metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};
export default function RootLayout(_a) {
    var children = _a.children;
    return (<html lang="en">
      <body className={"".concat(geistSans.variable, " ").concat(geistMono.variable, " antialiased")}>
        {children}
      </body>
    </html>);
}