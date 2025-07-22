import { Link } from 'react-router-dom'
import {AboutIcon} from '../../../public/icons/AboutIcon'
import {ResumeIcon} from '../../../public/icons/ResumeIcon'
import {WorksIcon} from '../../../public/icons/WorksIcon'
import {BlogsIcon} from '../../../public/icons/BlogsIcon'
import {ContactIcon} from '../../../public/icons/ContactIcon'
import styles from './Header.module.scss'
import { Container } from '../../ui/container/container'

export function Header () {
    return <>
    <header>
    <Container>
    <ul>
        <li>
            <Link to='/'><AboutIcon />About</Link>
        </li>
        <li>
            <Link to='/resume'><ResumeIcon /> Resume</Link>
        </li>
        <li>
            <Link to='/works'><WorksIcon />Works</Link>
        </li>
        <li>
            <Link to='/blogs'><BlogsIcon />Blogs</Link>
        </li>
        <li>
            <Link to='/contact'><ContactIcon />Contact</Link>
        </li>
    </ul>
    </Container>
    </header>
    </>
}