import {createClient} from 'contentful';
import { useEffect, useState } from 'react';

  const client = createClient({
    space: import.meta.env.VITE_SPACE_ID,
    environment: 'master', // defaults to 'master' if not set
    accessToken: import.meta.env.VITE_ACCESS_TOKEN
  })


  export const useFeatchedData = ()=>{
    const [loading,setLoading] = useState(true);
    const [project,setProject] = useState([]);


    const getData =async ()=>{
      try {
        const {items} = await  client.getEntries()
        const project = items.map(ele=>{
          const {url,title,image} = ele.fields
          const id = ele.sys.id
          const img = image?.fields?.file?.url 
          return {url,title,id,img}
        })
        setProject(project)
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    }

    useEffect(()=>{
      getData()
    },[])

    return{loading,project}
  }
