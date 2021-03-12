import React ,{Component} from 'react'

class Header extends Component {
    
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle"  href="#" id="navbarDropdownMenuLink" role="button" aria-expanded="false">
                            Products
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li className="dropdown-submenu">
                                <a className="dropdown-item dropdown-toggle" href="#">CPU</a>
                                <ul className="dropdown-menu submenu">
                                    <div className="contianer-fluid">
                                        <li><span className="dropdown-item-text text-center" href="#">Brand CPU</span></li>
                                        <div className="row">
                                            <div className="col-md-4">
                                                
                                                
                                                    <span className="dropdown-item-text text-center" href="#">INTEL</span>
                                                    <a className="dropdown-item" href="#">LGA1200</a>
                                                    <a className="dropdown-item" href="#">LGA1155</a>
                                                    <a className="dropdown-item" href="#">LGA1151</a>
                                                    <a className="dropdown-item" href="#">LGA1150</a>
                                                
                                            </div>
                                            <div className="col-md-4">
                                                
                                                    <span className="dropdown-item-text text-center" href="#">AMD</span>
                                                    <a className="dropdown-item" href="#">AMD TR4</a>
                                                    <a className="dropdown-item" href="#">AMD AM4</a>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="dropdown-submenu">
                                <a className="dropdown-item dropdown-toggle" href="#">VGA</a>
                                <ul className="dropdown-menu submenu">
                                    <div className="contianer-fluid">
                                        <li><span className="dropdown-item-text text-center" href="#">Brand VGA</span></li>
                                        <div className="row">
                                            <div className="col-md-4 col-sm-12">
                                                
                                                
                                                    <span className="dropdown-item-text text-center" href="#">NVIDIA</span>
                                                    <a className="dropdown-item" href="#">GTX1000</a>
                                                    <a className="dropdown-item" href="#">GTX1100</a>
                                                   
                                                
                                            </div>
                                            <div className="col-md-4 col-sm-12">
                                                
                                                    <span className="dropdown-item-text text-center" href="#">AMD</span>
                                                    <a className="dropdown-item" href="#">AMD TR4</a>
                                                    <a className="dropdown-item" href="#">AMD AM4</a>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                        </ul>
                        
                        </li>
                        
                        
                    </ul>
                    
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header