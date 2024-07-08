context("Actions", () => {
  beforeEach(() => {
    cy.visit("https://www.omniaccess.com/");
    //cy.visit("https://www.omniaccess.com/about-us/careers/");
  });

  it("Cancel cookies", () => {
    //Decline cookies
    cy.get("#CybotCookiebotDialogBodyButtonDecline").click();
    //Scroll to the bottom
    cy.scrollTo("bottom");
  });

  it("Accept cookies", () => {
    //Find an href inside which contains "careers" and click it
    cy.get("#CybotCookiebotDialogBodyLevelButtonPreferences").click();
    cy.get("#CybotCookiebotDialogBodyLevelButtonStatistics").click();
    cy.get("#CybotCookiebotDialogBodyLevelButtonMarketing").click();
    cy.get("#CybotCookiebotDialogNavDetails").click();

    cy.get("#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll")
      .should("be.visible")
      .click();

    cy.scrollTo("bottom");
    cy.get(":nth-child(3) > ul > :nth-child(1) > a").click();
  });

  it("Fill form", () => {
    //Decline cookies
    cy.get("#CybotCookiebotDialogBodyButtonDecline").click();
    //Scroll to the bottom
    cy.scrollTo("bottom");
    cy.get(":nth-child(3) > ul > :nth-child(1) > a").click();

    // cy.get(':nth-child(2) > .sub-bg-none > .btn')
    cy.get('a[href="https://jobs.omniaccess.com/jobs"]')
      .scrollIntoView({ easing: "linear" })
      .should("be.visible");
  });
});
/** */
