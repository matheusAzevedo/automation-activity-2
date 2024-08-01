// <reference types="cypress" />

const validString = "Agibank";
const invalidString = "lpakdnebnfhr";
const nonexistentPartialString = "tecno";
const existentPartialString = "árvore";

describe('Search Feature Automation', () => {
  beforeEach(() => {
    //  -- Given the user is on the homepage
    cy.visit('/');
  })

   it('Scenário 1: Search with results', () => {
       //  -- When the user searches an article using a valid word
       cy.searchArticleByWord(validString);
       //  -- Then the blog should return an article as a result
       cy.checkResults(validString);
       //  -- Then the result should contains the used word 
       cy.checkArticle(validString);
    })

    it('Scenário 2: Search without results', () => {
        //  -- When the user searches an article using an invalid word
        cy.searchArticleByWord(invalidString);
        // -- Then the blog should not return an article
        cy.checkNoResults();
     })

     it('Scenário 3: Partial Search with results', () => {
        //  -- When the user searches an article using a partial valid word
        cy.searchArticleByWord(existentPartialString);
      //  -- Then the blog should return an article as a result
      cy.checkResults(existentPartialString);
      //  -- Then the result should contains the used word 
      cy.checkArticle(existentPartialString);
     })

     it('Scenário 4: Partial Search without results', () => {
        //  -- When the user searches an article using a nonexistent partial word 
        cy.searchArticleByWord(nonexistentPartialString);
        // -- Then the blog should not return an article
        cy.checkNoResults();
     })

    it('Scenário 5: Search with results (search by title)', () => {
       //  -- When the user searches an article using a valid word
       cy.searchArticleByWord(validString);
       //  -- Then the blog should return an article as a result
       cy.checkResults(validString);
       //  -- Then the title should contains the used word 
       cy.checkArticleTitle(validString);
    })

 })