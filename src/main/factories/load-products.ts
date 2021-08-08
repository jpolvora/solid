import { LastRankingLoaderService } from '@/data/services'
import { FakeRankingRepository } from '@/infra/repositories'
import { LoadLastRankingController } from '@/presentation/controllers'
import { Controller } from '@/presentation/contracts'

export const makeLoadProductsController = (): Controller => {
  const repo = new FakeRankingRepository()
  const loader = new LastRankingLoaderService(repo)
  return new LoadLastRankingController(loader)
}
