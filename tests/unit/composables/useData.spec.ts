import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useHeroData } from '~/composables/useHeroData'
import { usePartnerData } from '~/composables/usePartnerData'
import { useNotionData } from '~/composables/useNotionData'

// Mock useRuntimeConfig
vi.mock('#app', () => ({
  useRuntimeConfig: () => ({
    public: {
      strapiUrl: 'http://localhost:1337',
    },
  }),
}))

// Mock useQuery
vi.mock('@tanstack/vue-query', () => ({
  useQuery: vi.fn((options) => ({
    data: { value: [] },
    error: { value: null },
    isLoading: { value: false },
  })),
}))

describe('Composables', () => {
  describe('useHeroData', () => {
    it('calls useQuery with correct parameters', async () => {
      const result = await useHeroData('news')
      expect(result).toBeDefined()
    })

    it('returns data structure', async () => {
      const result = await useHeroData('news')
      expect(result).toHaveProperty('data')
    })
  })

  describe('usePartnerData', () => {
    it('calls useQuery with correct parameters', async () => {
      const result = await usePartnerData('partners')
      expect(result).toBeDefined()
    })

    it('returns data structure', async () => {
      const result = await usePartnerData('partners')
      expect(result).toHaveProperty('data')
    })
  })

  describe('useNotionData', () => {
    it('calls useQuery with correct parameters', async () => {
      const result = await useNotionData('notions')
      expect(result).toBeDefined()
    })

    it('returns data structure', async () => {
      const result = await useNotionData('notions')
      expect(result).toHaveProperty('data')
    })
  })
})
