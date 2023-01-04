const Header = () => {
    const nav: {name: string, id: number, route: string}[] = [
        {name: 'HOMETALES', id: 1, route: ''},
        {name: 'DESTINATIONS', id: 2, route: ''},
        {name: 'EXPERIENCES', id: 3, route: ''}
    ]

	return (
		<nav className='px-16 py-10 flex justify-between font-semibold items-center'>
			<ul className='flex items-center gap-10'>
				<span>Log</span>
				{nav?.map((link) => (
                    <li>{link.name}</li>
                ))}
                <input type="text" placeholder="SEARCH" 
                className="rounded-full border py-2 px-4 outline-none"/>
			</ul>
			<button className="py-2 px-6 rounded-full text-white bg-red-500">EXPLORE</button>
		</nav>
	)
}

export default Header
