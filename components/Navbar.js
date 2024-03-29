import Link from 'next/link';

const Navbar = () => (
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
            <a href="index.html" class="navbar-brand">HC</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" >
                    <i class="fa fa-angle-double-down"></i>
                </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav ml-auto">
                    <li class="navbar-item">
                        <a href="#" class="nav-link">Plots</a>
                    </li>
                    <li class="navbar-item">
                        <a href="#" class="nav-link">Comparison</a>
                    </li>
                    <li class="navbar-item">
                        <a href="data.html" class="nav-link">Data</a>
                    </li>
                </ul>
            </div>
    </nav>
);

export default Navbar;