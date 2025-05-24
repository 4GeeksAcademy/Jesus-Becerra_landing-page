import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Jumbotron from "./Jumbotron";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Footer from "./Footer";

//create your first component
const Home = () => {
	let getInfoCards = [
		{
			title: "Fundamentos de Desarrollo Web",
			description: "Domina HTML, CSS y JavaScript para construir sitios web interactivos y responsivos. Ideal para principiantes que buscan una base sólida en el front-end.",
			image: "https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		{
			title: "Introducción a Python para Data Science",
			description: "Aprende Python y sus librerías esenciales para análisis de datos y machine learning.",
			image: "https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		{
			title: "Desarrollo Backend con Node.js",
			description: "Crea APIs robustas y escalables con Node.js y Express. Profundiza en bases de datos y autenticación para aplicaciones web completas.",
			image: "https://images.unsplash.com/photo-1667372459510-55b5e2087cd0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		{
			title: "Diseño de Interfaces (UI/UX) Esencial",
			description: "Comprende los principios clave de UI/UX para crear experiencias de usuario intuitivas y atractivas.",
			image: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		}
	]
	return (
		<div>
			<Navbar />
			<div className="container mt-4 ">
				<div className="row d-flex justify-content-center">
					<Jumbotron />
				</div>
			</div>
			<div className="container mt-4 ">
				<div className="row d-flex justify-content-center">
					{
						getInfoCards.map((value, index, array) => (
							<div key={index} className="col-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
								<Card title={value.title} description={value.description} image={value.image} />
							</div>
						))
					}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;