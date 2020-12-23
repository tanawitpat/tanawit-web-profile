/* eslint-disable no-undef */
/// <reference types="cypress" />
describe('Homepage', () => {
  it('loads correctly', () => {
    cy.visit('/')
    cy.contains('Tanawit')
  })
})
