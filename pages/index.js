// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
// import React, { useState, useEffect } from 'react';



// export default function Home() { 

//   const [arrayPost, setArrayPost] = useState([]);
 
//   useEffect(()=>{
  
//     fetch('http://localhost:3000/realties', {
//       method: 'get',
//       headers: {        
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => response.json())
//       .then((response) => {
//         console.log(response);
//         setArrayPost(response);
//       })

     
// },[]);

//   return (
//     <div>
//       <Head>
//         <title>ImmoCoin</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <div id={styles.jumbotron_banner} className="relative hero-image bg-right-bottom bg-cover flex" />
                 
      
      

//       <div className={styles.container}>
//         <div className={styles.title}>Nos annonces</div>
//         <div>
//         <div>
//           {Array.from(arrayPost).map(post=> (
//           <div key={post.id}><h1>{post.title}</h1> <h2>{post.price}</h2> <p>{post.description}</p></div>)
//           )}
//         </div>
//       </div>
//       </div>
//     </div>
//   )
// }

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react';
import CardIndex from '../components/CardIndex';

export default function Home() {
  const [posts, setPosts] = React.useState([])
  
  const fetchPosts = () => {

    fetch('http://localhost:3000/realties', {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        setPosts(response);
        setAllPosts(response);
      })
      .catch(err => console.log(err))
  }

   
  React.useEffect(() => { fetchPosts() }, [])

  return (
    <div>
      <Head>
        <title>Immo Coin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id={styles.jumbotron_banner} className="relative hero-image bg-right-bottom bg-cover flex" />           
      

      <div className={styles.container}>
        <div className={styles.title}>Nos annonces</div>
        
        <div className="grid xl:grid-cols-3 mt-6">
          {Array.from(posts).sort((a,b) => new Date(b.created_at) - new Date(a.created_at)).map(post =>
            <div key={post.id} className="container md:mx-auto justify-content">
              <CardIndex title={post.title} id={post.id} />
            </div>
          )
          }
        </div>
      </div>
    </div>
  )
}
