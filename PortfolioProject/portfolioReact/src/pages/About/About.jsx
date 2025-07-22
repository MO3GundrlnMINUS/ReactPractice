import { Header } from '../../components/Header/Header'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import styles from './About.module.scss'
import { Container } from '../../ui/container/container'
import { RightsThermes } from '../../components/RightsThermes/RightsThermes'
import { Technology } from '../../components/Technology/Technology'
import { DesignIcon } from '../../../public/icons/DesignIcon'
import { DevelopmentIcon } from '../../../public/icons/DevelopmentIcon'
import { PhotographyIcon } from '../../../public/icons/PhotographyIcon'
import { TitleComp } from '../../components/TitleComp/TitleComp'
import { WebDvp } from '../../../public/icons/WebDvp'
import Brand1 from '../../../public/images/Brand1.png'
import Brand2 from '../../../public/images/Brand2.png'
import Brand3 from '../../../public/images/Brand3.png'

export const About = () => {
  return (
    <>
    <Header />
    <Container>
    <Sidebar />
    <div className={styles.pageSpace}>
      <TitleComp title="About Me" />
      <div className={styles.midWrap}>
      <p>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
      <br />
      <p>My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
      </div>
      <h2>What I do!</h2>
      <div className={styles.technologyWrap}>
      <Technology icon={<DesignIcon />} text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat." subTitle="Ui/Ux Design"/>
      <Technology icon={<DevelopmentIcon />}text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat." subTitle="App Development"/>
      <Technology icon={<PhotographyIcon />}text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat." subTitle="Photography"/>
      <Technology icon={<WebDvp />}text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat." subTitle="Web Development"/>
      </div>
      <div className={styles.clients}>
        <h2 className={styles.clientsHeader}>Clients</h2>
        <div className={styles.gallery}>
          <img src={Brand1} alt='alt'/>
          <img src={Brand2} alt='alt'/>
          <img src={Brand3} alt='alt'/>
        </div>
      </div>
      <RightsThermes/>
    </div>
    </Container>
    </>
  )
}