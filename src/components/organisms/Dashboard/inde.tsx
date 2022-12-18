import React, { useEffect, useRef, useState } from 'react'
import * as powerbi from 'powerbi-client'
import { IPowerbiInstanceConfig, IReportDimensions } from '@interfaces/index'
import { Container, EmbedContainer } from './styles'

interface IDashboardProps {
  config: IPowerbiInstanceConfig
  dimensions: IReportDimensions
}

const Dashboard: React.FC<IDashboardProps> = ({ config, dimensions }) => {
  const embedContainer = useRef<HTMLDivElement>({} as HTMLDivElement)
  const [reportInstance, setReportInstance] = useState<powerbi.Embed>(
    {} as powerbi.Embed
  )

  const reportFullScreen = () => {
    return reportInstance.fullscreen()
  }

  const createReportInstance = () => {
    const element = document.getElementById('powerbi-instance')

    if (element && element.classList.contains('open')) {
      const service = new powerbi.service.Service(
        powerbi.factories.hpmFactory,
        powerbi.factories.wpmpFactory,
        powerbi.factories.routerFactory
      )

      service.reset(element)

      const embed = service.embed(element, config)
      setReportInstance(embed)
    }
  }

  useEffect(() => {
    createReportInstance()
  }, [config.embedUrl, config.accessToken])

  return (
    <Container>
      <EmbedContainer ref={embedContainer} dimensions={dimensions}>
        <div id="powerbi-instance"></div>
      </EmbedContainer>
    </Container>
  )
}

export default Dashboard
