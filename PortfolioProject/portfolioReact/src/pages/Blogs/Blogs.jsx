import { Header } from '../../components/Header/Header'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Container } from '../../ui/container/container'
import { RightsThermes } from '../../components/RightsThermes/RightsThermes'

export const Blogs = () => {
    return (
        <>
        <Header />
        <Container>
        <Sidebar />
        <RightsThermes/>
        </Container>
        </>
    )
};