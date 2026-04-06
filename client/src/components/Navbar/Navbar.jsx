import './Navbar.css'

function Navbar(){
    return(
        <>
            <nav>
                <div className="nav-links">
                <a href="#">
                    <h3>vtx-22ep.com</h3>
                </a>
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">BLOG</a></li>
                    <li><a href="#">PROJECT</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar