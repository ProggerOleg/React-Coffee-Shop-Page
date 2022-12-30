import './header.css'

const Header = () => {
    return (
        <div className='rectangle'>
            <ul className='header'>
                <li><img src='Group.png' alt='logo'></img>Coffee house</li>
                <li>Our coffee</li>
                <li>For your pleasure</li>
            </ul>
            <div className='text__block'>
                <h1>
                Everything You Love About Coffee
                </h1>
                <img src="Beans logo.svg" alt="beans" />
                <br/>
                We makes every day full of energy and taste
                <br/>
                Want to try our beans?
            </div>
        </div>
    )
}

export default Header;