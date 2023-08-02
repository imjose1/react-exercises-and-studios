
import styles from './BookList.module.css'
export default function BookList() {
   let pageTitle = "shrug";
   let book1 = "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_640.jpg";
   let book2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW3hMIxX3zB2UF33Op14TdsClupkbSVLKQkQ&usqp=CAU";
   let book3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjP4gItSDT3dpLsJon9AGgdAAcIwsx8UcU1Q&usqp=CAU";

   return (
      <div>
         <h3 className={styles.bookHeading}>{pageTitle}</h3>
         <img  className ={styles.images} src={book1} alt="Romantic Comedy by Curtis Sittenfield" />
         <img className ={styles.images}  src={book2} alt="Tress of the Emerald Sea by Brandon Sanderson" />
         <img className ={styles.images}  src={book3} alt="The London Seance Society by Sarah Penner" />
      </div>      
   );
}