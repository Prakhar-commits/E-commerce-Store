describe("Registration Tests", () => {
  beforeEach(() => {
    cy.visit("https://apkidukaan.vercel.app/register");
  });

  it("Successful Registration", () => {
    cy.fixture("testdata").then((data) => {
      cy.get("#name").type(data.validUserRegister.name);
      cy.get("#email").type(data.validUserRegister.email);
      cy.get("#password").type(data.validUserRegister.password);
      cy.get('button[type="submit"]').click();

      cy.url().should("include", "/login");
    });
  });
});
