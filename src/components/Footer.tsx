export default function Footer(){
  return (
    <footer className="mt-12 w-full border-t border-stone-800 bg-[#0c0c0e] text-stone-300">
      <div className="max-w-6xl mx-auto p-6 text-center text-sm">
        © {new Date().getFullYear()} Crown Construction. All rights reserved.
        <div className="mt-2">Call us: <a href="tel:4065954472" className="font-semibold text-wood">406-595-4472</a> • Email: <a href="mailto:crownconstrustion@gmail.com" className="font-semibold text-wood">crownconstrustion@gmail.com</a></div>
        <div className="mt-2 text-stone-400">
          Straight estimates, clean sites, and reliable support for residential and small commercial work.
        </div>
      </div>
    </footer>
  )
}
