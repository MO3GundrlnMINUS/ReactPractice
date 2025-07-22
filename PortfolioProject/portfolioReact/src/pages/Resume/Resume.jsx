import { Header } from '../../components/Header/Header'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Container } from '../../ui/container/container'
import { RightsThermes } from '../../components/RightsThermes/RightsThermes'
import { TitleComp } from '../../components/TitleComp/TitleComp'
import styles from './Resume.module.scss'
import { Education } from '../../../public/icons/Education'
import { Experience } from '../../../public/icons/Experience'
import { ListOfEdu } from '../../components/ListElem/ListOfEdu'
import { Progress } from '../../ui/Progress/Progress'

export const Resume = () => {
    return (
        <>
        <Header />
        <Container>
        <Sidebar />
        <div className={styles.pageSpace}>
            <TitleComp title="Resume" />
            <div className={styles.colomns}>
            <div className={styles.childColomn}>
                <div className={styles.headerEdu}><div className={styles.eduIcon}><Education /></div><p>Education</p></div>
                <ListOfEdu yearText="2021-2023" nameTitle="Ph.D in Horriblensess -" surNameTitle="ABC University" cityName="Los Angeles, CA"/> 
                <ListOfEdu yearText="2017-2021" nameTitle="Computer Science -" surNameTitle="Imperialize" cityName="Technical Institute"/> 
                <ListOfEdu yearText="2015-2017" nameTitle="Graphic Designer -" surNameTitle="Web Graphy" cityName="Los Angeles, CA"/> 
            </div>
            <div className={styles.childColomn}>
                <div className={styles.headerEdu}><div className={styles.eduIcon}><Experience /></div><p>Experience</p></div>
                <ListOfEdu yearText="2019-Present" nameTitle="Sr. Software Tester" cityName="Google Inc."/>
                <ListOfEdu yearText="2015-2017" nameTitle="Cr. Web Developer" cityName="ib-thrmes ltd."/> 
                <ListOfEdu yearText="2014-2015" nameTitle="Jr. Web Developer" cityName="Creative Gigs."/>         
            </div>
            </div>
            <div className={styles.skills}>
                <div className={styles.skillsColomn}>
                    <div className={styles.titleSkills}>Working Skills</div>
                    <Progress progressTitle="Web Design" progressPers="85%" valueBox="firstElem"/>
                    <Progress progressTitle="Web Design" progressPers="55%" valueBox="secondElem"/>
                    <Progress progressTitle="Web Design" progressPers="65%" valueBox="thirdElem"/>
                    <Progress progressTitle="Web Design" progressPers="72%" valueBox="fourthElem"/>
                </div>
                <div className={styles.skillsColomn}>
                    <div className={styles.titleSkills}>Knowledges</div>
                    <div className={styles.skillsPoints}>
                        <p>Digital Design</p>
                        <p>Marketing</p>
                        <p>Communication</p>
                        <p>Social Media</p>
                        <p>Time Managment</p>
                        <p>Flexibility</p>
                        <p>Print</p>
                    </div>
                </div>
            </div>
            <RightsThermes/>
        </div>
        </Container>
        </>
    )
};