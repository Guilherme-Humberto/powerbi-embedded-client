import React, { useEffect, useState } from 'react'
import Dashboard from '@components/organisms/Dashboard'
import { IPowerbiInstanceConfig, reportDefaultConfig } from '@interfaces/index'

const Home: React.FC = () => {
  const [config, setConfig] = useState<IPowerbiInstanceConfig>({})
  const [dimensions, setDimensions] = useState({ width: 1280, height: 720 })

  const getCredentials = async () => {
    const { data: response } = {} as any
    const { reportId, groupId, accessToken, reportDimensions } = response as any

    const embedUrl = `https://app.powerbi.com/reportEmbed?reportId=${reportId}&groupId=${groupId}`

    const reportConfig: IPowerbiInstanceConfig = {
      id: reportId,
      accessToken,
      embedUrl,
      ...reportDefaultConfig
    }

    setConfig(reportConfig)
    return setDimensions(reportDimensions)
  }

  useEffect(() => {
    getCredentials()
  }, [])

  return (
    <main>
      <Dashboard config={config} dimensions={dimensions} />
    </main>
  )
}

export default Home
