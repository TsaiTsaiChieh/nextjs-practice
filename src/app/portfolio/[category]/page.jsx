import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'

const Category = ({params}) => {
  return (
    <div>
      <h1>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image fill={true} src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg" alt="" className={styles.img} />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image fill={true} src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg" alt="" className={styles.img} />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image fill={true} src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg" alt="" className={styles.img} />
        </div>
      </div>
    </div>
  )
}

export default Category