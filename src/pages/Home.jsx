import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Outlet, Navigate } from "react-router-dom";
import '../../src/index.css'

function Home() {

    document.title = "About"
    let link = document.querySelector("link[rel*='icon']");
    link.href = "https://www.sanctamaria.nl/runtime/images/49/32x32/sancta_rood_equilibrist.jpg"

    const navigate = useNavigate()

    const toHome = (e) => {
        navigate("/home")
    }
    const toAbout = (e) => {
        navigate("/about")
    }
    const toLogin = (e) => {
        navigate("/login")
    }
    const toDashboard = (e) => {
        navigate("/dashboard")
    }




    return(
        <>
            <h1>React App</h1>

            
            
           <footer className="bg-gray-100 shadow-inner py-4">
                <ul className="flex justify-center space-x-6">
                    <li>
                        <button
                            onClick={toHome}
                            className="text-gray-700 hover:text-blue-600 font-medium transition"
                            >
                            Home
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={toAbout}
                            className="text-gray-700 hover:text-blue-600 font-medium transition"
                            >
                            About
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={toLogin}
                            className="text-gray-700 hover:text-blue-600 font-medium transition"
                            >
                            Login
                        </button>
                    </li>
                </ul>
            </footer>
            <hr className="border-t border-gray-300 mt-2" />

            <hr />
        </>
        
    );
}

export default Home