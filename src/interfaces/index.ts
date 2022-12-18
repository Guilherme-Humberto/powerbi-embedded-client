import {
  IQnaEmbedConfiguration,
  ITileEmbedConfiguration,
  IVisualEmbedConfiguration,
  models
} from 'powerbi-client'

export type IPowerbiInstanceConfig =
  | models.IReportEmbedConfiguration
  | models.IDashboardEmbedConfiguration
  | ITileEmbedConfiguration
  | IQnaEmbedConfiguration
  | IVisualEmbedConfiguration

export type IReportDimensions = {
  width: number
  height: number
}

export const reportDefaultConfig = {
  type: 'report',
  tokenType: models.TokenType.Embed,
  permissions: models.Permissions.All,
  settings: {
    layoutType: models.LayoutType.Custom,
    customLayout: {
      displayOption: models.DisplayOption.FitToWidth
    }
  }
}
