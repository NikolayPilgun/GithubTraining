function Footer() {
	return (
		<footer className="grid  grid-rows-[100px] grid-cols-[minmax(100px,_300px)_minmax(0px,_1fr)]">
			<div className="w-full h-full bg-slate-800 flex justify-center items-center">
				<h2 className="text-xl text-cyan-50 ">Footer</h2>
			</div>
			<div className="text-slate-100">тестовая запись сделанная на сервере</div>
		</footer>
	);
}

export default Footer;
