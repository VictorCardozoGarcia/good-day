import Navbar from "../components/Navbar/Navbar";

export default function PagesLayout({
  children,
}) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}
