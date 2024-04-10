describe("test for a company with cypress", () => {
    it("This is a new test from cypress", () => {
        cy.log("Welcome to cypress")
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')

        cy.wait(3000)

        // Haz clic en el botón para iniciar sesión
        cy.get('.btn.btn-primary.btn-lg[ng-click="customer()"]').click()

        cy.wait(1500)


        // Selecciona un usuario del menú desplegable
        cy.get('#userSelect').select('Harry Potter') 

        // Haz clic en el botón para continuar
        cy.get(".btn.btn-default").click()
        cy.wait(1500)

        // Realiza una transferencia
        cy.contains('Deposit').click()
        cy.get(".form-control.ng-pristine.ng-untouched.ng-invalid.ng-invalid-required").click().type("200")
        cy.get(".btn.btn-default").click()
        cy.wait(1500)

        // Verifica que la transferencia fue exitosa
        cy.get('.error.ng-binding').should('contain', 'Deposit Successful')

        cy.wait(1500)

        // Hacer una extracción de dinero, como se tiene una clase con el mismo valor nos basamos en ng-click tambien

        cy.get('.btn.btn-lg.tab[ng-click="withdrawl()"]').click()
        cy.get(".form-control.ng-pristine.ng-untouched.ng-invalid.ng-invalid-required").click().type("100")
        cy.get(".btn.btn-default").click()
        cy.wait(1500)

        //Verificar que la extracción fue exitosa 
        cy.get('.error.ng-binding').should('contain', 'Transaction successful')

        cy.wait(1500)

        // ir a transactions en orden de eliminar cualquier registro 

        cy.get('.btn.btn-lg.tab[ng-click="transactions()"]').click()
        cy.wait(1500)
        cy.get('.btn[ng-click="reset()"]')
        cy.wait(1500)
        cy.get(".btn.logout").click()
        cy.wait(1500)
        cy.get(".btn.home").click()




        cy.log("Primera prueba finalizada con exito")
    })
})