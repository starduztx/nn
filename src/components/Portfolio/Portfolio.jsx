import React from 'react'
import styles from './Portfolio.module.css'

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*GaBtlHe240ZkwlcBrFczgQ.jpeg" alt="" />
            <p>This is a full guide to web applications for those entering the scene</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://www.imageonline.co.in/img/web-app-screen-designing-right-img.jpg" alt="" />
            <p>.  Leverage Design Thinking - Don’t Compromise of User Experience</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTFeBSJuHywwHT1-hBHO3P3LMJhHD1-yMAtzYSIHNz6_KYEmJNDwH9Z4Dc-w6s6uDGNMleWU7TUR7Q-RxDPokc" alt="" />
            <p>Collaborative Budget Planner</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://artfulhaven.com/wp-content/uploads/2019/12/INSPIRATION-BOARD-ART-JOURNAL7.jpg" alt="" />
            <p>Travel Journal & Inspiration Board</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9nTNzUIp89jSFomiB4DYpsW33GtiRQ34qw&usqp=CAU" alt="" />
            <p>Online Learning Platform with Quizzes</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://miro.medium.com/v2/resize:fit:1200/1*541Z4lmhoBxDjnP7wX3-cg.jpeg" alt="" />
            <p>Creative Writing Prompt Generator</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio