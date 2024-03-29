import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div>
            <div className='navbar navbar-inverse navbar-default'>
                <div className='container-fluid'>
                    <div className='navbar-header'>
                        <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                            <span className='sr-only'>Toggle navigation</span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                        </button>
                        <Link className='navbar-brand' to={'/'}>HTML Email</Link>
                    </div>

                    <div className='navbar-collapse collapse'>
                        <ul className='nav navbar-nav'>
                            {/*<li>
                                <NavLink to={'/'} exact activeClassName='active'>
                                    <span className='glyphicon glyphicon-home'></span> Home
                                </NavLink>
                            </li> */}

                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>;
    }
}
