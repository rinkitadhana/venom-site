const Navbar = () => {
  const head = "Venom"
  const navLinks = [
    {
      id: 1,
      name: "Origin",
      link: "#origins",
    },
    {
      id: 2,
      name: "Types",
      link: "#types",
    },
    {
      id: 3,
      name: "Hosts",
      link: "#hosts",
    },
    {
      id: 4,
      name: "Media",
      link: "#media",
    },
    {
      id: 5,
      name: "About",
      link: "#about",
    },
  ]
  return (
    <nav className="w-full flex items-center justify-between py-4  px-14 ">
      <h1 className="text-xl font-semibold">{head}</h1>
      <div className=" md:flex gap-7 items-center hidden ">
        {navLinks.map((nav) => (
          <a
            href={nav.link}
            className=" text-sm opacity-65 font-medium hover:opacity-100 transition-all duration-300"
          >
            {nav.name}
          </a>
        ))}
      </div>
      <a
        href=""
        className=" border rounded-full hover:rounded-sm transition-all duration-500 ease-in-out hover:bg-zinc-900 px-3  py-1 font-medium"
      >
        Get Started
      </a>
    </nav>
  )
}

export default Navbar
