import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import {notFound} from 'next/navigation'

const getData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {cache: "no-store"})

  if (!res.ok) {
    return notFound()
  }

  return res.json()
}
const BlogPost = async ({params}) => {
  const data = await getData(params.id)
  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.info}>
            <h1 className={styles.title}>
              {data.title}
            </h1>
            <p className={styles.desc}>
              {data.body}
            </p>
            <div className={styles.author}>
              <Image src="https://images.pexels.com/photos/16446072/pexels-photo-16446072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={40} height={40} className={styles.avatar} />
              <span className={styles.username}>John Doe</span>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <Image src="https://images.pexels.com/photos/16734401/pexels-photo-16734401.jpeg" alt="" fill={true} className={styles.image} />
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore sunt veritatis voluptatem pariatur sint consequatur eius esse, delectus qui dolore, quaerat magni distinctio dolorum debitis, iure harum blanditiis optio. Eius.
            Maiores quis sequi voluptatibus repudiandae, ipsam ipsum aspernatur dolor sapiente nobis. Tenetur necessitatibus dolorum debitis ullam quos quis iste aspernatur beatae reprehenderit praesentium. Error aperiam assumenda, corporis doloribus aliquam neque!
            Perferendis commodi eos vel eveniet inventore sunt repudiandae illo, provident alias dolor, nulla esse quis qui ipsa quidem, voluptate quas eligendi beatae molestiae? Eos odit aliquam, voluptatem asperiores voluptatum similique!
            Fugiat, perferendis quod? Perspiciatis, sit. Minus ipsum commodi reiciendis tenetur officia perspiciatis voluptates placeat nostrum laudantium nisi accusamus eius provident quis delectus officiis iure esse, voluptatibus nulla dolore illo? Quia?
            Nobis ullam, dolorum, provident, ratione ipsa fugiat id quia sit laborum voluptates aliquid eligendi voluptatibus officia debitis obcaecati amet doloribus impedit omnis quaerat fuga deserunt. Quos eos illo cumque ipsa?</p>
        </div>
      </div>
    </>
  )
}

export default BlogPost