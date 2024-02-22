Cypress.Commands.add("accessSearchButton", () => {
    cy.get('a[class="slide-search astra-search-icon"]').should('exist').click();
})

Cypress.Commands.add("searchArticleByWord", (word) => {
    cy.accessSearchButton();
    cy.get('input[class="search-field"]').eq(0).should('exist').click().type(word);
    cy.get('a[class="slide-search astra-search-icon"]').eq(0).should('exist').click();
})

Cypress.Commands.add("checkResults", (word) => {
    cy.get('h1[class="page-title ast-archive-title"]').contains("Search Results for: " + word);
})

Cypress.Commands.add("checkArticle", (word) => {
    cy.get('h2[class="entry-title ast-blog-single-element"] > a').eq(0).click({force : true});
    cy.get('div[class="entry-content clear"]').contains(word, {matchCase: false});
})

Cypress.Commands.add("checkNoResults", () => {
    cy.get('div[class="page-content"]').contains("Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.");
})

Cypress.Commands.add("checkArticleTitle", (word) => {
    cy.get('h1[class="page-title ast-archive-title"]').contains("Search Results for: " + word);
    cy.get('a[rel="bookmark"]').eq(0).contains(word, {matchCase: false});
})