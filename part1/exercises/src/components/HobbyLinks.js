import styles from './Hobbylinks.module.css'

export default function HobbyLinks(){

const hobbyLinks = ['https://www.espn.com/soccer/','https://golf.com/news/tiger-woods-player-director-merger-golf-secrets/','https://www.purehockey.com/?gclid=Cj0KCQjw2qKmBhCfARIsAFy8buJJxu2HboWoiicVbHFU1hQ-67rtp2Yp55YfG4YRYH15tXOJdajyHvoaAgTwEALw_wcB']
return (
    <div>
         <ol>
            <li ><a  className={styles.linkList} href={hobbyLinks[0]}>Soccer</a></li>
            <li ><a className={styles.linkList} href={hobbyLinks[1]}>Golf</a></li>
            <li  ><a className={styles.linkList}href={hobbyLinks[2]}>hokey</a></li>
        </ol>
    </div>
   
)

}