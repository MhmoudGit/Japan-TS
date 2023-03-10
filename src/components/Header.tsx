const Header = () => {
    const nav: {name: string, id: number, route: string}[] = [
        {name: 'HOMETALES', id: 1, route: ''},
        {name: 'DESTINATIONS', id: 2, route: ''},
        {name: 'EXPERIENCES', id: 3, route: ''}
    ]

	return (
		<nav className='py-8 flex justify-between font-semibold items-center'>
			<ul className='flex items-center gap-10'>
				<span>Log</span>
				{nav?.map((link) => (
                    <li>{link.name}</li>
                ))}
                <input type="text" placeholder="SEARCH..." 
                className="rounded-full border py-2 px-4 outline-none text-slate-500"/>
			</ul>
			<button className="py-2 px-10 rounded-full text-white bg-red-600">EXPLORE</button>
		</nav>
	)
}

export default Header
