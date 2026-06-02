import { describe, it, expect } from 'vitest'
import { API_ENDPOINTS, QUERY_KEYS } from '~/constants/api'

describe('API Constants', () => {
  describe('API_ENDPOINTS', () => {
    it('has all required endpoints', () => {
      expect(API_ENDPOINTS.NEWS).toBe('news')
      expect(API_ENDPOINTS.PARTNERS).toBe('partners')
      expect(API_ENDPOINTS.NOTIONS).toBe('notions')
      expect(API_ENDPOINTS.SERVICES).toBe('services')
      expect(API_ENDPOINTS.ABOUTS).toBe('abouts')
      expect(API_ENDPOINTS.VALUES).toBe('values')
      expect(API_ENDPOINTS.COMMITMENTS).toBe('commitments')
      expect(API_ENDPOINTS.CAREERS).toBe('careers')
      expect(API_ENDPOINTS.EMPLOYEES).toBe('employees')
      expect(API_ENDPOINTS.HEADLINES).toBe('headlines')
      expect(API_ENDPOINTS.TAGS).toBe('tags')
      expect(API_ENDPOINTS.LOCATIONS).toBe('locations')
      expect(API_ENDPOINTS.PHOTOS).toBe('photos')
    })
  })

  describe('QUERY_KEYS', () => {
    it('has all required query keys', () => {
      expect(QUERY_KEYS.HERO).toBe('hero')
      expect(QUERY_KEYS.PARTNER).toBe('partner')
      expect(QUERY_KEYS.NOTIONS).toBe('notions')
    })
  })
})
