describe("test for a company with cypress", () => {
    it("Segunda prueba bank manager login", () => {
        cy.log("Welcome to cypress")
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')

        cy.wait(3000)

        // Haz clic en el botón para iniciar sesión
        cy.get('.btn.btn-primary.btn-lg[ng-click="manager()"]').click()

        cy.wait(1500)


        // Procedemos a agregar un customer 
        cy.get('.btn.btn-lg.tab[ng-click="addCust()"]').click()
        cy.wait(1500)

        // Pasamos a llenar el formulario 
        cy.get('.form-control.ng-pristine.ng-untouched.ng-invalid.ng-invalid-required[ng-model="fName"]').click().type("Cesar")
        cy.get('.form-control.ng-pristine.ng-untouched.ng-invalid.ng-invalid-required[ng-model="lName"]').click().type("Acosta")
        cy.get('.form-control.ng-pristine.ng-untouched.ng-invalid.ng-invalid-required[ng-model="postCd"]').click().type("1406")
        cy.get(".btn.btn-default").click()
        cy.wait(1500)
        cy.on("window:confirm", (str) =>{

            expect(name).to.equal("Customer added successfully with customer id :15").find('Aceptar').click()


        })

        cy.get('.btn.btn-lg.tab[ng-click="openAccount()"]').click()
        cy.wait(1000)
        cy.get('#userSelect').select('Cesar Acosta') 
        cy.get('#currency').select('Dollar') 
        // hacemos click para crear la cuenta 
        cy.get("body > div > div > div.ng-scope > div > div.ng-scope > div > div > form > button").click()
        cy.wait(1500)
        cy.on("window:confirm", (str) =>{

            expect(name).to.equal("Account created successfully with account Number :1016").find('Aceptar').click()


        })

        cy.get('.btn.btn-lg.tab[ng-click="showCust()"]').click()
        cy.wait(1500)
        cy.get(".form-control.ng-pristine.ng-untouched.ng-valid").click().type("Cesar")


        cy.log("Primera prueba finalizada con exito")




       
    })

})