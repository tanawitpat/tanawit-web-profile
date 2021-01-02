/* eslint-disable no-undef */
/// <reference types="cypress" />
describe('Homepage', () => {
  it('loads correctly', () => {
    cy.visit('/')
    cy.get('[id="section-home"]').should('exist')
    cy.get('[id="section-aboutme"]').should('exist')
    cy.get('[id="section-experience"]').should('exist')
    cy.get('[id="section-activity"]').should('exist')
    cy.get('[id="section-footer"]').should('exist')
  })

  it('contains nerd mode button to redirect to nerd page', () => {
    cy.visit('/')
    cy.scrollTo('bottom')
    cy.get('[data-id="next-step-visit-nerd-site"]').click()
    cy.url().should('include', '/nerd')
  })
})

describe('Nerd page', () => {
  it('loads correctly', () => {
    cy.visit('/nerd')
    cy.get('[id="section-home"]').should('exist')
    cy.get('[id="section-skill"]').should('exist')
    cy.get('[id="section-experience"]').should('exist')
    cy.get('[id="section-github"]').should('exist')
    cy.get('[id="section-footer"]').should('exist')
  })
})
