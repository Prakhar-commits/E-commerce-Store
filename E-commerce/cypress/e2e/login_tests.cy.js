describe("Login Tests", () => {
  beforeEach(() => {
    cy.visit("https://apkidukaan.vercel.app/login");
  });

  it("Successful Login", () => {
    cy.fixture("testdata").then((data) => {
      cy.get("#email").type(data.validUser.email);
      cy.get("#password").type(data.validUser.password);
      cy.get('button[type="submit"]').click();

      cy.url().should("include", "apkidukaan");
    });
  });
});
