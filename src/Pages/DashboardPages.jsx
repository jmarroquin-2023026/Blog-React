import React, { useEffect } from 'react'
import { usePublication } from '../shared/hooks/usePublication'
import { DashboardContent } from '../components/DashboardContent'

export const DashboardPages = () => {
    const {getPublications,allPublications}=usePublication()

    useEffect(()=>{
        getPublications()
    },[])
  return (
    <div>
        
      <DashboardContent publications={allPublications} getPublications={getPublications}/>
    </div>
  )
}


