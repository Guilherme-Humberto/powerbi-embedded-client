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
