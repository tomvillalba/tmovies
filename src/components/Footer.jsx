
export const Footer = () => {
	return (
		<footer className="container-fluid navbar navbar-expand-lg navbar-dark d-flex flex-row">

			<ul className=" container-fluid navbar-nav d-flex justify-content-between w-100 d-flex flex-row">
				<div className="d-flex flex-row">
					<div className="navbar-nav ms-4">
						<li className="nav-item">
							<a className="nav-link" href="https://www.linkedin.com/in/tomvillalba/" rel="nofollow">LinkedIn</a>
						</li>
					</div>
					<div className="navbar-nav ms-4">
						<li className="nav-item">
							<a className="nav-link" href="https://github.com/tomvillalba" rel="nofollow">GitHub</a>
						</li>
					</div>
				</div>
				<div className="navbar-nav ms-4">
					<li className="nav-item">
						<p className="nav-link m-0">Copyright Tomás Villalba</p>
					</li>
				</div>
			</ul>

		</footer>
	);
};
