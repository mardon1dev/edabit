import { Container } from 'react-bootstrap';
import { Outlet, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import "./Task.scss"

const Task = () => {
    const { id } = useParams();
  return (
    <div>
        <Container>
            <div className='task'>
                <ul className='task-menu'>
                    <li className='task-menu--item'><Link to={`/task/${id}/instructions`} className='task-menu--link'>Instruction</Link></li>
                    <li className='task-menu--item'><Link to={`/task/${id}/code`} className='task-menu--link'>Code</Link></li>
                    <li className='task-menu--item'><Link to={`/task/${id}/resources`} className='task-menu--link'>Recources</Link></li>
                    <li className='task-menu--item'><Link to={`/task/${id}/solutions`} className='task-menu--link'>Solutions</Link></li>
                    <li className='task-menu--item'><Link to={`/task/${id}/comments`} className='task-menu--link'>Comments</Link></li>
                </ul>
                <Outlet/>
            </div>
        </Container>
    </div>
  )
}

export default Task;