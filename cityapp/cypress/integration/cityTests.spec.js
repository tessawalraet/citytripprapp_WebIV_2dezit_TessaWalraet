import { ɵgetComponentViewDefinitionFactory } from "@angular/core";

describe('CityTrippr tests', function() {
    it('Login to an active account works', function() {
        cy.server();
        cy.visit('http://localhost:4200');
        cy.wait(200);
        cy.get('[data-cy=login]').click();
        cy.wait(200);
        cy.route({
            method: 'GET',
            url: 'http://localhost:4200/user/login',
            status: 404
        });
        cy.wait(200);
        cy.get('[data-cy=username-login]').type('Tom123').should('have.value', 'Tom123');
        cy.get('[data-cy=password-login]').type('Az1234Az').should('have.value', 'Az1234Az');
        cy.get('[data-cy=button-login]').click();
        cy.wait(200);
        cy.route({
            method: 'GET',
            url: 'http://localhost:4200/user/login',
            status: 200
        });
    });

    it('Login to an non-active account cannot work', function() {
        cy.server();
        cy.visit('http://localhost:4200');
        cy.wait(200);
        cy.get('[data-cy=login]').click();
        cy.wait(200);
        cy.route({
            method: 'GET',
            url: 'http://localhost:4200/user/login',
            status: 404
        });
        cy.wait(200);
        cy.get('[data-cy=username-login]').type('web4DoesntWork').should('have.value', 'web4DoesntWork');
        cy.get('[data-cy=password-login]').type('Az1234Az').should('have.value', 'Az1234Az');
        cy.get('[data-cy=button-login]').click();
        cy.wait(200);
        cy.route({
            method: 'GET',
            url: 'http://localhost:4200/user/login',
            status: 400
        });
    });

    it('Login to an active account, than filter a destination and go to profiletab', function() {
        cy.server();
        cy.visit('http://localhost:4200');
        cy.wait(2000);
        cy.get('[data-cy=login]').click();
        cy.wait(2000);
        cy.route({
            method: 'GET',
            url: 'http://localhost:4200/user/login',
            status: 404
        });
        cy.wait(2000);
        cy.get('[data-cy=username-login]').type('Tom123').should('have.value', 'Tom123');
        cy.get('[data-cy=password-login]').type('Az1234Az').should('have.value', 'Az1234Az');
        cy.get('[data-cy=button-login]').click();
        cy.wait(2000);
        cy.route({
            method: 'GET',
            url: 'http://localhost:4200/user/login',
            status: 200
        });
        cy.wait(2000);
        cy.get('[data-cy=filterInput]').type('Napels').should('have.value', 'Napels');
        cy.get('[data-cy=filter-button]').click();
        cy.wait(2000);
        cy.route({
            method: 'GET',
            url: 'http://localhost:4200/home',
            status: 200
        });
        cy.wait(2000);
        cy.get('[data-cy=profile]').click();
        cy.wait(2000);
        cy.visit('http://localhost:4200');
        cy.wait(2000);
        cy.route({
            method: 'GET',
            url: 'http//localhost:4200/UserProfile',
            status: 200
        });
    });
})