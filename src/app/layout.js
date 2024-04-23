import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import dotenv from "dotenv";
dotenv.config();

export const metadata = {
  title: "RMA Civil Construction | Home",
  description: "Website by Rohit Bajaj",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    <script>
  window.onUsersnapLoad = function(api) {
    api.init();
  };
  var script = document.createElement('script');
  script.defer = 1;
  script.src = 'https://widget.usersnap.com/global/load/6ead6e02-9f4d-438c-974a-8445829c47aa?onload=onUsersnapLoad';
  document.getElementsByTagName('head')[0].appendChild(script);
</script>
    </html>
  );
}
